"use client";

import Activities_Dashboad_Purchase from "@/components/dashboardPurchase/Activities_Dashboad_Purchase";
import Airport_Transfer_Dashboard_Purchase from "@/components/dashboardPurchase/Airport_Transfer_Dashboard_Purchase";
import Bus_Travel_Dashboard_Purchase from "@/components/dashboardPurchase/Bus_Travel_Dashboard_Purchase";
import Car_Rent_Dashboard_Purchase from "@/components/dashboardPurchase/Car_Rent_Dashboard_Purchase";
import Hotel_Dashboard_Purchase from "@/components/dashboardPurchase/Hotel_Dashboard_Purchase";
import Kereta_Api_Dashboard_Purchase from "@/components/dashboardPurchase/Kereta_Api_Dashboard_Purchase";
import Tiket_Pesawat_Dashboard_Purchase from "@/components/dashboardPurchase/Tiket_Pesawat_Dashboard_Purchase";
import Product_List from "@/components/shared/Product_List";
import { ATRAKSI, Activities, CategoryList } from "@/constanst";
import {
  Tiket_Event,
  Tujuan_Populer_Pesawat_Hotel,
  image_product_hotel,
} from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { FaPlaneArrival } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
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
      <div className="relative overflow-hidden">
        <Image
          src={"/assets/images/mountain.jpg"}
          alt=""
          width={1920}
          height={1080}
          className="h-screen w-full object-cover"
        />
        <div className="absolute top-[20%] w-full px-32 space-y-10">
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
                    className={`${i === categoryPruchase && "bg-white"} my-auto p-3 hover:ring-1 ring-white rounded-3xl cursor-pointer hover:text-slate-200`}
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
              <Activities_Dashboad_Purchase />
            ) : null}
          </div>
        </div>
      </div>
      <div className="wrapper flex flex-col gap-10 py-10">
        <div className="space-y-5">
          <h1 className="font-semibold text-2xl text-slate-800">
            Gebyar Traveloka 2024!
          </h1>
          <Image
            src={"/assets/images/banner-homepage.webp"}
            alt="Gebyar Traveloka 2024"
            height={200}
            width={1000}
            className="rounded-md object-cover"
          />
        </div>
        <div className="space-y-5">
          <h1 className="font-semibold text-2xl text-slate-800">
            Maksimalkan rencanamu sesukamu
          </h1>
          <Product_List>
            {ATRAKSI.map((item, i) => (
              <div key={i} className="shadow-lg rounded-md cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.label}
                  height={200}
                  width={200}
                  className="rounded-md"
                />
                <div className="bg-white p-3 rounded-b-md font-semibold text-slate-800">
                  {item.label}
                </div>
              </div>
            ))}
          </Product_List>
          <div className="flex-center">
            <Link
              href={"/activities"}
              className="flex gap-2 px-10 py-2 bg-slate-100 font-medium text-blue-600 rounded-md"
            >
              Lihat Semua Aktivitas
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="font-semibold text-2xl text-slate-800">
            Destinasi Populer
          </h1>
          <div className="grid grid-cols-3 grid-rows-3 gap-5 px-20">
            {Tujuan_Populer_Pesawat_Hotel.map((item, index) => (
              <div key={index} className="relative cursor-pointer">
                <div className="overflow-hidden">
                  <Image
                    src={item.src}
                    alt=""
                    height={200}
                    width={300}
                    className="rounded-md transition-transform duration- delay-75 hover:scale-110"
                  />
                </div>
                <div className="flex flex-col absolute top-2 left-0 p-3 space-y-3 text-white px-5">
                  <span className="font-semibold">{item.location}</span>
                  <span className="text-sm font-medium">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex-center mt-5">
            <Link
              href={"/destinations"}
              className="flex gap-2 px-10 py-2 bg-slate-100 font-medium text-blue-600 rounded-md"
            >
              Lihat Semua Destinasi
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
        <div>
          <div className="space-y-5 p-5">
            <h1 className="font-bold text-2xl text-slate-800">
              Promo Hotel Meriah Domestik🔥
            </h1>
          </div>
          <Product_List>
            {image_product_hotel.map((item, index) => {
              return (
                <div key={index} className="shadow-xl">
                  <div className="relative">
                    <Image
                      src={item.src}
                      alt="hotel"
                      height={200}
                      width={300}
                      className="rounded-md"
                    />
                    <span className="flex gap-2 bg-black text-white font-semibold px-2 py-1 text-sm rounded-md absolute left-0 top-0">
                      <FaLocationDot />
                      {item.location}
                    </span>
                    <span className="bg-red-700 pl-2 py-[2px] pr-4 text-[12px] rounded-tr-xl text-slate-50 absolute -left-[5px] top-[80%]">
                      Hemat 25%
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 bg-slate-50 px-3 py-5">
                    <h6 className="font-medium text-md text-slate-800 line-clamp-1">
                      {item.name}
                    </h6>
                    <p className="flex gap-1">
                      <span className="flex gap-2 text-blue-600 text-md font-semibold">
                        <FaPlaneArrival />
                        8.4/10
                      </span>
                      (336) • ⭐⭐⭐
                    </p>
                    <span className="line-through text-[12px] text-slate-400">
                      {item.price}
                    </span>
                    <span className="text-red-500 font-semibold text-md">
                      {item.discount}
                    </span>
                  </div>
                </div>
              );
            })}
          </Product_List>
          <div className="flex-center mt-5">
            <Link
              href={"/hotel"}
              className="flex gap-2 px-10 py-2 bg-slate-100 font-medium text-blue-600 rounded-md"
            >
              Lihat Semua Hotel
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
        <div>
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
          <div className="flex-center mt-5">
            <Link
              href={"/activities"}
              className="flex gap-2 px-10 py-2 bg-slate-100 font-medium text-blue-600 rounded-md"
            >
              Lihat Semua Aktivitas
              <IoIosArrowForward />
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/assets/images/banner-pulau.jpg"}
          alt="Raja Ampat"
          height={100}
          width={1000}
          className="w-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600/20"></div>
        <div className="absolute top-20 left-40 z-10 flex gap-20">
          <div>
            <Image
              src={"/assets/images/phone-traveloka.png"}
              alt=""
              height={200}
              width={200}
              className="object-cover rounded-t-2xl"
            />
          </div>
          <div className="max-w-[800px] space-y-10">
            <h1 className="font-semibold text-4xl text-white">
              Dapatkan info terbaru seputar tips perjalanan, rekomendasi, serta
              promo.
            </h1>
            <div className="flex gap-3">
              <div>
                <input
                  type="email"
                  placeholder="Alamat emailmu"
                  className="w-full pl-5 py-2 rounded-md"
                />
              </div>
              <button className="bg-orange-500 px-3 py-2 rounded-md text-white">
                Berlangganan Newsletter
              </button>
            </div>
            <p className="font-semibold text-2xl text-white">
              Semua pesanan dalam genggaman, selalu siap jalan-jalan. Pakai
              Traveloka App.
            </p>
            <div className="flex gap-5">
              <Image
                src={"/assets/images/GeoglePlay.jpeg"}
                alt="Download Traveloka App"
                height={100}
                width={100}
                className="rounded-lg"
              />
              <Image
                src={"/assets/images/AppStore.jpeg"}
                alt="Download Traveloka App"
                height={100}
                width={100}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
