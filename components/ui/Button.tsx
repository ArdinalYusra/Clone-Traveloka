import React from "react";
import { FaSearch } from "react-icons/fa";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Button = (props: Props) => {
  const { className, children } = props;
  return (
    <button
      className={`relative bg-orange-500 text-white rounded-md w-full pl-10 pr-3 py-2 ${className}`}
    >
      <FaSearch className="absolute top-0 left-0 p-3" />
      {children}
    </button>
  );
};

export default Button;
