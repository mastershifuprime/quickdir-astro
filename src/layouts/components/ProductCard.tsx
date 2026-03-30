import { markdownify } from "@/lib/utils/textConverter";
import type { Product } from "@/types";

const ProductCard: React.FC<{
  product: Product;
}> = ({ product }) => {
  const frontmatter = product.frontmatter;
  const slug = product.slug || "";

  const price = frontmatter.price || 0;
  const priceLabel = price > 0 ? `$${price}` : "Free";

  return (
    <a
      href={`/products/${slug}`}
      className="group bg-light rounded-2xl overflow-hidden flex flex-col border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
    >
      {/* Image Preview */}
      <div className="relative aspect-[16/10] overflow-hidden bg-dark/5">
        <img
          src={frontmatter.image || "/images/products/product-example.png"}
          alt={frontmatter.title}
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
        />
        {/* Featured badge */}
        {frontmatter.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-white text-xs font-medium rounded-full">
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title + Price row */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="text-dark text-base font-semibold leading-snug line-clamp-2 group-hover:text-primary transition-colors"
            dangerouslySetInnerHTML={markdownify(frontmatter.title)}
          />
          <span className={`shrink-0 text-sm font-semibold px-2.5 py-1 rounded-lg ${price > 0 ? 'bg-dark/10 text-dark' : 'bg-primary/10 text-primary'}`}>
            {priceLabel}
          </span>
        </div>

        {/* Author */}
        {frontmatter.author && (
          <p className="text-text-light text-sm mb-2">
            By <span className="text-text">{frontmatter.author}</span>
          </p>
        )}

        {/* Description */}
        <p
          className="text-text-light text-sm leading-relaxed line-clamp-2 mb-4 flex-1"
          dangerouslySetInnerHTML={markdownify(frontmatter?.description || "")}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {frontmatter.tags?.slice(0, 4).map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-dark/5 border border-border rounded-md text-xs text-text-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
