#!/usr/bin/env python3
"""
HTML to Markdown Converter

This script converts HTML files to Markdown format using various conversion methods.
Supports both individual files and batch conversion with multiple options.
"""

import os
import sys
import argparse
import subprocess
import shutil
from pathlib import Path
import logging

# Try to import html2text
try:
    import html2text
    HTML2TEXT_AVAILABLE = True
except ImportError:
    HTML2TEXT_AVAILABLE = False


class HTMLToMarkdownConverter:
    """Convert HTML files to Markdown using different methods."""
    
    def __init__(self, method="pandoc", preserve_structure=False, verbose=False):
        """
        Initialize the converter.
        
        Args:
            method (str): Conversion method ('pandoc', 'html2text', or 'auto')
            preserve_structure (bool): Maintain original folder structure
            verbose (bool): Enable verbose output
        """
        self.method = method
        self.preserve_structure = preserve_structure
        self.verbose = verbose
        self.setup_logging()
        self.check_dependencies()
    
    def setup_logging(self):
        """Setup logging configuration."""
        level = logging.INFO if self.verbose else logging.WARNING
        logging.basicConfig(
            level=level,
            format='%(levelname)s: %(message)s'
        )
        self.logger = logging.getLogger(__name__)
    
    def check_dependencies(self):
        """Check if required tools are available."""
        self.pandoc_available = shutil.which("pandoc") is not None
        
        if self.method == "pandoc" and not self.pandoc_available:
            print("Error: Pandoc is not installed or not in PATH.")
            print("Install pandoc: https://pandoc.org/installing.html")
            sys.exit(1)
        
        if self.method == "html2text" and not HTML2TEXT_AVAILABLE:
            print("Error: html2text library is not installed.")
            print("Install with: pip install html2text")
            sys.exit(1)
        
        if self.method == "auto":
            if self.pandoc_available:
                self.method = "pandoc"
                self.logger.info("Using pandoc for conversion")
            elif HTML2TEXT_AVAILABLE:
                self.method = "html2text"
                self.logger.info("Using html2text for conversion")
            else:
                print("Error: No conversion tools available.")
                print("Install either pandoc or html2text library.")
                sys.exit(1)
    
    def convert_with_pandoc(self, input_file, output_file, options=None):
        """
        Convert HTML to Markdown using Pandoc.
        
        Args:
            input_file (Path): Input HTML file
            output_file (Path): Output Markdown file
            options (dict): Additional pandoc options
        
        Returns:
            bool: True if successful, False otherwise
        """
        default_options = {
            "from": "html",
            "to": "gfm",  # GitHub Flavored Markdown
            "wrap": "none",
            "extract-media": None  # Will be set to output directory
        }
        
        if options:
            default_options.update(options)
        
        # Set media extraction directory
        if default_options["extract-media"] is None:
            media_dir = output_file.parent / f"{output_file.stem}_media"
            default_options["extract-media"] = str(media_dir)
        
        # Build pandoc command
        cmd = ["pandoc", str(input_file)]
        
        for key, value in default_options.items():
            if value is not None:
                cmd.extend([f"--{key}", str(value)])
            else:
                cmd.append(f"--{key}")
        
        cmd.extend(["-o", str(output_file)])
        
        try:
            result = subprocess.run(
                cmd, 
                capture_output=True, 
                text=True, 
                check=True
            )
            self.logger.info(f"Pandoc conversion successful: {input_file.name}")
            return True
        except subprocess.CalledProcessError as e:
            self.logger.error(f"Pandoc error for {input_file.name}: {e.stderr}")
            return False
        except Exception as e:
            self.logger.error(f"Unexpected error with pandoc: {e}")
            return False
    
    def convert_with_html2text(self, input_file, output_file, options=None):
        """
        Convert HTML to Markdown using html2text library.
        
        Args:
            input_file (Path): Input HTML file
            output_file (Path): Output Markdown file
            options (dict): html2text options
        
        Returns:
            bool: True if successful, False otherwise
        """
        default_options = {
            "ignore_links": False,
            "ignore_images": False,
            "body_width": 0,  # No line wrapping
            "unicode_snob": True,
            "escape_snob": True
        }
        
        if options:
            default_options.update(options)
        
        try:
            # Create html2text instance
            h = html2text.HTML2Text()
            
            # Set options
            for key, value in default_options.items():
                setattr(h, key, value)
            
            # Read HTML file
            with open(input_file, 'r', encoding='utf-8', errors='ignore') as f:
                html_content = f.read()
            
            # Convert to markdown
            markdown_content = h.handle(html_content)
            
            # Write markdown file
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(markdown_content)
            
            self.logger.info(f"html2text conversion successful: {input_file.name}")
            return True
            
        except Exception as e:
            self.logger.error(f"html2text error for {input_file.name}: {e}")
            return False
    
    def convert_file(self, input_file, output_file, **kwargs):
        """
        Convert a single HTML file to Markdown.
        
        Args:
            input_file (Path): Input HTML file
            output_file (Path): Output Markdown file
            **kwargs: Additional options for conversion method
        
        Returns:
            bool: True if successful, False otherwise
        """
        # Ensure output directory exists
        output_file.parent.mkdir(parents=True, exist_ok=True)
        
        # Choose conversion method
        if self.method == "pandoc":
            return self.convert_with_pandoc(input_file, output_file, kwargs.get('pandoc_options'))
        elif self.method == "html2text":
            return self.convert_with_html2text(input_file, output_file, kwargs.get('html2text_options'))
        else:
            self.logger.error(f"Unknown conversion method: {self.method}")
            return False
    
    def convert_batch(self, source_dir, target_dir, **kwargs):
        """
        Convert all HTML files in a directory.
        
        Args:
            source_dir (str): Source directory path
            target_dir (str): Target directory path
            **kwargs: Additional options for conversion
        
        Returns:
            dict: Summary of conversion results
        """
        source_path = Path(source_dir)
        target_path = Path(target_dir)
        
        if not source_path.exists():
            raise FileNotFoundError(f"Source directory not found: {source_dir}")
        
        # Find all HTML files
        html_files = list(source_path.glob("**/*.html")) + list(source_path.glob("**/*.htm"))
        
        if not html_files:
            print(f"No HTML files found in {source_dir}")
            return {"success": 0, "failed": 0, "total": 0}
        
        print(f"Found {len(html_files)} HTML file(s) to convert...")
        
        success_count = 0
        failed_count = 0
        failed_files = []
        
        for html_file in html_files:
            try:
                if self.preserve_structure:
                    # Maintain directory structure
                    relative_path = html_file.relative_to(source_path)
                    output_file = target_path / relative_path.with_suffix('.md')
                else:
                    # Flatten to target directory
                    output_file = target_path / f"{html_file.stem}.md"
                    
                    # Handle naming conflicts
                    counter = 1
                    while output_file.exists():
                        output_file = target_path / f"{html_file.stem}_{counter}.md"
                        counter += 1
                
                # Convert file
                if self.convert_file(html_file, output_file, **kwargs):
                    success_count += 1
                    print(f"✓ Converted: {html_file.name} -> {output_file.name}")
                else:
                    failed_count += 1
                    failed_files.append(str(html_file))
                    print(f"✗ Failed: {html_file.name}")
                    
            except Exception as e:
                failed_count += 1
                failed_files.append(str(html_file))
                self.logger.error(f"Error processing {html_file}: {e}")
        
        return {
            "success": success_count,
            "failed": failed_count,
            "total": len(html_files),
            "failed_files": failed_files
        }


def main():
    """Main function for command line interface."""
    parser = argparse.ArgumentParser(
        description="Convert HTML files to Markdown",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  %(prog)s source_folder target_folder
  %(prog)s input.html output.md
  %(prog)s source_folder target_folder --method html2text
  %(prog)s source_folder target_folder --preserve-structure --verbose
        """
    )
    
    parser.add_argument(
        "source",
        help="Source HTML file or directory"
    )
    parser.add_argument(
        "target",
        help="Target Markdown file or directory"
    )
    parser.add_argument(
        "--method",
        choices=["pandoc", "html2text", "auto"],
        default="auto",
        help="Conversion method (default: auto)"
    )
    parser.add_argument(
        "--preserve-structure",
        action="store_true",
        help="Preserve original directory structure"
    )
    parser.add_argument(
        "--verbose", "-v",
        action="store_true",
        help="Enable verbose output"
    )
    parser.add_argument(
        "--pandoc-format",
        default="gfm",
        help="Pandoc output format (default: gfm)"
    )
    parser.add_argument(
        "--ignore-links",
        action="store_true",
        help="Ignore links when using html2text"
    )
    parser.add_argument(
        "--ignore-images",
        action="store_true",
        help="Ignore images when using html2text"
    )
    
    args = parser.parse_args()
    
    # Initialize converter
    converter = HTMLToMarkdownConverter(
        method=args.method,
        preserve_structure=args.preserve_structure,
        verbose=args.verbose
    )
    
    source_path = Path(args.source)
    target_path = Path(args.target)
    
    # Prepare conversion options
    pandoc_options = {"to": args.pandoc_format}
    html2text_options = {
        "ignore_links": args.ignore_links,
        "ignore_images": args.ignore_images
    }
    
    try:
        if source_path.is_file():
            # Single file conversion
            if target_path.is_dir():
                target_file = target_path / f"{source_path.stem}.md"
            else:
                target_file = target_path
            
            success = converter.convert_file(
                source_path, 
                target_file,
                pandoc_options=pandoc_options,
                html2text_options=html2text_options
            )
            
            if success:
                print(f"✓ Converted: {source_path} -> {target_file}")
            else:
                print(f"✗ Failed to convert: {source_path}")
                sys.exit(1)
        
        elif source_path.is_dir():
            # Batch conversion
            results = converter.convert_batch(
                str(source_path),
                str(target_path),
                pandoc_options=pandoc_options,
                html2text_options=html2text_options
            )
            
            # Print summary
            print("\n" + "="*50)
            print("CONVERSION SUMMARY")
            print("="*50)
            print(f"Total files: {results['total']}")
            print(f"Successfully converted: {results['success']}")
            print(f"Failed conversions: {results['failed']}")
            
            if results['failed'] > 0 and args.verbose:
                print("\nFailed files:")
                for failed_file in results['failed_files']:
                    print(f"  - {failed_file}")
            
            if results['success'] > 0:
                print(f"\nMarkdown files saved to: {target_path.absolute()}")
            
            # Exit with error code if any conversions failed
            if results['failed'] > 0:
                sys.exit(1)
        
        else:
            print(f"Error: Source path not found: {source_path}")
            sys.exit(1)
    
    except KeyboardInterrupt:
        print("\nOperation cancelled by user.")
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
