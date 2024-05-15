"use client";

import { CategoryList } from "@/constanst";
import Image from "next/image";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const PesananPage = () => {
  const [categoryPesanan, setCategoryPesanan] = useState(0);
  const [pesananModal, setPesananModal] = useState(true);

  const handleCategoryPesanan = (index: number) => {
    setCategoryPesanan(index);
  };

  const handlePesananModal = () => {
    setPesananModal(!pesananModal);
  };

  return (
    <div className="bg-slate-200 min-h-screen">
      <div className="wrapper py-10">
        <div className="flex justify-center gap-10">
          <div className="w-[400px] p-5 space-y-5">
            <h1 className="text-2xl">Lanjutkan Pemesanan</h1>
            <h1 className="font-semibold text-2xl">Cek Pesanan</h1>
            <div className="flex flex-col gap-3">
              {CategoryList.slice(0, 4).map((item, i) => (
                <button
                  onClick={() => handleCategoryPesanan(i)}
                  className={`${categoryPesanan === i && "bg-blue-600 text-white"} flex gap-2 text-xl text-slate-600 px-3 py-2 rounded-md ${categoryPesanan !== i && "hover:bg-slate-50"} `}
                  key={i}
                >
                  {item.icon && (
                    <item.icon
                      className={`${categoryPesanan === i && "text-white"} text-blue-600 my-auto`}
                    />
                  )}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="space-y-5 w-[675px]">
            <div
              className={`${!pesananModal && "hidden"} relative flex gap-5 bg-blue-500 p-5 rounded-md`}
            >
              <IoClose
                onClick={handlePesananModal}
                className="absolute top-3 right-3 text-white cursor-pointer"
              />
              <div className="my-auto">
                <Image
                  src={"/assets/images/pengecekan-pesanan.png"}
                  alt="Pengecekan Pesanan"
                  height={100}
                  width={100}
                />
              </div>
              <div className="text-slate-50">
                <p className="font-bold">
                  Lebih mudah mengecek pesanan di Traveloka
                </p>
                <p>
                  Masuk ke akun Traveloka atau daftar untuk melihat pesanan Anda
                  yang aktif atau sudah lewat, serta untuk mengatur pesanan Anda
                  (cth: mengajukan refund atau reschedule).
                </p>
              </div>
            </div>
            <div className="bg-white px-5 py-7 space-y-5 rounded-md">
              <h1 className="font-bold text-xl">Cek Pesanan</h1>
              <div className="flex gap-10">
                <label className="flex flex-col gap-2 flex-1">
                  No. Pesanan
                  <input
                    type="text"
                    className="py-2 px-5 rounded-md ring-1 ring-slate-500"
                  />
                </label>
                <label className="flex flex-col gap-2 flex-1">
                  Tanggal Pemesanan
                  <input
                    type="date"
                    className="py-2 px-5 rounded-md ring-1 ring-slate-500"
                  />
                </label>
              </div>
              <div className="flex gap-5">
                <label className="flex flex-col gap-2 flex-1">
                  No Handphone
                  <input
                    type="number"
                    className="py-2 px-5 rounded-md ring-1 ring-slate-500"
                  />
                  <span className="text-sm text-slate-400">
                    No. Handphone saat pemesanan
                  </span>
                </label>
                <div className="flex items-center pt-[1px]">
                  <button className="py-2 px-16 bg-blue-500 font-semibold text-white rounded-md">
                    Cek Pesanan
                  </button>
                </div>
              </div>
              <p>
                Setelah Anda mengajukan formulir di bawah, kami akan mengirim
                e-tiket Anda langsung ke alamat email yang Anda gunakan saat
                pemesanan. Formulir ini juga dapat digunakan untuk melanjutkan
                transaksi yang belum selesai.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PesananPage;
