"use client";

import { article } from "@/lib";
import Image from "next/image";
import { useState } from "react";

const Articel_Pagination2 = () => {
  const [selectedCategory, setSelectedCategory] = useState(article[0].category);

  return (
    <div className="flex flex-">
      {article.map((categories, index) => (
        <div key={index} className="space-y-5">
          <div className="flex flex-row">
            <button
              onClick={() => setSelectedCategory(categories.category)}
              className={`bg-slate-200 py-2 px-3 rounded-full font-semibold text-blue-600 ${selectedCategory === categories.category && "bg-blue-900 text-slate-100"}`}
            >
              {categories.category}
            </button>
          </div>
          <div
            className={`h-[300px] w-full border ${selectedCategory === categories.category ? "block" : null}`}
          >
            {selectedCategory === categories.category ? (
              <div className="grid grid-cols-3 gap-3">
                {categories.items.map((item, index) => (
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
                      <span className="text-sm text-slate-600">
                        {item.name}
                      </span>
                      <span className="text-sm text-slate-600">
                        {item.upload}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Articel_Pagination2;
