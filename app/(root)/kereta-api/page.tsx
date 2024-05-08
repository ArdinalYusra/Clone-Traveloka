"use client";

import Modal_Puchase_Input from "@/components/shared/Modal_Puchase_Input";
import Image from "next/image";
import { TbTrain } from "react-icons/tb";
import { FaChildReaching } from "react-icons/fa6";
import { FaRegCalendarAlt, FaSearch } from "react-icons/fa";
import Select_Component from "@/components/ui/Select";
import { Amount_People, Kota } from "@/constanst";
import Calendar_Component from "@/components/shared/Calendar";
import { MdOutlineChildCare } from "react-icons/md";
import Purchase_Input from "@/components/shared/Purchase_Input";
import Button from "@/components/ui/Button";

const Tiket_Kereta_Api_Page = () => {
  return (
    <>
      <Modal_Puchase_Input>
        <div className="bg-white p-5 mb-44 space-y-5 shadow-md rounded-md">
          <h1 className="font-semibold text-lg">Tiket Kereta Api</h1>
          <div className="grid grid-cols-2 gap-5">
            <Purchase_Input label="Asal">
              <TbTrain className="px-3 rounded-md" />
              <Select_Component defaultValue={Kota[0]} options={Kota} />
            </Purchase_Input>
            <Purchase_Input label="Tujuan">
              <TbTrain className="px-3 rounded-md scale-x-[-1]" />
              <Select_Component defaultValue={Kota[2]} options={Kota} />
            </Purchase_Input>
          </div>
          <div className="grid grid-cols-5 gap-5">
            <Purchase_Input label="Tanggal Berangkat">
              <FaRegCalendarAlt className="px-3 rounded-md" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Tanggal Pulang">
              <FaRegCalendarAlt className="px-3 rounded-md" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Dewasa">
              <FaChildReaching className="px-3 rounded-md" />
              <Select_Component
                defaultValue={Amount_People[0]}
                options={Amount_People}
              />
            </Purchase_Input>
            <Purchase_Input label="Bayi">
              <MdOutlineChildCare className="border px-3 rounded-md" />
              <Select_Component
                defaultValue={Amount_People[0]}
                options={Amount_People[0]}
              />
            </Purchase_Input>
            <div className="flex items-end">
              <Button>Cari Tiket</Button>
            </div>
          </div>
        </div>
      </Modal_Puchase_Input>
      <div className="wrapper p-10">
        <div className="px-24">
          <h1 className="font-bold text-2xl text-center text-slate-800">
            Mengapa beli tiket kereta api di Traveloka?
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
                Sistem booking tepercaya
              </h1>
              <p className="text-slate-700">
                Sistem kami dirancang khusus agar dapat terhubung langsung
                dengan PT KAI. Karena itu, bisa dipastikan e-tiket Anda akan
                terbit dan kursi Anda pun terjamin pada jadwal kereta api yang
                Anda pilih.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="py-10 pr-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Kemudahan Check-in
              </h1>
              <p className="text-slate-700">
                Cukup scan barcode pada e-tiket Anda menggunakan mesin cetak
                mandiri yang ada di stasiun untuk check in dan mendapatkan
                boarding pass resmi dari PT KAI.
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
                Harga Terbaik
              </h1>
              <p className="text-slate-700">
                Dapatkan harga tiket Kereta Api Indonesia yang kompetitif,
                dengan promo khusus untuk pelanggan newsletter dan member
                Traveloka.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="py-10 pr-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Berbagai Pilihan Pembayaran
              </h1>
              <p className="text-slate-700">
                Beli tiket kereta api online dengan Traveloka jadi lebih mudah
                dengan berbagai pilihan pembayaran, dari Transfer ATM, Kartu
                Kredit, hingga Internet Banking.
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
                Hasil Pencarian Terlengkap
              </h1>
              <p className="text-slate-700">
                Pesan tiket KAI yang sesuai dengan kebutuhan Anda. Di sini Anda
                dapat melihat semua jadwal kereta api hingga 90 hari ke depan,
                mulai dari kelas Ekonomi, Bisnis, hingga Eksekutif.
              </p>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="py-10 pr-20 space-y-3">
              <h1 className="font-bold text-xl text-slate-800">
                Jaminan Aman Transaksi Online
              </h1>
              <p className="text-slate-700">
                Teknologi SSL dari RapidSSL dengan Sertifikat yang terotentikasi
                menjamin privasi dan keamanan transaksi online Anda. Konfirmasi
                instan dan e-tiket dikirim langsung ke email Anda.
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
                src={"/assets/images/paylater.png"}
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
                Dengan PayLater, Anda bisa booking tiket kereta kapan aja tanpa
                perlu membayar penuh secara langsung. Gunakan limit awal mulai
                dari 10 juta dengan cicilan 1-12 bulan dan bunga rendah.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5 my-10">
          <h1 className="font-bold text-center text-2xl text-slate-800">
            Destinasi Terpopuler
          </h1>
          <div className="grid grid-cols-3 grid-rows-3 gap-5 px-20 border">
            <div className="relative cursor-pointer">
              <Image
                src={"/assets/images/destination.webp"}
                alt=""
                height={150}
                width={150}
                className="rounded-md"
              />
              <p className="absolute top-[40%] left-[30%] text-white font-bold text-xl">
                Bandung
              </p>
            </div>
            <div className="relative cursor-pointer">
              <Image
                src={"/assets/images/destination.webp"}
                alt=""
                height={150}
                width={150}
                className="rounded-md"
              />
              <p className="absolute top-[40%] left-[30%] text-white font-bold text-xl">
                Medan
              </p>
            </div>
            <div className="relative cursor-pointer">
              <Image
                src={"/assets/images/destination.webp"}
                alt=""
                height={150}
                width={150}
                className="rounded-md"
              />
              <p className="absolute top-[40%] left-[28%] text-white font-bold text-xl">
                Yogyakarta
              </p>
            </div>
            <div className="relative cursor-pointer">
              <Image
                src={"/assets/images/destination.webp"}
                alt=""
                height={150}
                width={150}
                className="rounded-md"
              />
              <p className="absolute top-[40%] left-[30%] text-white font-bold text-xl">
                Surabaya
              </p>
            </div>
            <div className="relative cursor-pointer">
              <Image
                src={"/assets/images/destination.webp"}
                alt=""
                height={150}
                width={150}
                className="rounded-md"
              />
              <p className="absolute top-[40%] left-[30%] text-white font-bold text-xl">
                Malang
              </p>
            </div>
            <div className="relative cursor-pointer">
              <Image
                src={"/assets/images/destination.webp"}
                alt=""
                height={150}
                width={150}
                className="rounded-md"
              />
              <p className="absolute top-[40%] left-[28%] text-white font-bold text-xl">
                Semarang
              </p>
            </div>
            <div className="relative cursor-pointer">
              <Image
                src={"/assets/images/destination.webp"}
                alt=""
                height={150}
                width={150}
                className="rounded-md"
              />
              <p className="absolute top-[40%] left-[30%] text-white font-bold text-xl">
                Jakarta
              </p>
            </div>
            <div className="relative cursor-pointer">
              <Image
                src={"/assets/images/destination.webp"}
                alt=""
                height={150}
                width={150}
                className="rounded-md"
              />
              <p className="absolute top-[40%] left-[35%] text-white font-bold text-xl">
                Solo
              </p>
            </div>
            <div className="relative cursor-pointer">
              <Image
                src={"/assets/images/destination.webp"}
                alt=""
                height={150}
                width={150}
                className="rounded-md"
              />
              <p className="absolute top-[40%] left-[30%] text-white font-bold text-xl">
                Cirebon
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="font-bold text-2xl text-center text-slate-800">
            Stasiun Kereta Api Indonesia Terpopuler
          </h1>
          <div className="grid grid-cols-3 grid-rows-8 text-sm text-slate-600 gap-2 px-20">
            <li>Gambir</li>
            <li>Malang</li>
            <li>Kiaracondong</li>
            <li>Surabaya Gubeng</li>
            <li>Tulungagung</li>
            <li>Wates</li>
            <li>Waru</li>
            <li>Cirebon</li>
            <li>Bekasi</li>
            <li>Yogyakarta</li>
            <li>Malang Kota Lama</li>
            <li>Klaten</li>
            <li>Banjar</li>
            <li>Sragen</li>
            <li>Bogor</li>
            <li>Bandung</li>
            <li>Lempuyangan</li>
            <li>Cimahi</li>
            <li>Gombong</li>
            <li>Bangil</li>
            <li>Cepu</li>
            <li>Kai Access</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tiket_Kereta_Api_Page;
