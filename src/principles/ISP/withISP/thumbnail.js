export function Thumbnail(props) {
  //   const { product } = props;
  //   const { image } = product;
  const { imageUrl } = props;

  return (
    <img className="p-8 rounded-t-lg h-48" src={imageUrl} alt="product image" />
  );
}
