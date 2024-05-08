"use client";

import { Kota } from "@/constanst";
import { useState } from "react";

type Props = {
  className?: string;
  value?: string;
  border?: string;
};

const Input = (props: Props) => {
  const { className, value, border } = props;
  const [inputValue, setInputValue] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [isValue, setIsValue] = useState(Kota[0].kota);

  const handleClick = () => {
    setIsModal(!isModal);
  };

  return (
    <div className="relative" onClick={handleClick}>
      <input
        type="text"
        value={isValue}
        className={`w-full p-2 rounded-md ${border ? "border border-slate-500 focus:border-slate-600 hover:border hover:border-slate-600" : "outline-none"} ${className}`}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>{inputValue}</div>
      <div className="absolute top-[105%] left-0 w-full h-[300px] overflow-y-auto">
        {isModal && (
          <div className="flex flex-col gap-3 bg-white rounded-sm">
            <h1 className="font-bold text-sm mt-3 text-black">
              Kota atau Bandara Populer
            </h1>
            {Kota.map((categories, index) => (
              <div
                key={index}
                className="flex flex-col p-3 text-sm border border-gray-300"
              >
                <li className="font-bold text-black">{categories.kota}</li>
                <div className="flex gap-1 text-slate-600">
                  <span>{categories.singkatan}</span>
                  <span>{categories.tempat}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
