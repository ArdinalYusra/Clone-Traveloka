import Product_List from "@/components/shared/Product_List";
import { Tiket_Event, Tiket_Travel_Pass } from "@/lib";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="wrapper p-5">
        <div className="space-y-5">
          <h1 className="font-bold text-2xl text-slate-700">
            Penawaran Menarik Untuk Anda
          </h1>
          <div className="grid grid-cols-3 gap-2">
            <Image
              src={"/assets/images/banner1.webp"}
              alt=""
              height={300}
              width={300}
              className="rounded-md"
            />
            <Image
              src={"/assets/images/banner2.webp"}
              alt=""
              height={300}
              width={300}
              className="rounded-md"
            />
            <Image
              src={"/assets/images/banner3.webp"}
              alt=""
              height={300}
              width={300}
              className="rounded-md"
            />
          </div>
          <h1 className="font-bold text-xl text-slate-700">
            Event Paling Seru
          </h1>
          <Product_List>
            {Tiket_Event.map((item, index) => (
              <div key={index} className="space-y-3 shadow-lg rounded-md">
                <Image
                  src={item.src}
                  alt=""
                  height={200}
                  width={200}
                  className="rounded-md"
                />
                <div className="bg-white p-2">
                  <h1 className="font-bold text-sm text-slate-700 h-10">
                    {item.title}
                  </h1>
                  <span className="font-semibold text-orange-600">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </Product_List>
        </div>
        <div className="space-y-5 my-5">
          <h1 className="text-xl font-bold text-slate-700">
            <span className="text-2xl">SATU</span> tiket,{" "}
            <span className="text-2xl">BANYAK</span> aktivitas
          </h1>
          <div>
            <button className="bg-red-400 px-3 py-2 font-semibold text-slate-50 rounded-full">
              Tiket Basic
            </button>
          </div>
          <div className="flex gap-1 p-3">
            <Image
              src={"/assets/images/banner_traveling.webp"}
              alt=""
              height={200}
              width={150}
            />
            <Product_List>
              {Tiket_Travel_Pass.map((item, index) => (
                <div
                  key={index}
                  className="relative space-y-3 shadow-2xl rounded-md"
                >
                  <Image
                    src={item.src}
                    alt=""
                    height={200}
                    width={200}
                    className="rounded-md h-2/3"
                  />
                  <span className="absolute left-0 -top-3 bg-red-400 text-white font-semibold text-sm px-2 py-1 rounded-tl-md rounded-br-lg">
                    {item.location}
                  </span>
                  <span className="absolute -left-1 top-[37%] text-slate-50 text-sm px-2 py-1 bg-orange-600 rounded-br-xl">
                    {item.percent}
                  </span>
                  <div className="flex flex-col bg-white space-y-3 p-2">
                    <h1 className="font-bold text-sm text-slate-700 h-10">
                      {item.title}
                    </h1>
                    <span className="line-through text-sm text-slate-600">
                      {item.disc}
                    </span>
                    <span className="font-semibold text-orange-600">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </Product_List>
          </div>
        </div>
        <h1 className="font-bold text-2xl text-slate-700 my-5">
          Disney On Ice!
        </h1>
        <Image
          src={"/assets/images/banner_disney.webp"}
          alt=""
          height={200}
          width={1000}
          className="rounded-md cursor-pointer"
        />
      </div>
    </>
  );
};

export default page;
