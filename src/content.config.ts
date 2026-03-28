import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  description: z.string().optional(),
  meta_title: z.string().optional(),
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  draft: z.boolean().optional(),
};

// Blog collection schema
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    categories: z.array(z.string()).default(() => ["others"]),
    tags: z.array(z.string()).default(() => ["others"]),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/authors" }),
  schema: z.object({
    ...commonFields,
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pages" }),
  schema: z.object({
    ...commonFields,
  }),
});

// About collection schema
const aboutCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/about" }),
  schema: z.object({
    ...commonFields,
  }),
});

// Contact collection schema
const contactCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/contact" }),
  schema: z.object({
    ...commonFields,
  }),
});

// Homepage collection schema
const homepageCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/homepage" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    image: z.string().optional(),
    banner: z
      .object({
        badge: z.string().optional(),
        title: z.string(),
        content: z.string(),
        image: z.string().optional(),
      })
      .optional(),
    featured_products: z.array(z.string()).optional(),
    popular_products: z.array(z.string()).optional(),
    items_by_section: z
      .object({
        title: z.string(),
        subtitle: z.string(),
      })
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Products collection schema
const productsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/products" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    date: z.coerce.date().optional(),
    image: z.string().optional(),
    logo: z.string().optional(),
    keywords: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    github: z.string().optional(),
    author: z.string().optional(),
    author_link: z.string().optional(),
    price: z.number().optional(),
    demo: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Pricing collection schema
const pricingCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/pricing" }),
  schema: z.object({
    ...commonFields,
    pricing_card: z.array(z.any()).optional(),
  }),
});

// Changelog collection schema
const changelogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/changelog" }),
  schema: z.object({
    ...commonFields,
    changelog: z.array(z.any()).optional(),
  }),
});

// Submit collection schema
const submitCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/submit" }),
  schema: z.object({
    ...commonFields,
  }),
});

// Congratulations collection schema
const congratulationsCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "src/content/congratulations",
  }),
  schema: z.object({
    ...commonFields,
  }),
});

// Call to Action section collection schema
const ctaSectionCollection = defineCollection({
  loader: glob({
    pattern: "call-to-action.{md,mdx}",
    base: "src/content/sections",
  }),
  schema: z.object({
    enable: z.boolean(),
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    button: z.object({
      enable: z.boolean(),
      label: z.string(),
      link: z.string(),
    }),
  }),
});

// Export collections
export const collections = {
  homepage: homepageCollection,
  blog: blogCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  about: aboutCollection,
  contact: contactCollection,
  products: productsCollection,
  pricing: pricingCollection,
  changelog: changelogCollection,
  submit: submitCollection,
  congratulations: congratulationsCollection,
  ctaSection: ctaSectionCollection,
};
