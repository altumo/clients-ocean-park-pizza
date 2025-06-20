# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a clone of the Ocean Park Pizza Walnut Grove website (https://oceanparkpizzawalnutgrove.ca/). The site is a simple static website that displays the restaurant's menu as a series of images across 6 pages.

## File Structure

- `index.html` - Main HTML file containing the menu display structure
- `styles.css` - CSS styling for the website (combines original site styles with responsive improvements)
- `.claude/settings.local.json` - Claude Code local settings

## Development

Since this is a static HTML/CSS website, no build process or package management is required. Simply open `index.html` in a web browser to view the site.

To test changes:
```bash
open index.html
```

## Website Structure

The website consists of:
- **Header section** with "Contact Us" and "Download Menu" buttons
- **Blue decorative bar** underneath the header
- **Main content area** displaying "Ocean Park Pizza Menu" title
- **Six menu page sections** each containing an image of a menu page

## Original Website Details

- Uses XHTML 1.0 Transitional DOCTYPE
- Includes jQuery 1.5.1 for potential JavaScript functionality
- References external CSS frameworks (Blueprint CSS)
- Menu images are referenced as `/images/menu/1.jpg` through `/images/menu/6.jpg`
- Uses gradient backgrounds for buttons and decorative elements

## Styling Approach

The CSS includes:
- Gradient button styling (green for Contact Us, blue for Download Menu)
- Responsive design improvements for mobile devices
- Center-aligned layout with maximum widths
- Brown color scheme for headings (#6C312E)
- Blue gradient accents (#6db3f2 to #1e69de)

## Notes

- The original site uses image-based menus rather than text content
- Menu images would need to be obtained separately to fully replicate the site
- JavaScript functionality for buttons is referenced but not implemented in this clone