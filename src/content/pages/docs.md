---
title: "Documentation - Quickdir"
meta_title: ""
description: "Quickdirs template documentation"
draft: false
---

# 📚 Quickdir Documentation

> **Welcome to Quickdir!**
>
> This documentation will guide you through setup, configuration, customization, and content management for your Quickdir Next.js template. Whether you are a developer or a content editor, you’ll find everything you need to launch and maintain your site efficiently.

---

## 🚀 Getting Started

### 1. Download and extract project source code

- Download the zip file of the project and unzip it
- Go to the project directory: `cd your-project-directory`

### 2. Install Dependencies

Install all required packages:

```bash
yarn install
```

### 3. Start the Development Server

Run the following command to start your local server:

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view your site.

### 4. Build for Production

To create an optimized production build and preview it locally:

```bash
yarn build
yarn preview
```

---

## ⚙️ Configuration

All main configuration options are located in [`src/config/config.json`](../../config/config.json):

- **Site Info:**
  - Set the site title, base URL, logo, and more in the `site` object.
- **Settings:**
  - Control features such as search, sticky header, theme switcher, and pagination.
- **Params:**
  - Configure contact form actions, footer text, email, and copyright.
- **Navigation Button:**
  - Enable/disable and set the label/link for the main call-to-action button.
- **Metadata:**
  - Set default meta information for SEO.

---

## 🎨 Theme Customization

- **Colors & Styles:**
  - Edit `src/styles/theme.css` to adjust colors, spacing, and other design tokens.
- **Fonts:**
  - Change the font family in `src/app/layout.tsx`.
- **Components:**
  - For advanced UI changes, edit components in `src/layouts/components/`.

---

## 📝 Managing Content

All site content is stored as Markdown files in the `src/content/` directory, organized by section:

- `about/`, `authors/`, `blog/`, `changelog/`, `contact/`, `homepage/`, `pricing/`, `products/`, `sections/`, `submit/`

### Example: Update the Homepage

Edit `src/content/homepage/_index.md` to change the homepage banner, featured products, and more.

### Example: Add or Edit a Product

Each product is a Markdown file in `src/content/products/`.

To add a new product:

1. Copy an existing file (e.g., `_template.md`).
2. Update the frontmatter and content.
3. Set `draft: false` to publish the product.

---

## 🛠️ Custom Scripts

- `yarn generate-json`
  - Generates JSON data from Markdown content. This runs automatically during development and build.

---

## 💡 Additional Tips

- All images are stored in the `public/images/` directory.
- SEO and meta tags are managed in `src/layouts/partials/SeoMeta.tsx`.
- Review code comments and configuration files for further guidance.

---

For more information, consult the codebase or reach out to the project maintainers.
