import type { Product } from "@/types";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductCard from "./ProductCard";

const ListInfiniteScroll: React.FC<{ products: Product[] }> = ({
  products,
}) => {
  const [item, setItem] = useState(8);
  const [page, setPage] = useState(products?.slice(0, item));
  const fetchData = () => {
    setItem(item + 20);
  };

  useEffect(() => {
    setPage(products?.slice(0, item));
  }, [item, products]);

  if (!products || !page) return null;
  return (
    <InfiniteScroll
      dataLength={page?.length as number}
      next={fetchData}
      hasMore={true}
      className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3"
      loader={""}
    >
      {page.length > 0
        ? page?.map((product, i) => <ProductCard key={i} product={product} />)
        : null}
    </InfiniteScroll>
  );
};

export default ListInfiniteScroll;
