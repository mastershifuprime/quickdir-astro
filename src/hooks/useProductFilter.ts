import type { Product } from "@/types";
import { useCallback, useEffect, useReducer } from "react";

// Define filter state type
interface FilterState {
  selectedCategory: string | null;
  selectedTag: string | null;
  priceFilter: "all" | "free" | "premium";
  sortOption: string;
  products: Product[];
  filteredProducts: Product[];
}

// Define action types
type FilterAction =
  | { type: "SET_CATEGORY"; payload: string | null }
  | { type: "SET_TAG"; payload: string | null }
  | { type: "SET_PRICE_FILTER"; payload: "all" | "free" | "premium" }
  | { type: "SET_SORT_OPTION"; payload: string }
  | { type: "RESET_FILTERS" }
  | { type: "APPLY_FILTERS" };

// Initial filter state
const getInitialState = (products: Product[]): FilterState => ({
  selectedCategory: null,
  selectedTag: null,
  priceFilter: "all",
  sortOption: "",
  products,
  filteredProducts: products,
});

// Filter reducer function
const filterReducer = (
  state: FilterState,
  action: FilterAction,
): FilterState => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        selectedCategory: action.payload,
      };
    case "SET_TAG":
      return {
        ...state,
        selectedTag: action.payload,
      };
    case "SET_PRICE_FILTER":
      return {
        ...state,
        priceFilter: action.payload,
      };
    case "SET_SORT_OPTION":
      return {
        ...state,
        sortOption: action.payload,
      };
    case "RESET_FILTERS":
      return {
        ...getInitialState(state.products),
      };
    case "APPLY_FILTERS":
      let filteredProducts = [...state.products];

      // Apply category filter
      if (state.selectedCategory) {
        filteredProducts = filteredProducts.filter(
          (product) => product.frontmatter.category === state.selectedCategory,
        );
      }

      // Apply tag filter
      if (state.selectedTag) {
        filteredProducts = filteredProducts.filter((product) =>
          product.frontmatter.tags?.includes(state.selectedTag as string),
        );
      }

      // Apply price filter
      if (state.priceFilter !== "all") {
        filteredProducts = filteredProducts.filter((product) => {
          const hasPriceField = product.frontmatter.price !== undefined;
          if (state.priceFilter === "free") {
            return !hasPriceField || product.frontmatter.price === 0;
          } else {
            // premium
            return (
              hasPriceField &&
              product.frontmatter.price &&
              product.frontmatter.price > 0
            );
          }
        });
      }

      // Apply sorting
      if (state.sortOption) {
        switch (state.sortOption) {
          case "name-asc":
            filteredProducts.sort((a, b) =>
              a.frontmatter.title.localeCompare(b.frontmatter.title),
            );
            break;
          case "name-desc":
            filteredProducts.sort((a, b) =>
              b.frontmatter.title.localeCompare(a.frontmatter.title),
            );
            break;
          case "date-asc":
            filteredProducts.sort((a, b) => {
              // Assuming there's a timestamp or date field, otherwise fallback to title
              const dateA = new Date(a.frontmatter.date || 0).getTime();
              const dateB = new Date(b.frontmatter.date || 0).getTime();
              return dateA - dateB;
            });
            break;
          case "date-desc":
            filteredProducts.sort((a, b) => {
              const dateA = new Date(a.frontmatter.date || 0).getTime();
              const dateB = new Date(b.frontmatter.date || 0).getTime();
              return dateB - dateA;
            });
            break;
          default:
            break;
        }
      }

      return {
        ...state,
        filteredProducts,
      };
    default:
      return state;
  }
};

export interface UseProductFilterReturn {
  filterState: FilterState;
  handleCategoryChange: (category: string | null) => void;
  handleTagChange: (tag: string | null) => void;
  handlePriceFilterChange: (priceFilter: "all" | "free" | "premium") => void;
  handleSortChange: (sortOption: string) => void;
  handleResetFilters: () => void;
}

export const useProductFilter = (
  products: Product[],
): UseProductFilterReturn => {
  // Initialize reducer with products
  const [filterState, dispatch] = useReducer(
    filterReducer,
    getInitialState(products),
  );

  // Handler functions
  const handleCategoryChange = useCallback((category: string | null) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
    dispatch({ type: "APPLY_FILTERS" });
  }, []);

  const handleTagChange = useCallback((tag: string | null) => {
    dispatch({ type: "SET_TAG", payload: tag });
    dispatch({ type: "APPLY_FILTERS" });
  }, []);

  const handlePriceFilterChange = useCallback(
    (priceFilter: "all" | "free" | "premium") => {
      dispatch({ type: "SET_PRICE_FILTER", payload: priceFilter });
      dispatch({ type: "APPLY_FILTERS" });
    },
    [],
  );

  const handleSortChange = useCallback((sortOption: string) => {
    dispatch({ type: "SET_SORT_OPTION", payload: sortOption });
    dispatch({ type: "APPLY_FILTERS" });
  }, []);

  const handleResetFilters = useCallback(() => {
    dispatch({ type: "RESET_FILTERS" });
  }, []);

  // Apply filters on component mount
  useEffect(() => {
    dispatch({ type: "APPLY_FILTERS" });
  }, []);

  return {
    filterState,
    handleCategoryChange,
    handleTagChange,
    handlePriceFilterChange,
    handleSortChange,
    handleResetFilters,
  };
};
