"use client";

import Activities_Dashboad_Purchase from "@/components/dashboardPurchase/Activities_Dashboad_Purchase";
import Airport_Transfer_Dashboard_Purchase from "@/components/dashboardPurchase/Airport_Transfer_Dashboard_Purchase";
import Bus_Travel_Dashboard_Purchase from "@/components/dashboardPurchase/Bus_Travel_Dashboard_Purchase";
import Car_Rent_Dashboard_Purchase from "@/components/dashboardPurchase/Car_Rent_Dashboard_Purchase";
import Hotel_Dashboard_Purchase from "@/components/dashboardPurchase/Hotel_Dashboard_Purchase";
import Kereta_Api_Dashboard_Purchase from "@/components/dashboardPurchase/Kereta_Api_Dashboard_Purchase";
import Tiket_Pesawat_Dashboard_Purchase from "@/components/dashboardPurchase/Tiket_Pesawat_Dashboard_Purchase";
import { Activities, CategoryList } from "@/constanst";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";

const Home = () => {
  const [other, setOther] = useState(false);
  const [categoryPruchase, setCategoryPruchase] = useState(1);

  useEffect(() => {
    if (other) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [other]);

  const handleCategoryPruchase = (index: number) => {
    setCategoryPruchase(index);
  };

  return (
    <>
      <div className="relative">
        <Image
          src={"/assets/images/mountain.jpg"}
          alt=""
          width={1920}
          height={1080}
          className="h-screen w-full object-cover"
        />
        <div className="absolute top-[20%] px-20 space-y-10">
          <div className="space-y-5">
            <h1 className="font-bold text-3xl text-center text-slate-100">
              Wujudkan Perjalananmu dengan Caramu
            </h1>
            <div className="flex gap-2 text-center text-slate-400">
              <div className="flex gap-2">
                {CategoryList.slice(0, 7).map((item, i) => (
                  <div
                    key={i}
                    onClick={() => handleCategoryPruchase(i)}
                    className={`${i === categoryPruchase && "bg-white"} my-auto p-3 hover:ring-1 ring-white rounded-3xl hover:text-slate-200`}
                  >
                    {item.icon && (
                      <item.icon
                        className={`${i === categoryPruchase && "text-blue-600"} text-2xl mx-auto`}
                      />
                    )}
                    <li
                      className={`${i === categoryPruchase && "text-black"} font-semibold text-lg`}
                    >
                      {item.label}
                    </li>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setOther(!other)}
                className="my-auto p-3 hover:ring-1 ring-white rounded-3xl hover:text-slate-100"
              >
                <CgMenuGridO className="text-2xl mx-auto" />
                <li className="font-semibold text-lg">Lainnya</li>
              </button>
              <div
                className={`${other ? "translate-y-0" : "translate-y-[2000px]"} absolute top-[20%] z-50 bg-white h-80 w-[1080px] mx-10 p-5 space-y-10 rounded-md overflow-y-scroll transition-all duration-500 ease-in-out`}
              >
                <div className="flex-between">
                  <h1 className="font-semibold text-2xl text-start text-slate-500">
                    Produk Lainnya
                  </h1>
                  <button onClick={() => setOther(!other)}>
                    <IoCloseSharp className="text-2xl" />
                  </button>
                </div>
                <div className="space-y-5">
                  <div className="grid grid-cols-3 gap-5">
                    {CategoryList.slice(7, 9).map((item) => (
                      <Link
                        href={item.path}
                        key={item.label}
                        className="flex gap-3 p-4 ring-1 rounded-md"
                      >
                        {item.icon && <item.icon className="text-xl my-auto" />}
                        <li className="font-semibold text-slate-800">
                          {item.label}
                        </li>
                      </Link>
                    ))}
                  </div>
                  <h1 className="font-semibold text-2xl text-start text-slate-800">
                    Aktivitas untuk Dicoba
                  </h1>
                  <div className="grid grid-cols-3 gap-5">
                    {Activities.map((item) => (
                      <Link
                        href={item.path}
                        key={item.label}
                        className="flex gap-3 p-5 ring-1 rounded-md"
                      >
                        {item.icon && <item.icon className="text-xl my-auto" />}
                        <li className="font-semibold text-slate-800">
                          {item.label}
                        </li>
                      </Link>
                    ))}
                  </div>
                  <h1 className="font-semibold text-2xl text-start text-slate-800">
                    Layanan Lainnya
                  </h1>
                  <div className="grid grid-cols-3 gap-5">
                    {CategoryList.slice(11, 13).map((item) => (
                      <Link
                        href={item.path}
                        key={item.label}
                        className="flex gap-3 p-5 ring-1 rounded-md"
                      >
                        {item.icon && <item.icon className="text-xl my-auto" />}
                        <li className="font-semibold text-slate-800">
                          {item.label}
                        </li>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full border-b border-slate-400" />
          <div className="mt-10">
            {categoryPruchase === 0 ? (
              <Hotel_Dashboard_Purchase />
            ) : categoryPruchase === 1 ? (
              <Tiket_Pesawat_Dashboard_Purchase />
            ) : categoryPruchase === 2 ? (
              <Kereta_Api_Dashboard_Purchase />
            ) : categoryPruchase === 3 ? (
              <Bus_Travel_Dashboard_Purchase />
            ) : categoryPruchase === 4 ? (
              <Airport_Transfer_Dashboard_Purchase />
            ) : categoryPruchase === 5 ? (
              <Car_Rent_Dashboard_Purchase />
            ) : categoryPruchase === 6 ? (
              <Car_Rent_Dashboard_Purchase />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
