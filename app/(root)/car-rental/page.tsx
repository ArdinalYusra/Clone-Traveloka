"use client";

import Modal_Puchase_Input from "@/components/shared/Modal_Puchase_Input";
import {
  Ketentuan_Umum_Rental_Mobil,
  Kota,
  Sewa_Mobil_Traveloka,
} from "@/constanst";
import { Favorite_Car_Rent } from "@/lib";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import Purchase_Input from "@/components/shared/Purchase_Input";
import { TbMapSearch } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import Select_Component from "@/components/ui/Select";
import Calendar_Component from "@/components/shared/Calendar";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const page = () => {
  return (
    <>
      <Modal_Puchase_Input>
        <div className="bg-white/95 p-5 mb-44 space-y-5 rounded-md shadow-lg">
          <h1 className="font-bold text-lg text-slate-700">Rental Mobil</h1>
          <Purchase_Input label="Lokasi Rental Mobil">
            <TbMapSearch className="px-3" />
            <Select_Component defaultValue={Kota[0]} options={Kota} />
          </Purchase_Input>
          <div className="grid grid-cols-5 gap-5">
            <Purchase_Input label="Tanggal Mulai Rental">
              <FaRegCalendarAlt className="px-3" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Waktu Mulai">
              <FaRegClock className="px-3" />
              <Input type="text" placeholder="00-00" />
            </Purchase_Input>
            <Purchase_Input label="Tanggal Selesai">
              <FaRegCalendarAlt className="px-3" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Waktu Selesai">
              <FaRegClock className="px-3" />
              <Input type="text" placeholder="00-00" />
            </Purchase_Input>
            <div className="flex items-end">
              <Button>Cari Mobil</Button>
            </div>
          </div>
        </div>
      </Modal_Puchase_Input>
      <div className="wrapper">
        <div className="space-y-16 my-10">
          <h1 className="font-bold text-2xl text-center text-slate-700">
            Mengapa Sewa Mobil di Traveloka?
          </h1>
          <div className="flex gap-5">
            {Sewa_Mobil_Traveloka.map((item, idx) => (
              <div key={idx} className="flex flex-col w-full space-y-5">
                <div className="flex-center h-[100px]">
                  <Image src={item.src} alt="" height={100} width={100} />
                </div>
                <h1 className="font-semibold text-xl text-slate-800 text-center">
                  {item.title}
                </h1>
                <p className="text-slate-600 text-md text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5 my-5">
          <h1 className="font-bold text-2xl text-center text-slate-700 border-b py-10">
            Rental Mobil Lepas Kunci
          </h1>
          <div className="text-md text-slate-600 space-y-5">
            <p>
              Bepergian bersama keluarga atau kerabat semakin asyik jika Anda
              menggunakan sarana transportasi yang tepat. Sewa mobil atau carter
              mobil dapat menjadi pilihan terbaik untuk memudahkan mobilitas
              Anda. Untuk semakin mendukung fleksibilitas Anda saat bepergian,
              Traveloka kini telah menjadi aplikasi sewa mobil yang terpercaya.
              Aplikasi rental mobil Traveloka membuat Anda dapat menikmati
              kenyamanan ini dengan memesan langsung layanan rental mobil yang
              anda butuhkan. Temukan berbagai pilihan mobil terbaik, lengkap
              dengan tarif mobil yang dibutuhkan. Cek harga sewa mobil harian
              untuk segala keperluan anda.
            </p>
            <p>
              Dapatkan <strong>durasi rental 24 jam</strong> dengan memesan
              layanan sewa mobil lepas kunci di Traveloka. Jadikan perjalanan
              keluarga atau bisnis anda lebih hemat dan efisien.
            </p>
          </div>
          <h1 className="font-bold text-2xl text-center text-slate-700 border-b py-10">
            Rental Mobil Dengan Sopir
          </h1>
          <p className="text-md text-slate-600 space-y-5">
            Memilih kendaraan yang tepat saat ingin bepergian adalah hal wajib.
            Jika Anda berencana keliling keluar kota dengan keluarga atau
            rombongan, persewaan mobil atau carter mobil di luar kota menjadi
            pilihan terbaik. Kini, perkembangan teknologi memudahkan Anda untuk
            persewaan mobil di manapun hanya dengan Traveloka App. Anda dapat
            menemukan pilihan mobil terbaik, rental mobil terdekat dari lokasi
            anda yang sesuai dengan kebutuhan. Kemudahan ini akan menjadikan
            perjalanan Anda lebih nyaman dan hemat waktu. Lihat beberapa pilihan
            kendaraan yang tersedia dengan sopir dibawah ini:
          </p>
        </div>
        <div className="space-y-5 my-5">
          <h1 className="font-bold text-2xl text-slate-700">
            Ketentuan Umum Rental Mobil
          </h1>
          <div className="grid grid-cols-2 gap-5">
            {Ketentuan_Umum_Rental_Mobil.map((item, idx) => (
              <div key={idx} className="flex flex-col border">
                <h3 className="border w-full py-3 text-center shadow-md">
                  {item.title}
                </h3>
                <div>
                  {item.desc.map((item, idx) => (
                    <div key={idx} className="p-5">
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <li className="p-3">- {item.ketentuan}</li>
                    </div>
                  ))}
                </div>
                <p className="p-5 italic">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl text-center text-slate-700">
            Kendaraan Favorit di Rental Mobil Traveloka
          </h1>
          <div className="grid grid-cols-5 justify-center gap-3 my-5">
            {Favorite_Car_Rent.map((item, idx) => (
              <div
                key={idx}
                className="flex-center flex-col border shadow-lg p-3 space-y-3 rounded-md"
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  height={100}
                  width={100}
                  className="grid h-32 py-5"
                />
                <span>{item.name}</span>
                <span className="text-sm text-slate-600 text-bold">
                  {item.type}
                </span>
                <div className="flex gap-5 text-slate-500 text-sm">
                  <span className="flex gap-1">
                    <FaUser className="text-[10px]" />
                    {item.user}
                  </span>
                  <span className="flex gap-1">
                    <AiFillLike />
                    {item.like}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-20 px-20 my-10">
            <div>
              <Image
                src={"/assets/images/rental_mobil.webp"}
                alt="Rental Mobil"
                height={300}
                width={300}
              />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="font-bold text-xl text-center text-slate-700">
                Rental Mobil Bulanan di Traveloka
              </h1>
              <p>
                Temukan informasi lengkap terkait pemesanan rental mobil bulanan
                di Traveloka. Sampaikan minat anda dan temukan mitra renta mobil
                bulanan terpercaya untuk kebutuhan anda.
              </p>
              <div>
                <button className="bg-blue-600 text-slate-50 px-3 py-2 rounded-md">
                  Pelajari Lenih lanjut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
