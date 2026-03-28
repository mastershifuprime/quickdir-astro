import { getUniqueCategoriesWithCount } from "@/lib/utils/common";
import { markdownify } from "@/lib/utils/textConverter";
import type { Homepage, Product } from "@/types";

const ItemsByCategories: React.FC<{
  products: Product[];
  items_by_section: Homepage["frontmatter"]["items_by_section"];
}> = ({ products, items_by_section }) => {
  const uniqueCategoriesWithCount = getUniqueCategoriesWithCount(products);
  if (!uniqueCategoriesWithCount) {
    return null;
  }

  return (
    <section className="section">
      <div className="container">
        <div className="section-container">
          <div className="section-intro centralize">
            <h2
              className="title"
              dangerouslySetInnerHTML={markdownify(items_by_section.title)}
            />
            <p
              className="subtitle"
              dangerouslySetInnerHTML={markdownify(items_by_section.subtitle)}
            />
          </div>
          <div className="section-container lg:px-20">
            <div className="flex justify-center flex-wrap gap-3">
              {uniqueCategoriesWithCount.map((category, index) => {
                return (
                  <a
                    href="/products"
                    key={index}
                    className="py-3 pl-6 pr-4 bg-primary/5 hover:bg-primary/10 transition-colors duration-200 border border-border rounded-full flex items-center gap-3"
                  >
                    <span className="text-h6 font-semibold">
                      {category.category}
                    </span>
                    <span className="h-10 min-w-10 grid place-items-center bg-primary/20 text-dark rounded-full px-3">
                      {category.count}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemsByCategories;
