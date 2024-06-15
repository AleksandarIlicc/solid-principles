import { Bad } from "./withoutISP/bad";
import { Good } from "./withISP/good";

export function ISP() {
  const PRODUCT = {
    title: "Teddy Bear",
    id: "4",
    rating: { rate: 5 },
    price: 200,
    image: "https://storage.googleapis.com/pod_public/1300/124352.jpg",
  };

  //   return <Bad product={PRODUCT} />;
  return <Good product={PRODUCT} />;
}
