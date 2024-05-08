"use client";

import Input from "@/components/ui/Input";
import { FaSearch, FaSearchPlus } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { FaBuildingUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { BsMoonStars } from "react-icons/bs";
import { BiCalendarAlt } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPlaneArrival } from "react-icons/fa";
import Product_List from "@/components/shared/Product_List";
import Image from "next/image";
import Link from "next/link";
import Modal_Puchase_Input from "@/components/shared/Modal_Puchase_Input";
import { image_product_hotel } from "@/lib";
import { Hotel_Destination_List, Jumlah_Malam, Kota, Usia } from "@/constanst";
import Purchase_Input from "@/components/shared/Purchase_Input";
import Select_Component from "@/components/ui/Select";
import Calendar_Component from "@/components/shared/Calendar";
import Button from "@/components/ui/Button";

const Hotel_Page = () => {
  return (
    <>
      <Modal_Puchase_Input>
        <div className="bg-white/95 w-[950px] space-y-5 p-5 rounded-lg shadow-lg">
          <h1 className="flex gap-2 text-blue-500 text-md font-bold">
            <FaSearchPlus />
            Hotel yang Terakhir Dilihat
          </h1>
          <div className="space-y-5">
            <div>
              <Purchase_Input label="Kota, Tujuan, atau nama hotel">
                <MdOutlineLocationOn size={20} className="mx-2" />
                <Select_Component defaultValue={Kota[0]} options={Kota} />
              </Purchase_Input>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <Purchase_Input label="Check-in:">
                <BiCalendarAlt className="mx-3" />
                <Calendar_Component />
              </Purchase_Input>
              <Purchase_Input label="Durasi">
                <BsMoonStars className="mx-3" />
                <Select_Component
                  defaultValue={Jumlah_Malam[0]}
                  options={Jumlah_Malam}
                />
              </Purchase_Input>
              <Purchase_Input label="Check-out:">
                <BiCalendarAlt className="mx-3" />
                <Calendar_Component />
              </Purchase_Input>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <Purchase_Input label="Tamu dan Kamar">
                <FaBuildingUser className="mx-3" />
                <Select_Component defaultValue={Usia[0]} options={Usia} />
              </Purchase_Input>
              <div className="flex items-end">
                <Button>Cari Tiket</Button>
              </div>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" />
              <label className="text-sm">
                Pergi untuk perjalanan bisnis
                <span className="px-2 py-[1px] ml-2 rounded-full text-white bg-blue-700">
                  ?
                </span>
              </label>
            </div>
            <p className="flex gap-2 text-blue-500 font-medium">
              <RiHotelFill />
              Bayar di Hotel
            </p>
          </div>
        </div>
      </Modal_Puchase_Input>
      <div className="wrapper h-full w-full">
        <div>
          <div className="space-y-5 p-5">
            <h1 className="font-bold text-2xl text-slate-800">
              🌸 Nikmati Musim Semi dengan Promo!
            </h1>
            <p className="text-slate-500 font-semibold">
              Gunakan HOLIDAYINTERSTAY dan dapatkan s.d Rp1,000,000 untuk Hotel
              Internasional
            </p>
          </div>
          <div className="h-">
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
          </div>
        </div>
        <div>
          <div className="space-y-5 p-5">
            <h1 className="font-bold text-2xl text-slate-800">
              Promo Meriah Domestik🔥
            </h1>
            <p className="text-slate-500 font-semibold">
              Gunakan RAMADANSTAY dan dapatkan potongan s.d 50%!
            </p>
          </div>
          <div>
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
          </div>
        </div>
        <div>
          <div className="space-y-5 p-5">
            <h1 className="font-bold text-2xl text-slate-800">
              Akomodasi yang Paling Dicari
            </h1>
            <p className="text-slate-500 font-semibold">
              Wujudkan liburan impian dengan menginap di sini
            </p>
          </div>
          <div>
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
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h1 className="font-bold text-center text-2xl p-5 text-slate-700 border-b">
          Hotel & Destinasi Populer di Traveloka
        </h1>
        <div className="grid grid-cols-3 grid-rows-9 w-full py-5 gap-1">
          {Hotel_Destination_List.map((item, index) => {
            return (
              <div
                key={index}
                className="text-slate-600 hover:text-slate-900 hover:underline"
              >
                <Link href={item.path} key={index}>
                  <li>{item.name}</li>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="wrapper py-10 px-20 space-y-5">
          <h1 className="font-bold text-2xl text-center text-slate-800">
            Booking Hotel Murah Online, Banyak Promo Hanya di Traveloka
          </h1>
          <p>
            Sebagai satu platform OTA (Online Travel Agent) terpopuler di
            Indonesia, Traveloka menyediakan inventori hotel dan berbagai jenis
            penginapan yang sangat lengkap, dari dalam maupun luar negeri.
            Selain memberikan banyak promo hotel, Traveloka juga memberikan
            kemudahan dalam melakukan booking hotel murah secara online.Booking
            hotel online bisa dilakukan melalui website Traveloka atau lewat
            aplikasi yang bisa diunduh secara gratis di PlayStore dan AppStore.
            Untuk mendapatkan banyak kupon Traveloka, kamu bisa pesan hotel atau
            mencari penginapan murah selama periode promo
          </p>
        </div>
      </div>
    </>
  );
};

export default Hotel_Page;
