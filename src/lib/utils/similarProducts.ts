import type { Product } from "@/types";

const similarProducts = (
  currentItem: Product,
  allItems: Product[],
  slug: string,
): Product[] => {
  let category: string = "";
  let tags: string[] = [];

  // set category
  if (currentItem.frontmatter?.category) {
    category = currentItem.frontmatter.category;
  }

  // set tags
  if (
    currentItem.frontmatter?.tags &&
    currentItem.frontmatter?.tags.length > 0
  ) {
    tags = currentItem.frontmatter.tags;
  }

  // filter by categories
  const filterByCategory = allItems.filter(
    (item: any) => item.frontmatter.category === category,
  );

  // filter by tags
  const filterByTags = allItems.filter((item: any) =>
    tags.find((tag) => item.frontmatter.tags.includes(tag)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategory, ...filterByTags])];

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similarProducts;
