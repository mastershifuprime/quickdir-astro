"use client";

import { useProductFilter } from "@/hooks/useProductFilter";
import {
  getUniqueCategoriesWithCount,
  getUniqueTags,
} from "@/lib/utils/common";
import type { Product } from "@/types";
import React, { useMemo } from "react";
import ProductsSidebar from "../ProductsSidebar";
import ListInfiniteScroll from "./ListInfiniteScroll";
import ProductsFilter from "./ProductsFilter";

const CategoriesViewClientSide: React.FC<{
  products: Product[];
}> = ({ products }) => {
  const {
    filterState,
    handleCategoryChange,
    handleTagChange,
    handlePriceFilterChange,
    handleSortChange,
    handleResetFilters,
  } = useProductFilter(products);

  const uniqueCategoriesWithCount = useMemo(() => {
    return getUniqueCategoriesWithCount(products);
  }, [products]);

  const uniqueTags = useMemo(() => {
    return getUniqueTags(products);
  }, [products]);

  return (
    <>
      <ProductsSidebar
        uniqueCategoriesWithCount={uniqueCategoriesWithCount}
        onCategorySelect={handleCategoryChange}
        selectedCategory={filterState.selectedCategory}
      />
      <div className="grow">
        <div className="max-w-[1120px] mx-auto">
          <ProductsFilter
            uniqueTags={uniqueTags}
            onTagChange={handleTagChange}
            onPriceFilterChange={handlePriceFilterChange}
            onSortChange={handleSortChange}
            onResetFilters={handleResetFilters}
            selectedTag={filterState.selectedTag}
            priceFilter={filterState.priceFilter}
            sortOption={filterState.sortOption}
          />

          {filterState.filteredProducts.length > 0 ? (
            <ListInfiniteScroll products={filterState.filteredProducts} />
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-lg text-text-dark">
                No products found matching your filters.
              </p>
              <button
                className="btn btn-outline mt-4"
                onClick={handleResetFilters}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoriesViewClientSide;
