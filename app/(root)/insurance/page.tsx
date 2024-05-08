"use client";

import Modal_Puchase_Input from "@/components/shared/Modal_Puchase_Input";
import Button from "@/components/ui/Button";
import {
  Country,
  Jenis_Perlindungan,
  Jumlah_Malam,
  Pilihan_Asuransi_Terbaik,
  Usia,
  Wilayah,
} from "@/constanst";
import { Product_Insurances } from "@/lib";
import Image from "next/image";
import { IoMdWallet } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import Purchase_Input from "@/components/shared/Purchase_Input";
import Select_Component from "@/components/ui/Select";
import Calendar_Component from "@/components/shared/Calendar";
import { useState } from "react";

const Page = () => {
  const [selectedTrip, setSelectedTrip] = useState(Jenis_Perlindungan[0].value);
  const [selectedWilayah, setSelectedWilayah] = useState(Wilayah[0].value);

  const handleClickTrip = (trip: string) => {
    setSelectedWilayah(trip);
  };

  const handleClickWilayah = (wilayah: string) => {
    setSelectedWilayah(wilayah);
  };
  return (
    <>
      <Modal_Puchase_Input>
        <div className="bg-white/95 p-5 w-[950px] space-y-5 rounded-md shadow-lg">
          <h1 className="font-semibold text-lg">Asuransi Perjalanan</h1>
          <h1 className="font-semibold text-slate-600">
            Pilih Jenis Perlindungan
          </h1>
          <div className="flex gap-5 font-semibold">
            {Jenis_Perlindungan.map((trip, idx) => (
              <div className="relative" key={idx}>
                <IoMdWallet
                  className={`absolute top-1/2 left-3 -translate-y-1/2 text-xl text-slate-500 ${selectedTrip === trip.value && "text-white"}`}
                />
                <button
                  className={`bg-white px-10 py-1 h-[100px] rounded-md shadow-md ${selectedTrip === trip.value && "bg-sky-700 text-white"}`}
                  onClick={() => setSelectedTrip(trip.value)}
                >
                  {trip.value}
                </button>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2">
            <div className="grid grid-cols-2 items-end gap-3">
              {Wilayah.map((wilayah, idx) => (
                <div className="relative" key={idx}>
                  <FaGlobe
                    className={`absolute top-1/2 left-3 -translate-y-1/2 text-xl text-slate-500 ${selectedWilayah && "text-white"}`}
                  />
                  <button
                    onClick={() => handleClickWilayah(wilayah.value)}
                    className={`border border-slate-500 rounded-md py-2 w-full ${selectedWilayah === wilayah.value ? "bg-blue-600 text-white" : ""}`}
                  >
                    {wilayah.value}
                  </button>
                </div>
              ))}
            </div>
            <Purchase_Input label="Traveler">
              <FaPlaneDeparture className="px-3" />
              <Select_Component defaultValue={Usia[0]} options={Usia} />
            </Purchase_Input>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <Purchase_Input label="Negara Asal">
              <FaPlaneDeparture className="px-3" />
              <Select_Component defaultValue={Country[0]} options={Country} />
            </Purchase_Input>
            <Purchase_Input label="Negara Tujuan">
              <FaPlaneArrival className="px-3" />
              <Select_Component defaultValue={Country[1]} options={Country} />
            </Purchase_Input>
            <Purchase_Input label="Mulai Perlindungan">
              <IoMdWallet className="px-3" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Akhir Perlindungan">
              <IoMdWallet className="px-3" />
              <Calendar_Component />
            </Purchase_Input>
          </div>
          <div className="flex-between">
            <p className="text-xs">
              <span className="px-2 py-[2px] mr-1 rounded-full font-bold text-orange-600 border border-orange-600">
                !
              </span>
              Anda harus merupakan Warga Negara Indonesia (WNI) atau WNA dengan
              izin tinggal (KITAS atau KITAP)
            </p>
            <Button className="max-w-[200px]">Cari Asuransi</Button>
          </div>
        </div>
      </Modal_Puchase_Input>
      <div className="wrapper space-y-10 p-5">
        <h1 className="font-bold text-2xl text-center text-slate-800">
          Cari tahu tentang produk-produk kami
        </h1>
        <div className="grid grid-cols-6 gap-2 justify-center px-10 mx-5 py-10 rounded-lg shadow-lg border">
          {Product_Insurances.map((item, index) => (
            <div key={index} className="border p-2 text-center rounded-md">
              <div className="flex-center px-12 h-10">
                <Image src={item.image} alt="" height={50} width={50} />
              </div>
              <span className="text-[12px] text-slate-600 font-semibold">
                {item.name}
              </span>
            </div>
          ))}
        </div>
        <div className="space-y-5 px-24">
          <h1 className="font-bold text-2xl text-center text-slate-800">
            Mengapa memilih asuransi di Traveloka?
          </h1>
          <div className="flex flex-row">
            <div className="flex-center w-1/3">
              <Image
                src={"/assets/images/servis_berkualitas.png"}
                alt=""
                height={100}
                width={100}
              />
            </div>
            <div className="p-10 px-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Kemudahan dalam gengaman
              </h1>
              <p className="text-slate-700">
                Proses pengajuan mudah dan bebas repot. Cukup ikuti
                langkah-langkahnya dan polis bisa segera Anda terima.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="py-10 pr-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Jaminan Aman Transaksi Online
              </h1>
              <p className="text-slate-700">
                Teknologi dengan sertifikat yang terotentikasi untuk menjamin
                privasi dan keamanan transaksi online Anda.
              </p>
            </div>
            <div className="flex-center w-1/3">
              <Image
                src={"/assets/images/jaminan_aman.png"}
                alt=""
                height={100}
                width={100}
              />
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-center w-1/3">
              <Image
                src={"/assets/images/pilihan_pembayaran.png"}
                alt=""
                height={100}
                width={100}
              />
            </div>
            <div className="p-10 px-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Beragam Pilihan Sesuai Kebutuhan
              </h1>
              <p className="text-slate-700">
                Jalani hidup tanpa khawatir dengan berbagai solusi perlindungan
                dari kami, sesuai untuk berbagai kebutuhan Anda.
              </p>
            </div>
          </div>
        </div>
        <h1 className="font-semibold text-2xl text-center text-slate-800">
          Asuransi Traveloka: Perlindungan untuk Berbagai Perjalanan dalam Hidup
        </h1>
        <div className="text-slate-700 px-10 space-y-5">
          <p>
            Hidup adalah perjalanan yang penuh dengan berbagai kejutan. Beberapa
            kejutan memang menyenangkan, namun ada pula kejutan yang tak
            menyenangkan. Sebagai salah satu online travel agents tepercaya di
            Indonesia, Traveloka berkomitmen untuk menghadirkan pengalaman
            perjalanan yang nyaman dan bebas khawatir, tidak hanya saat berlibur
            namun juga dalam kehidupan. Untuk menjawab kebutuhan pengguna
            Traveloka, kami menghadirkan produk-produk <strong>Asuransi</strong>
            .
          </p>
          <p>
            Kami berkomitmen untuk memberikan perlindungan dari berbagai
            ketidakpastian dan hal-hal tak terduga dalam hidup, baik saat Anda
            di rumah atau di perjalanan. Bebaskan diri dari rasa khawatir dengan
            beragam produk asuransi kami, mulai dari{" "}
            <strong>
              Asuransi Perjalanan, On Time Protection, Asuransi Jiwa, Asuransi
              Mobil, Asuransi Motor,
            </strong>
            hingga <strong>Proteksi Rumah</strong>.
          </p>
          <p>
            Kami memahami bahwa di dunia yang serba cepat dan dinamis ini, waktu
            adalah kemewahan dan kepercayaan tak ternilai harganya. Karena itu
            kami mempermudah proses pengajuan asuransi dan menjamin keamanan
            transaksi online Anda dengan teknologi otentikasi terdepan.
          </p>
          <p>
            Kami menggandeng mitra asuransi tepercaya, antara lain Sinarmas,
            Chubb, Astra Life, Adira Insurance, dan MSIG, untuk memberikan Anda
            kepastian, terutama dalam kondisi darurat. Yang terpenting, dengan
            harga yang terjangkau dan coverage yang kompetitif, kami memastikan
            produk asuransi kami bisa dimiliki oleh semua orang.
          </p>
          <p>
            Ke mana pun hidup membawa Anda, nikmati perjalanannya dengan tenang
            karena Asuransi Traveloka hadir untuk Anda.
          </p>
        </div>
        <h1 className="font-semibold text-2xl text-center text-slate-800">
          Pilihan Asuransi Terbaik
        </h1>
        <div className="grid grid-cols-4 gap-3 px-20">
          {Pilihan_Asuransi_Terbaik.map((Pilihan_Asuransi_Terbaik) => (
            <div key={Pilihan_Asuransi_Terbaik}>
              <li className="text-sm text-slate-600">
                {Pilihan_Asuransi_Terbaik}
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
