import { Good } from "./withOCP/good";
import { Bad } from "./withoutOCP/bad";

export function OCP() {
  return <Good />;
  //   return <Bad />;
}
