interface ProductsSidebarProps {
  uniqueCategoriesWithCount: { category: string; count: number }[] | null;
  onCategorySelect?: (category: string | null) => void;
  selectedCategory?: string | null;
}

const ProductsSidebar: React.FC<ProductsSidebarProps> = ({
  uniqueCategoriesWithCount,
  onCategorySelect,
  selectedCategory,
}) => {
  if (!uniqueCategoriesWithCount || uniqueCategoriesWithCount.length === 0) {
    return (
      <div className="border border-border rounded-2xl p-5 min-w-[270px] bg-light sticky top-[110px] h-fit">
        <h3 className="text-h6">Product Categories</h3>
        <hr className="my-5 border-muted" />
        <p className="text-text-dark">No categories available.</p>
      </div>
    );
  }

  return (
    <div className="border border-border rounded-2xl p-5 min-w-[270px] bg-light sticky top-[110px] h-fit hidden md:block">
      <h3 className="text-h6">Categories</h3>
      <hr className="my-5 border-muted" />
      <ul className="flex flex-col gap-4">
        {uniqueCategoriesWithCount &&
          uniqueCategoriesWithCount.map(({ category, count }, index) => {
            const isSelected = category === selectedCategory;
            return (
              <li
                key={index}
                className={`flex items-center justify-between gap-3 cursor-pointer ${
                  isSelected ? "text-primary font-medium" : "text-dark"
                }`}
                onClick={() => onCategorySelect?.(isSelected ? null : category)}
              >
                <span>{category}</span>
                <span className="border border-muted rounded-2xl text-sm text-text-light min-w-10 grid place-items-center px-2">
                  {count}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ProductsSidebar;
