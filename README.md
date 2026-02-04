# ER of White Rock - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Sanity Studio
```bash
npm run sanity
```

This will open Sanity Studio at `http://localhost:3333`

### 3. Import Sample Data

**Option A: Using npm script**
```bash
npm run sanity:import
```

**Option B: Manual import via Sanity Studio**
1. Open Sanity Studio at `http://localhost:3333`
2. Manually create documents using the sample data from `sanity-import/data.ndjson`

### 4. Create Landing Page in Sanity Studio

1. Go to **Landing Page** in the sidebar
2. Add a title (e.g., "Home")
3. Click **Add item** in the "Page Sections" array
4. Add sections in your preferred order:
   - Hero
   - Trust Badges
   - Insurance Bar
   - About Section (create 3: one for "About", one for "Why Opened", one for "Commitment")
   - Physicians Section
   - Services Section
   - Comparison Table
   - When to Come
   - Process Section (What to Expect)
   - Testimonials Section
   - Community Section
   - FAQ Section
   - CTA Section

### 5. Upload Images

For each section that requires images, upload them in Sanity Studio:
- **Hero Background**: 1920x1080px
- **Physician Headshots**: 400x400px
- **Trust Badges**: 200x200px or SVG
- **Community Map**: 800x600px

### 6. Start Astro Dev Server
```bash
npm run dev
```

Visit `http://localhost:4321` to see your website!

---

## Project Structure

```
├── schema/              # Sanity schemas
├── src/
│   ├── components/
│   │   └── sections/   # Page section components
│   ├── lib/
│   │   ├── sanity.ts   # Sanity client
│   │   └── queries.ts  # GROQ queries
│   └── pages/
│       └── index.astro # Homepage with Page Builder
└── sanity-import/
    └── data.ndjson     # Sample data
```

## Sanity Configuration

- **Project ID**: `hdx7hgqq`
- **Dataset**: `production`
- **Studio URL**: `http://localhost:3333`

## Available Scripts

- `npm run dev` - Start Astro dev server
- `npm run build` - Build for production
- `npm run sanity` - Start Sanity Studio
- `npm run sanity:deploy` - Deploy Sanity Studio
- `npm run sanity:import` - Import sample data
