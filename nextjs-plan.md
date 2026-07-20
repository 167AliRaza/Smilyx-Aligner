# Next.js Migration and SEO Plan

## Objective

Convert the Smilyx Vite single-page application into a Next.js App Router site that serves indexable URLs, supplies complete metadata, and keeps the existing visual design and interactions.

## Migration Scope

1. Replace Vite scripts and configuration with Next.js.
2. Move reusable screens outside Next.js's reserved `pages` directory.
3. Create App Router routes for the home page, treatments, company pages, FAQs, privacy policy, contact page, blog index, and article detail pages.
4. Replace hash navigation with path-based navigation.
5. Move application images into `public` when they must be served locally.
6. Keep interactions such as filters, mobile navigation, forms, sliders, and animation components as client components.

## SEO Requirements

1. Configure `NEXT_PUBLIC_SITE_URL` as the single canonical origin.
2. Add page-specific titles, descriptions, canonical URLs, Open Graph fields, and Twitter card fields.
3. Use a real URL for each article at `/blogs/[slug]` and generate article metadata from post data.
4. Generate `sitemap.xml` from static pages and blog entries.
5. Generate `robots.txt` that allows crawling and points to the sitemap.
6. Add organization/dentist structured data globally, FAQPage structured data on the FAQ page, and BlogPosting structured data on each article page.
7. Retain a single meaningful H1 on each route and use semantic article markup for blog posts.
8. Return a proper 404 page for unknown URLs.

## Verification

1. Run `npm run build` to compile, type-check, and statically generate all routes.
2. Confirm that the build output includes only App Router routes, without legacy `src/pages` routes.
3. Verify `/sitemap.xml`, `/robots.txt`, `/blogs`, and each `/blogs/[slug]` page in a local server.
4. Set `NEXT_PUBLIC_SITE_URL` to the production domain before deployment so canonical URLs, JSON-LD, sitemap entries, and robots output use the correct host.

## Operational Follow-up

1. Connect the contact form to a real server action or API endpoint before using it for leads.
2. Replace remote stock images with approved, optimized local assets where content ownership and performance require it.
3. After production deployment, inspect canonical URLs, sitemap discovery, and structured data using Google Search Console and Rich Results Test.
