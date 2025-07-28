# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static blog website built with Cryogen (a Clojure-based static site generator). The site serves as a personal blog featuring articles about programming, particularly Python, Clojure, and Haskell.

## Architecture

### Static Site Generation
- This is a **static website** - no build process required for basic content updates
- Content is pre-generated and served directly from GitHub Pages
- Site is accessible at defunsm.github.io

### Directory Structure
- `posts/` - Raw blog post content (HTML files)
- `posts-output/` - Generated blog post pages
- `pages/` - Static pages and PDF documents
- `pages-output/` - Generated static pages
- `public/` - Another copy of generated content
- `css/`, `js/`, `img/` - Static assets (stylesheets, scripts, images)
- `index.html` - Main homepage

### Content Organization
- Blog posts are organized by date and topic
- Topics include Python, Clojure, Haskell, machine learning, physics
- Each post has its own directory with an `index.html` file
- PDF versions of posts are stored in the `pages/` directory

## Development Notes

### Content Updates
- To add new blog posts: Create HTML files in the `posts/` directory
- Images should be placed in the `img/` directory
- CSS modifications can be made in the `css/` directory

### Email Updates
- There's a script `posts/auto.sh` for bulk email updates across posts
- This script replaces old email addresses with new ones in HTML files

### No Build System
- This project does not use npm, yarn, or similar build tools
- No linting or testing commands are configured
- Changes to HTML/CSS/JS files are applied directly

### Deployment
- Site is deployed via GitHub Pages
- Simply push changes to the master branch to update the live site