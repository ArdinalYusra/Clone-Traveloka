"use client";

import Calendar_Component from "@/components/shared/Calendar";
import Modal_Puchase_Input from "@/components/shared/Modal_Puchase_Input";
import Purchase_Input from "@/components/shared/Purchase_Input";
import Select_Component from "@/components/ui/Select";
import { Amount_People, Bus_Price_List, Kota } from "@/constanst";
import Image from "next/image";
import Link from "next/link";
import { BiChair, BiChild } from "react-icons/bi";
import { FaRegCalendarAlt, FaSearch } from "react-icons/fa";
import { TbBus } from "react-icons/tb";

const Tiket_Bus_dan_Travel = () => {
  return (
    <>
      <Modal_Puchase_Input>
        <div className="bg-white w-[980px] p-5 mb-44 space-y-5 rounded-md shadow-md">
          <h1 className="font-semibold text-lg">Tiket Bus & Travel</h1>
          <div className="grid grid-cols-2 gap-5">
            <Purchase_Input label="Dari">
              <TbBus className="text-xl px-3 scale-x-[-1]" />
              <Select_Component defaultValue={Kota[0]} options={Kota} />
            </Purchase_Input>
            <Purchase_Input label="Ke">
              <TbBus className="text-xl px-3" />
              <Select_Component defaultValue={Kota[0]} options={Kota} />
            </Purchase_Input>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <Purchase_Input label="Tanggal Pergi">
              <FaRegCalendarAlt className="px-3" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Pulang Pergi">
              <FaRegCalendarAlt className="px-3" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Jumlah Kursi">
              <BiChild className="text-2xl px-3" />
              <Select_Component
                defaultValue={Amount_People[0]}
                options={Amount_People}
              />
            </Purchase_Input>
            <div className="flex items-end">
              <button className="relative bg-orange-500 text-white rounded-md w-full pl-10 pr-3 py-2">
                <FaSearch className="absolute top-0 left-0 p-3" />
                Cari Tiket
              </button>
            </div>
          </div>
        </div>
      </Modal_Puchase_Input>
      <div className="wrapper">
        <div className="px-24">
          <h1 className="font-bold text-2xl text-center text-slate-800">
            Enaknya beli tiket bus dan travel online di Traveloka
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
              <h1 className="font-bold text-xl text-slate-800">
                Praktis, Tanpa Repot
              </h1>
              <p className="text-slate-700">
                Beli tiket bus dan travel kapan saja dan dari mana saja dengan
                Traveloka. Tak perlu repot ke terminal atau kantor agen,
                sekarang Anda bisa beli tiket dengan mudah dari rumah.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="py-10 pr-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Customer Service 24 Jam
              </h1>
              <p className="text-slate-700">
                Kami menyediakan layanan Customer Service 24 jam. Jadi, kapan
                pun Anda punya pertanyaan, langsung telepon, chat, atau kirimkan
                pesan melalui Traveloka App Anda. Kami akan selalu siap
                membantu.
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
              <h1 className="font-bold text-xl text-slate-800">Info Lengkap</h1>
              <p className="text-slate-700">
                Mulai dari info jadwal bus dan travel, trayek, titik berangkat
                dan turun, dan biaya tiket, hingga foto dan fasilitasnya,
                semuanya bisa ditemukan di Traveloka untuk membantu Anda memilih
                bus dan travel terbaik.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="py-10 pr-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Pembayaran Mudah
              </h1>
              <p className="text-slate-700">
                Traveloka menyediakan beragam cara pembayaran, dari transfer
                bank, kartu kredit, hingga pembayaran tunai di mini market
                favorit Anda.
              </p>
            </div>
            <div className="flex-center w-1/3">
              <Image
                src={"/assets/images/pilihan_pembayaran.png"}
                alt=""
                height={100}
                width={100}
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-center w-1/3">
              <Image
                src={"/assets/images/hasil_pencarian.png"}
                alt=""
                height={100}
                width={100}
              />
            </div>
            <div className="p-10 px-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Tambah Mudah Bayar dengan PayLater
              </h1>
              <p className="text-slate-700">
                Dengan PayLater, Anda bisa booking tiket pesawat kapan aja tanpa
                perlu membayar penuh secara langsung. Gunakan limit awal mulai
                dari 10 juta dengan cicilan 1-12 bulan dan bunga rendah.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5 my-10">
          <h1 className="font-bold text-center text-2xl text-slate-800">
            Destinasi Bus Populer
          </h1>
          <div className="grid grid-cols-3 grid-rows-2 gap-y-5 px-20">
            {Bus_Price_List.map((item, index) => (
              <div key={index} className="relative">
                <Image
                  src={item.image}
                  alt=""
                  height={300}
                  width={300}
                  className="rounded-md"
                />
                <span className="absolute top-[40%] left-16 text-slate-50 font-bold">
                  Tiket bus ke {item.from}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="font-medium text-center text-2xl text-slate-800">
            Rute Bus & Travel Populer
          </h1>
          <div className="grid grid-rows-2 grid-cols-3 gap-5 px-10 font-semibold">
            {Bus_Price_List.map((item, index) => (
              <div key={index}>
                <div className="relative">
                  <Image
                    src={item.image}
                    alt=""
                    height={300}
                    width={300}
                    className="rounded-t-md w-full"
                  />
                  <span className="absolute top-[40%] left-16 text-slate-50">
                    Tiket bus dan travel dari
                  </span>
                  <div className="absolute top-[70%] flex gap-28 px-3 text-slate-50">
                    <span>
                      <span className="font-semibold">{item.from}</span> ke:
                    </span>
                    <span>Harga mulai:</span>
                  </div>
                </div>
                <div className="relative w-full bg-slate-50 py-3 rounded-b-md">
                  {item.rute.map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 h-20 p-3 text-center"
                    >
                      <Link
                        href={""}
                        className="text-blue-700 underline font-semibold"
                      >
                        {item.travel}
                      </Link>
                      <span className="text-slate-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5 my-10 px-10">
          <h1 className="font-bold text-2xl text-center text-slate-800 px-10">
            Rencanakan Perjalanan: Pesan Tiket Bus dan Travel Shuttle Lewat Agen
            Tiket Bus Online, Traveloka
          </h1>
          <p className="text-md text-slate-600">
            Bersiaplah mendapatkan kemudahan lebih saat merencanakan perjalanan
            untuk liburan, atau perjalanan tiket bus lebaran atau pulang kampung
            menggunakan bus/travel shuttle atau bus antarkota dengan Traveloka.
            Fitur terbaru Traveloka ini membuat pemesanan tiket bus dan travel
            shuttle jadi semudah belanja online. Dengan moto 3P, Anda cukup
            melakukan tiga langkah saja–Pilih bus/travel sesuai kebutuhan, Pesan
            tiket bus/travel yang diinginkan, lalu Pergi dengan nyaman dan
            tenang karena semuanya beres dalam sekejap.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tiket_Bus_dan_Travel;
