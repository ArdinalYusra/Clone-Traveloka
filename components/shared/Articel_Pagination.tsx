"use client";

import { Article_Items, article } from "@/lib";
import Image from "next/image";
import { useState } from "react";

const Articel_Pagination = () => {
  const [selectedCategory, setSelectedCategory] = useState(article[0].category);

  return (
    <div className="flex flex-col space-y-5">
      <div>
        <button className="bg-blue-700 text-white px-3 py-2 rounded-full">
          Asia
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {Article_Items.map((item, index) => (
          <div key={index} className="bg-white">
            <div>
              <Image
                src={item.image}
                alt=""
                height={300}
                width={300}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-col p-3 shadow-md">
              <span className="font-bold text-sm text-slate-800">
                {item.title}
              </span>
              <span className="text-sm text-slate-600">{item.name}</span>
              <span className="text-sm text-slate-600">{item.upload}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articel_Pagination;
