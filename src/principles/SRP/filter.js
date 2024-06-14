import { Rating } from "react-simple-star-rating";

export function filterProducts(products, rate) {
  return products.filter((product) => product.rating.rate > rate);
}

const Filter = ({ filterRate, handleRating }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-semibold">Minimum Rating </span>
      <Rating
        initialValue={filterRate}
        SVGclassName="inline-block"
        onClick={handleRating}
      />
    </div>
  );
};

export default Filter;
