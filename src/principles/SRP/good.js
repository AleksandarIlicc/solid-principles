import Product from "./product";
import Filter, { filterProducts } from "./filter";
import useProducts from "./hooks/useProducts";
import useFilterRate from "./hooks/useFilterRate";

export function Good() {
  const { products } = useProducts();
  const { filterRate, handleRating } = useFilterRate();

  return (
    <div className="flex flex-col h-full">
      {/* Filter component */}
      <Filter filterRate={filterRate} handleRating={handleRating} />
      {/* Products list */}
      <div className="h-full flex flex-wrap justify-center">
        {filterProducts(products, filterRate).map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
