import { getSinglePage } from "@/lib/contentParser";
import type { Product } from "@/types";
import CategoriesViewClientSide from "./CategoriesViewClientSide";

const CategoriesDashboard = () => {
  let products = getSinglePage("products") as Product[];

  if (!products || products.length === 0) {
    return (
      <section className="section min-h-[50dvh] grid place-items-center">
        <div className="container">
          <div className="text-center">
            <h2 className="text-h4 mb-4">No products found</h2>
            <p className="text-text-dark">Please check back later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <div className="flex gap-6">
          <CategoriesViewClientSide products={products} />
        </div>
      </div>
    </section>
  );
};

export default CategoriesDashboard;
