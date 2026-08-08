---
name: maintain-shaoshur-site
description: Maintain and extend the static ShaoShur website and its Qlik portfolio. Use when editing the homepage, project catalog, individual portfolio pages, Russian copy, SVG artwork, downloadable files, responsive styling, or preparing the site for GitHub Pages publication.
---

# Maintain ShaoShur Site

## Preserve the architecture

- Keep the site static: HTML, CSS and vanilla JavaScript without a build step.
- Store shared visual assets in `assets/`, downloadable files in `downloads/`, portfolio listings in `portfolio/`, and each case in its own `portfolio/<project>/` directory.
- Never reference or publish files from `Данныен которые нужно использовать/`. Copy approved materials into the public architecture and keep their public names concise and URL-safe.
- Preserve existing user content unless the requested change requires editing it.

## Follow the visual and editorial system

- Keep layouts compact, quickly scannable and responsive. Avoid large empty bands, oversized cards and decorative sections without information value.
- Use a professional, factual Russian tone. Prefer headings such as `Инструменты` and `Обучающие материалы`; avoid advertising slogans and conversational filler.
- Reuse the established dark, paper and acid-green palette, Manrope headings, IBM Plex Mono labels, thin borders and square geometry.
- Create principal portfolio illustrations as original local SVG files in the established system style. Use product screenshots only inside compact, clickable galleries.
- Verify both desktop and mobile layouts after structural CSS changes.

## Extend the portfolio

- Preserve the navigation flow: homepage portfolio block → project catalog → individual project page.
- Add a direct project link to the homepage portfolio card and a full project card to `portfolio/index.html`.
- Keep each project page concise: short summary, project metadata, supplemental-file warning, grouped screenshots and a direct download beside each screenshot group.
- Put theme and custom-extension downloads in the project header when they are required for correct rendering.
- Add every new public page to `sitemap.xml` and document architectural changes in the root `README.md` only when useful.

## Validate changes

1. Check JavaScript with `node --check`.
2. Parse new SVG files as XML.
3. Verify every relative `href` and `src` resolves locally.
4. Serve the site locally and confirm pages, images and downloads return HTTP 200.
5. Render desktop and mobile previews; remove temporary preview files afterward.
6. Confirm source-material directories and local preview files are excluded from publication.

## Publish safely

- Inspect the remote branch and preserve its history before creating a commit.
- Stage only intended website and skill files.
- Use a concise commit message describing the user-visible result.
- Push only after an explicit publication request.
- Never force-push or rewrite remote history unless the user explicitly authorizes it.
