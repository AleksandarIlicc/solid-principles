import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

export function Button(props) {
  const { text, role } = props;

  return (
    <button
      className="flex items-center font-bold outline-none pt-4 pb-4 pl-8 pr-8 rounded-xl bg-gray-200 text-black"
      {...props}
    >
      {text}
      <div className="m-2">
        {role === "forward" && <HiOutlineArrowNarrowRight />}
        {role === "back" && <HiOutlineArrowNarrowLeft />}
      </div>
    </button>
  );
}

export function Bad() {
  return (
    <div className="flex space-x-10">
      <Button text="Go Home" role="forward" />
      <Button text="Go Back" role="back" />
    </div>
  );
}
