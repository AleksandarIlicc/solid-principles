import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import { Button } from "../withoutOCP/bad";

export function Good() {
  return (
    <div className="flex space-x-10">
      <Button text="Go Home" icon={HiOutlineArrowNarrowRight} />
      <Button text="Go Back" icon={HiOutlineArrowNarrowLeft} />
    </div>
  );
}
