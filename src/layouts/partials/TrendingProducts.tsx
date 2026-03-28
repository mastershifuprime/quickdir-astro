import type { Product } from "@/types";
import React from "react";
import ProductCard from "../components/ProductCard";

const TrendingProducts: React.FC<{ products: Product[] }> = ({ products }) => {
  if (!products || products.length === 0) {
    return null;
  }
  return (
    <section className="section py-16">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending now</h2>
          <a href="/products" className="text-dark hover:underline">
            View all products
          </a>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
