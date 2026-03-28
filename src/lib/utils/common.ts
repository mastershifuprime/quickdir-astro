import type { Product } from "@/types";

export function getUniqueCategoriesWithCount(products: Product[]) {
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.frontmatter.category)),
  );

  if (uniqueCategories.length === 0) {
    return null; // Return null if there are no categories to display
  }

  const uniqueCategoriesWithCount = uniqueCategories.map((category) => {
    const count = products.filter(
      (product) => product.frontmatter.category === category,
    ).length;
    return { category, count };
  });

  return uniqueCategoriesWithCount;
}

export function getUniqueTags(products: Product[]) {
  const uniqueTags = Array.from(
    new Set(products.flatMap((product) => product.frontmatter.tags)),
  );

  if (uniqueTags.length === 0) {
    return null; // Return null if there are no tags to display
  }

  return uniqueTags;
}
