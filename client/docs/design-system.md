# Terra Design System

## Project Information

- Project Name: Terra
- Type: Handmade Pottery E-commerce
- Language: Persian (RTL)
- Framework: React 19
- Language: TypeScript
- Styling: Tailwind CSS v4

---

## Brand Personality

- Calm
- Artistic
- Handmade
- Minimal
- Premium
- Natural

---

## Typography

### Primary Font

Estedad

## Navbar

### Completed

- Created modular Navbar architecture.
- Separated Navbar into reusable components:
  - Logo
  - NavLinks
  - NavActions
  - SearchOverlay
- Added Persian (Estedad) and English (Cormorant Garamond) fonts.
- Implemented responsive desktop navigation structure.
- Added Lucide icons.
- Designed expandable Search Overlay under the Navbar.
- Added project theme colors using Tailwind CSS v4.

### 6/28/2026

### Session Progress

- Built the responsive navbar.
- Added custom fonts.
- Created reusable navigation components.
- Implemented the mobile drawer.
- Added the search overlay.
- Improved the project structure.

### Next Session

- Complete the mobile menu.
- Finalize the navbar.
- Start the Hero section.

### 6/29/2026

## Navbar & Search Overlay Improvements

- Refactored Search Overlay using Portal.
- Added global backdrop and body scroll lock.
- Moved popular searches into a dedicated data source.
- Added reusable SearchSuggestion component.
- Improved mobile navigation behavior.
- Prepared Search Overlay structure for real-time search integration.

### Hero Section Improvements

- Improved Hero content layout for better responsiveness.
- Added a premium badge section above the main heading.
- Applied the display font to Hero typography.
- Fixed text alignment on mobile and tablet screens.
- Refined spacing for Hero content to improve readability.
- Continued preparing the Hero section for future animations and backend integration.

### 6/30/2026

## Featured Products

- Added Product type
- Added products data
- Created ProductCard component
- Added FeaturedProducts section
- Added price formatter utility
- Improved responsive behavior
- Added hover interactions
- Mobile action buttons are always visible
- Redesigned product card layout

## Featured Products

- Created Featured Products section
- Created reusable ProductCard component
- Added products data
- Added responsive product grid
- Added hover interactions
- Mobile action buttons always visible
- Added View All Products buttons
- Improved product card UI
- Added reusable Divider component

# Session 13 – Shop Logic

## Completed

### Shop Toolbar

- Replaced the static search button with a functional search input.
- Designed the toolbar to support future scalability.
- Added reusable FilterPopover component.

### Search

- Implemented real-time search.
- Search now supports:
  - Persian title
  - English title
  - Product category
  - Product badge
  - Product keywords

### Product Keywords

- Added `keywords` field to Product model.
- Improved search accuracy using custom keywords.

### Category Filter

- Added product categories.
- Connected category filter to shop state.
- Products now filter dynamically based on selected category.

### Sorting

Implemented product sorting:

- Newest
- Oldest
- Lowest Price
- Highest Price

### Empty State

Added empty state when no products match search/filter.

---

## Refactoring

- Created reusable `FilterPopover` component.
- Separated categories and sorting options into constants.
- Improved ShopPage filtering logic.

---

## Current Progress

Home Page

- ✅ Completed

Shop Page

- ✅ Search
- ✅ Category Filter
- ✅ Sorting
- ✅ Empty State

Next Step

- Product Details Page

### 7/1/2026

### Product Details

- Added dynamic product page using slug
- Created ProductGallery component
- Created ProductInfo component
- Added breadcrumb navigation
- Added product rating section
- Built reusable QuantitySelector component
- Implemented product lookup with getProductBySlug utility
- Improved project structure for future product features
