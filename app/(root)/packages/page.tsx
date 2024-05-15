"use client";

import Modal_Puchase_Input from "@/components/shared/Modal_Puchase_Input";
import Purchase_Input from "@/components/shared/Purchase_Input";
import {
  Amount_People,
  Kelas_Penerbangan,
  Kota,
  Paket_Wisata,
} from "@/constanst";
import { Tujuan_Populer_Pesawat_Hotel } from "@/lib";
import Image from "next/image";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Select_Component from "@/components/ui/Select";
import Calendar_Component from "@/components/shared/Calendar";
import { BiDoorOpen } from "react-icons/bi";
import Button from "@/components/ui/Button";

const page = () => {
  return (
    <>
      <Modal_Puchase_Input>
        <div className="bg-white/95 p-5 space-y-5 rounded-md shadow-lg">
          <h1 className="font-semibold text-xl">Detail Penerbangan</h1>
          <div className="grid grid-cols-3 gap-5">
            <Purchase_Input label="Dari">
              <FaPlaneDeparture className="px-3" />
              <Select_Component defaultValue={Kota[0]} options={Kota} />
            </Purchase_Input>
            <Purchase_Input label="Ke">
              <FaPlaneArrival className="px-3" />
              <Select_Component defaultValue={Kota[0]} options={Kota} />
            </Purchase_Input>
            <Purchase_Input label="Jumlah Penumpang">
              <FaUserFriends className="px-3" />
              <Select_Component
                defaultValue={Amount_People[0]}
                options={Amount_People}
              />
            </Purchase_Input>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <Purchase_Input label="Tanggal Pergi">
              <FaRegCalendarAlt className="px-3" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Tanggal Pulang">
              <FaRegCalendarAlt className="px-3" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Jumlah Penumpang">
              <MdAirlineSeatReclineExtra className="text-xl px-3" />
              <Select_Component
                defaultValue={Kelas_Penerbangan[0]}
                options={Kelas_Penerbangan}
              />
            </Purchase_Input>
          </div>
          <h1 className="font-semibold text-xl">Detail Hotel</h1>
          <div className="grid grid-cols-5 gap-5">
            <Purchase_Input label="Kota, Tujuan, Hotel">
              <FaLocationDot className="px-3" />
              <Select_Component defaultValue={Kota[0]} options={Kota} />
            </Purchase_Input>
            <Purchase_Input label="Check-in:">
              <FaRegCalendarAlt className="px-3" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Check-out:">
              <FaRegCalendarAlt className="px-3" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Tamu">
              <FaUserFriends className="px-3" />
              <Select_Component
                defaultValue={Amount_People[0]}
                options={Amount_People}
              />
            </Purchase_Input>
            <Purchase_Input label="Kamar">
              <BiDoorOpen className="text-xl px-3" />
              <Select_Component
                defaultValue={Amount_People[0]}
                options={Amount_People}
              />
            </Purchase_Input>
          </div>
          <div className="flex justify-end">
            <Button className="max-w-[200px]">Cari Pesawat + Hotel</Button>
          </div>
        </div>
      </Modal_Puchase_Input>
      <div className="wrapper p-5 space-y-5">
        <div className="space-y-5 px-24">
          <h1 className="font-bold text-2xl text-center text-slate-800">
            Mengapa memesan Paket Pesawat + Hotel di Traveloka?
          </h1>
          <div className="flex flex-row">
            <div className="flex-center w-1/3">
              <Image
                src={"/assets/images/sistem_booking.png"}
                alt=""
                height={100}
                width={100}
              />
            </div>
            <div className="p-10 px-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">Lebih Hemat</h1>
              <p className="text-slate-700">
                Ingin liburan lebih murah? Pesan pesawat dan hotel Anda
                bersamaan untuk menghemat lebih banyak!
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="py-10 pr-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Praktis, Tanpa repot
              </h1>
              <p className="text-slate-700">
                Hemat waktu dengan langkah sederhana. Buat rencana perjalanan
                lebih mudah dengan memesan pesawat dan hotel sekaligus.
              </p>
            </div>
            <div className="flex-center w-1/3">
              <Image
                src={"/assets/images/check_in.png"}
                alt=""
                height={100}
                width={100}
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-center w-1/3">
              <Image
                src={"/assets/images/harga_terbaik.png"}
                alt=""
                height={100}
                width={100}
              />
            </div>
            <div className="p-10 px-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Pilihan variatif
              </h1>
              <p className="text-slate-700">
                Pilih dari ratusan tawaran eksklusif kami dan ubah sesuka hati
                untuk mendapatkan kombinasi terbaik. Selalu ada yang pas untuk
                Anda!
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="py-10 pr-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Beragam Pilihan Pembayaran
              </h1>
              <p className="text-slate-700">
                Dari Transfer & ATM, sampai Kartu Kredit dan PayLater, kami
                memiliki beragam pilihan pembayaran untuk memudahkan transaksi
                Anda. Jangan khawatir!
              </p>
            </div>
            <div className="flex-center w-1/3">
              <Image
                src={"/assets/images/paylater.png"}
                alt=""
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
        <div className="space-y-5 my-10">
          <h1 className="font-bold text-center text-2xl text-slate-800">
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
        </div>
        <div className="space-y-5 my-5">
          <h1 className="font-bold text-2xl text-center text-slate-800">
            Paket Wisata Populer
          </h1>
          <div className="grid grid-cols-4 gap-2 px-20">
            {Paket_Wisata.map((Paket_Wisata) => (
              <div
                key={Paket_Wisata}
                className="text-slate-600 text-sm text-center"
              >
                <li className="cursor-pointer">{Paket_Wisata}</li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
