import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProductsFilterProps {
  uniqueTags: (string | undefined)[] | null;
  onTagChange: (tag: string | null) => void;
  onPriceFilterChange: (priceFilter: "all" | "free" | "premium") => void;
  onSortChange: (sortOption: string) => void;
  onResetFilters: () => void;
  selectedTag: string | null;
  priceFilter: "all" | "free" | "premium";
  sortOption: string;
}

const ProductsFilter = ({
  uniqueTags,
  onTagChange,
  onPriceFilterChange,
  onSortChange,
  onResetFilters,
  selectedTag,
  priceFilter,
  sortOption,
}: ProductsFilterProps) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-10 md:mb-5 max-sm:flex-wrap">
      <Select
        value={selectedTag || ""}
        onValueChange={(value) => onTagChange(value || null)}
      >
        <SelectTrigger className="w-full min-h-10">
          <SelectValue placeholder="Select Tag" />
        </SelectTrigger>
        <SelectContent>
          {uniqueTags &&
            uniqueTags.map((tag: any) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>

      <Select
        value={priceFilter}
        onValueChange={(value) =>
          onPriceFilterChange(value as "all" | "free" | "premium")
        }
      >
        <SelectTrigger className="w-full min-h-10">
          <SelectValue placeholder="Price" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="free">Free</SelectItem>
          <SelectItem value="premium">Premium</SelectItem>
        </SelectContent>
      </Select>

      <Select value={sortOption} onValueChange={(value) => onSortChange(value)}>
        <SelectTrigger className="w-full min-h-10">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="name-asc">Name: A to Z</SelectItem>
          <SelectItem value="name-desc">Name: Z to A</SelectItem>
          <SelectItem value="date-asc">Date: Oldest to Newest</SelectItem>
          <SelectItem value="date-desc">Date: Newest to Oldest</SelectItem>
        </SelectContent>
      </Select>

      <button
        className="btn btn-outline h-10 py-0 cursor-pointer"
        onClick={onResetFilters}
      >
        Reset
      </button>
    </div>
  );
};

export default ProductsFilter;
