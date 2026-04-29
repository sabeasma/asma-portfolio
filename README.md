# ASMA BANU I Portfolio

Modern, recruiter-focused personal portfolio built with Next.js App Router and Tailwind CSS.

## Features

- Premium dark UI with gradient accents
- Fully responsive layout for desktop, tablet, and mobile
- Sticky blur navbar with active section state
- Smooth scrolling + section reveal animations
- Polished intro loading screen
- Data-driven sections via centralized content file
- Dedicated routes for all key sections
- Contact form with mail client handoff (`mailto`)
- Static export configured for GitHub Pages

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS 3
- PostCSS + Autoprefixer

## Folder Structure

```
asma-portfolio/
	app/
		about/page.jsx
		certifications/page.jsx
		contact/page.jsx
		education/page.jsx
		languages/page.jsx
		projects/page.jsx
		skills/page.jsx
		globals.css
		layout.jsx
		page.jsx
	components/
		About.jsx
		Certifications.jsx
		Contact.jsx
		Education.jsx
		Footer.jsx
		Hero.jsx
		Languages.jsx
		Navbar.jsx
		Projects.jsx
		SectionHeading.jsx
		Skills.jsx
	data/
		portfolioData.js
	lib/
		useScrollReveal.js
	public/
		assets/
			pattern-grid.svg
			icons/
```

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build Check

```bash
npm run build
```

The build generates a static `out/` folder that is ready for GitHub Pages.

## GitHub Pages

This project is configured for static hosting with:

- `output: 'export'`
- `trailingSlash: true`
- a repo-aware base path in `next.config.mjs`
- a GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)

To deploy, push to the `main` branch and enable GitHub Pages in the repository settings using the GitHub Actions source.

## Content Editing

Update personal data, skills, projects, certifications, and links in:

- `data/portfolioData.js`

The UI components automatically consume this data.
