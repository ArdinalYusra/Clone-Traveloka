"use client";

import Calendar_Component from "@/components/shared/Calendar";
import Modal_Puchase_Input from "@/components/shared/Modal_Puchase_Input";
import Purchase_Input from "@/components/shared/Purchase_Input";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select_Component from "@/components/ui/Select";
import { Alamat_List, Antar_jemput_Bandara, Bandara_List } from "@/constanst";
import Image from "next/image";
import { FaPlaneDeparture, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <Modal_Puchase_Input>
        <div className="bg-white/95 p-10 space-y-5 shadow-md rounded-md">
          <div className="grid grid-cols-4 gap-5">
            <Purchase_Input label="Dari Bandara">
              <FaPlaneDeparture className="px-3" />
              <Select_Component
                defaultValue={Bandara_List[0]}
                options={Bandara_List}
              />
            </Purchase_Input>
            <Purchase_Input label="Ke area, alamat, gedung">
              <FaLocationDot className="px-3" />
              <Select_Component
                defaultValue={Alamat_List[0]}
                options={Alamat_List}
              />
            </Purchase_Input>
            <Purchase_Input label="Tanggal Jemput">
              <FaRegCalendarAlt className="px-3 rounded-md" />
              <Calendar_Component />
            </Purchase_Input>
            <Purchase_Input label="Jam Jemput">
              <FaRegClock className="px-3" />
              <Input type="text" placeholder="00-00" />
            </Purchase_Input>
          </div>
          <div className="flex justify-end">
            <Button className="w-[200px]">Cari Tiket</Button>
          </div>
        </div>
      </Modal_Puchase_Input>
      <div className="wrapper">
        <div className="space-y-16 my-10">
          <h1 className="font-bold text-2xl text-center text-slate-800">
            Mengapa Pesan Antar Jemput Bandara Melalui Traveloka?
          </h1>
          <div className="flex gap-5">
            {Antar_jemput_Bandara.map((item, idx) => (
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
        <div className="space-y-5 my-10">
          <div>
            <h1 className="font-semibold text-2xl text-center text-slate-800">
              Nikmati perjalanan nyaman dari dan ke bandara!
            </h1>
          </div>
          <div className="flex gap-5">
            <span>Dari Bandara</span>
            <span>Ke Bandara</span>
          </div>
          <div>
            <h1 className="font-medium text-xl text-slate-800">
              Tranportasi dari Bandara
            </h1>
            <p className="text-md text-slate-600">
              Mencari transportasi dari bandara bisa menjadi tantangan sendiri,
              apalagi saat Anda berada di destinasi baru. Begitu Anda keluar
              dari area kedatangan, bisa jadi Anda langsung diserbu oleh para
              supir taksi gelap, sementara antrean taksi bandara tak berujung.
            </p>
            <p className="text-md text-slate-600">
              Dengan Traveloka, kini Anda bisa memesan transportasi dari bandara
              jauh-jauh hari. Baik transportasi pribadi maupun umum, Anda bisa
              memilih yang paling sesuai dengan kebutuhan Anda. Pesan sekarang
              dan nikmati perjalanan santai setelah beberapa jam di udara.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
