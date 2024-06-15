export function Thumbnail(props) {
  const { product } = props;
  const { image } = product;

  return (
    <img className="p-8 rounded-t-lg h-48" src={image} alt="product image" />
  );
}
