# NIM Paints — Image Replacement Plan

## Goal
Replace all remote/placeholder images with local assets in `public/`, converting `<img>` tags to Next.js `<Image>` for optimization.

## Folder Structure
```
public/
├── images/
│   ├── products/      ← 9 product images (mixed .png/.webp/.jpg)
│   ├── projects/      ← 6 project images
│   └── heroes/        ← hero backgrounds (home, about, products, contact)
├── nim-logo-site-600x135.png   (unchanged)
├── centenary-bank-768x427.png  (unchanged)
├── habib-768x427.png           (unchanged)
├── job-connect-768x427.png     (unchanged)
├── mirage-768x427.png          (unchanged)
├── water-768x427.png           (unchanged)
├── favicon.ico                 (unchanged)
└── resources/                  (unchanged)
```

## Image Naming Convention

| Category     | Pattern                    | Example                         |
|--------------|----------------------------|---------------------------------|
| Products     | `{slug}.{ext}`              | `nim-undercoat.webp`            |
| Projects     | `{slug}.{ext}`              | `centenary-bank.jpg`            |
| Heroes       | `{page}-hero.{ext}`         | `home-hero.webp`                |

## Files to Modify

### 1. `src/data/products.ts` — 9 product image URLs
Replace each `img:` value from Google URL to `/images/products/{slug}.{ext}`.

### 2. `src/data/projects.ts` — 6 project image URLs
Replace each `img:` value from Google URL to `/images/projects/{slug}.{ext}`.

### 3. `src/app/projects/page.tsx` — 6 project image URLs + `<img>` → `<Image>`
- Replace same 6 Google URLs with local paths
- Add `import Image from "next/image"`
- Convert `<img>` tags to `<Image>` with `fill` or explicit dimensions

### 4. `src/app/page.tsx` — 4 hero/teaser images → `<Image>`
| Image              | Destination path                    |
|--------------------|-------------------------------------|
| Hero background    | `/images/heroes/home-hero.{ext}`    |
| Product teaser     | `/images/heroes/home-products.{ext}`|
| Project teaser     | `/images/heroes/home-projects.{ext}`|
| Legacy paint tin   | `/images/heroes/home-legacy.{ext}`  |

### 5. `src/app/about/page.tsx` — Hero image → `<Image>`
- Replace `<img>` with `<Image fill className="object-cover" />`
- Path: `/images/heroes/about-hero.{ext}`

### 6. `src/app/products/page.tsx` — Hero background
- Replace CSS `backgroundImage` div with `<Image fill className="object-cover" />`
- Preserve `opacity-25` overlay on parent
- Path: `/images/heroes/products-hero.{ext}`

### 7. `src/app/contact/page.tsx` — Hero background
- Replace CSS `backgroundImage` div with `<Image fill className="object-cover" />`
- Preserve gradient overlay
- Path: `/images/heroes/contact-hero.{ext}`

### 8. `src/app/products/[slug]/page.tsx` — Product detail images
- Convert `<img>` to `<Image>` on detail page and related products
- This is a server component — `next/image` works without `"use client"`

### 9. `next.config.ts` — Cleanup
- Remove `remotePatterns` for `lh3.googleusercontent.com`
- Add `remotePatterns` for `images.unsplash.com` (color visualizer) if not already present

## `<img>` → `<Image>` Conversion Patterns

### Pattern A — Decorative hero (fill):
```tsx
<div className="absolute inset-0 z-0">
  <Image src="/images/heroes/home-hero.webp" alt="" fill className="object-cover" />
</div>
```

### Pattern B — Grid image with aspect ratio:
```tsx
<div className="aspect-[16/10] overflow-hidden relative">
  <Image
    src={product.img}
    alt={product.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-1000"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
  />
</div>
```

### Pattern C — Header logo:
```tsx
<Image
  src="/nim-logo-site-600x135.png"
  alt="NIM Paints"
  width={133}
  height={30}
  className="w-auto h-8"
/>
```

## Cleanup (Optional)
- Delete `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`

## Notes
- Color Visualizer keeps its Unsplash images (no change).
- Partner logos stay in `public/` root (no change).
- Mixed image formats supported — just match the extension in the import path.
- Unsplash domain needs to remain in `remotePatterns` for color visualizer to work.
