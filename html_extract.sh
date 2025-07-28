mkdir -p html_files && find posts -name "*.html" -type f | while IFS= read -r file; do
    parent_dir=$(basename "$(dirname "$file")")
    filename=$(basename "$file")
    cp "$file" "html_files/${parent_dir}_${filename}"
done
