import { markdownify } from "@/lib/utils/textConverter";
import type { Product } from "@/types";

const ProductCard: React.FC<{
  product: Product;
}> = ({ product }) => {
  const frontmatter = product.frontmatter;
  const slug = product.slug || "";

  return (
    <div className=" bg-light rounded-2xl overflow-hidden flex flex-col justify-between">
      <div className="p-5">
        <div className="grid place-items-center overflow-hidden rounded-xl p-2 border border-border bg-text-light/10 mb-2 max-w-max">
          <img
            src={frontmatter.logo}
            alt={frontmatter.title}
            className=" min-w-6 object-cover"
            width={24}
            height={24}
          />
        </div>
        <div>
          <h3
            className="text-dark text-h6 mb-2 font-semibold"
            dangerouslySetInnerHTML={markdownify(frontmatter.title)}
          />
          {frontmatter.tags?.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 border border-border rounded-full text-xs leading-none mr-2"
            >
              {tag}
            </span>
          ))}
        </div>

        <p
          className="mt-4 mb-5 line-clamp-3"
          dangerouslySetInnerHTML={markdownify(frontmatter?.description || "")}
        />
        <a
          href={`/products/${slug}`}
          className="py-3 px-5 text-center bg-transparent border border-border hover:bg-primary/10 transition-colors duration-200 flex justify-center items-center gap-2 rounded-xl max-w-max"
          aria-label="View Product"
        >
          View Details
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.6665 7.83337L14.1332 2.3667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6668 5.03337V1.83337H11.4668"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.3335 1.83337H6.00016C2.66683 1.83337 1.3335 3.16671 1.3335 6.50004V10.5C1.3335 13.8334 2.66683 15.1667 6.00016 15.1667H10.0002C13.3335 15.1667 14.6668 13.8334 14.6668 10.5V9.16671"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
