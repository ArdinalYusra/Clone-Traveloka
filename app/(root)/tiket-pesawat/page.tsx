"use client";

import Calendar_Component from "@/components/shared/Calendar";
import Modal_Puchase_Input from "@/components/shared/Modal_Puchase_Input";
import Select_Component from "@/components/ui/Select";
import { Kelas_Penerbangan, Kota, Usia } from "@/constanst";
import { Jaminan_Tiket_Pesawat } from "@/lib";
import Image from "next/image";
import { FaPlaneArrival } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { FaCalendarDays } from "react-icons/fa6";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";
import Purchase_Input from "@/components/shared/Purchase_Input";
import Button from "@/components/ui/Button";

const Tiket_Pesawat_Page = () => {
  return (
    <>
      <Modal_Puchase_Input>
        <div className="relative bg-blue-400 space-y-5 p-5 pb-10 mb-80 rounded-lg w-[960px] shadow-lg">
          <div>
            <button className="bg-blue-400 px-2 py-1 font-bold text-slate-100 border border-slate-100 rounded-md">
              Sekali Jalan/Pulang Pergi
            </button>
          </div>
          <div className="absolute top-[60%] left-0 space-y-5 bg-white p-5 h-[250px] w-[960px] shadow-lg rounded-lg">
            <div className="grid grid-cols-3 gap-5">
              <Purchase_Input label="Dari">
                <Select_Component
                  defaultValue={Kota[0]}
                  options={Kota}
                  icon={<FaPlaneDeparture />}
                />
              </Purchase_Input>
              <Purchase_Input label="Ke">
                <Select_Component
                  defaultValue={Kota[1]}
                  options={Kota}
                  icon={<FaPlaneArrival />}
                />
              </Purchase_Input>
              <Purchase_Input label="Jumlah Penumpang">
                <Select_Component
                  defaultValue={Usia[0]}
                  options={Usia}
                  icon={<HiUsers />}
                />
              </Purchase_Input>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <Purchase_Input label="Tanggal Pergi">
                <Calendar_Component icon={<FaCalendarDays />} />
              </Purchase_Input>
              <Purchase_Input label="Tanggal Pulang">
                <Calendar_Component icon={<FaCalendarDays />} />
              </Purchase_Input>
              <Purchase_Input label="Kelas Penerbangan">
                <Select_Component
                  defaultValue={Kelas_Penerbangan[0]}
                  options={Kelas_Penerbangan}
                  icon={<MdAirlineSeatLegroomExtra />}
                />
              </Purchase_Input>
            </div>
            <div className="flex justify-end">
              <Button className="max-w-[300px]">Cari Tiket</Button>
            </div>
          </div>
        </div>
      </Modal_Puchase_Input>
      <div className="wrapper p-10 space-y-20">
        <h1 className="font-bold text-3xl text-center text-slate-800">
          Mengapa harga tiket pesawat di Traveloka lebih murah?
        </h1>
        <div className="flex gap-10">
          {Jaminan_Tiket_Pesawat.map((item, index) => (
            <div key={index} className="fles h-full text-center">
              <div className="flex-center w-full h-[200px]">
                <Image src={item.src} alt="" height={100} width={100} />
              </div>
              <h1 className="font-semibold text-xl h-16">{item.title}</h1>
              <div className="text-slate-700">{item.description}</div>
            </div>
          ))}
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-xl text-center text-slate-800">
            Mengapa mencari harga & promo tiket pesawat di Traveloka?
          </h1>
          <p className="text-slate-600 text-md">
            Traveloka menampilkan harga tiket pesawat murah yang telah dianalisa
            dan diolah dari jaringan sumber-sumber resmi. Traveloka adalah
            website pencarian tiket pesawat online terbesar di Indonesia.
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="text-xl text-center font-bold text-slate-800">
            Destinasi Terbang Terpopuler
          </h1>
          <div className="grid grid-cols-3 grid-rows-5 gap-3 text-sm text-slate-600 text-center">
            <li>Tiket Pesawat Murah ke Bali</li>
            <li>Tiket Pesawat Murah ke Lombok</li>
            <li>Tiket Pesawat Murah ke Malang</li>
            <li>Tiket Pesawat Murah ke Semarang</li>
            <li>Tiket Pesawat Murah ke Makassar</li>
            <li>Tiket Pesawat Murah ke Jakarta</li>
            <li>Tiket Pesawat Murah ke Jogja</li>
            <li>Tiket Pesawat Murah ke Padang</li>
            <li>Tiket Pesawat Murah ke Bandung</li>
            <li>Tiket Pesawat Murah ke Manado</li>
            <li>Tiket Pesawat Murah ke Medan</li>
            <li>Tiket Pesawat Murah ke Surabaya</li>
            <li>Tiket Pesawat Murah ke Batam</li>
            <li>Tiket Pesawat Murah ke Palembang</li>
            <li>Tiket Pesawat Murah ke Solo</li>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-center text-xl text-slate-800">
            Traveloka, Pilihan Terbaik Pesan Tiket Pesawat Secara Online
          </h1>
          <p className="text-md text-slate-600">
            Traveloka adalah online travel agent terbesar dan terpercaya di
            Indonesia yang menyediakan layanan pencarian dan pemesanan tiket
            pesawat secara lengkap. Hanya dengan mengakses Traveloka melalui
            desktop, mobile web maupun aplikasi mobile di smartphone, kamu bisa
            menemukan rangkuman hasil pencarian harga tiket pesawat secara cepat
            dan aman, dengan jaminan harga termurah.
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-center text-xl text-slate-800">
            Hanya Traveloka, Solusi Booking Tiket Pesawat yang Lengkap
          </h1>
          <p className="text-md text-slate-600">
            Mau beli tiket pesawat murah? Temukan harga tiket pesawat termurah
            setiap harinya dengan proses mudah tanpa ribet hanya di Traveloka.
            Platform daring pencarian tiket pesawat ini bisa mencari dan
            membandingkan harga tiket pesawat berbagai maskapai di satu periode,
            sehingga kamu tidak perlu repot membuka satu per satu situs maskapai
            resmi untuk mendapatkan harga tiket pesawat murah.
          </p>
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-center text-xl text-slate-800">
            Nyamannya Booking Tiket Pesawat dengan Fitur Baru Traveloka
          </h1>
          <p className="text-md text-slate-600">
            Traveloka sebagai penyedia layanan booking online tiket pesawat
            menjadi solusi terbaik untuk mencari informasi harga tiket pesawat
            dalam jangka waktu tertentu. Hadir dengan situs dan aplikasi mobile
            yang user friendly, Traveloka memberikan layanan pemesanan tiket
            pesawat dengan mudah dan cepat. Online travel agent terbesar dan
            terpercaya di Indonesia ini bahkan menawarkan harga tiket pesawat
            lebih murah untuk berbagai destinasi lokal maupun internasional.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tiket_Pesawat_Page;
