import { CategoryListProps } from "@/types";
import React, { useState } from "react";
import Purchase_Input from "../shared/Purchase_Input";
import Select_Component from "../ui/Select";
import { Kelas_Penerbangan, Kota, Usia } from "@/constanst";
import {
  FaGlobe,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaUsers,
} from "react-icons/fa";
import Calendar_Component from "../shared/Calendar";
import { FaCalendarDays } from "react-icons/fa6";
import {
  MdAirlineSeatLegroomExtra,
  MdNotificationsActive,
} from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import Button from "../ui/Button";

const FLIGHT_OPTIONS: CategoryListProps[] = [
  {
    label: "Sekali Jalan / Pulang Pergi",
  },
  {
    label: "Multi-Kota",
  },
];

const Tiket_Pesawat_Dashboard_Purchase = () => {
  const [flightOption, setFlightOption] = useState(0);

  const handleClickFLight = (i: any) => {
    setFlightOption(i);
  };
  return (
    <div className="space-y-5">
      <div className="flex-between">
        <div className="flex gap-5">
          {FLIGHT_OPTIONS.map((item, i) => (
            <button
              key={i}
              onClick={() => handleClickFLight(i)}
              className={`px-3 py-1 rounded-full font-semibold text-white text-sm ${flightOption === i ? "bg-blue-600" : "bg-black/30"}`}
            >
              {item.icon && <item.icon className="my-auto" />}
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex gap-10 text-white">
          <Purchase_Input label="Jumlah Penumpang">
            <Select_Component
              defaultValue={Usia[0]}
              options={Usia}
              icon={<HiUsers className="text-white" />}
            />
          </Purchase_Input>
          <Purchase_Input label="Kelas Penerbangan">
            <Select_Component
              defaultValue={Kelas_Penerbangan[0]}
              options={Kelas_Penerbangan}
              icon={<MdAirlineSeatLegroomExtra className="text-white" />}
            />
          </Purchase_Input>
        </div>
      </div>
      <div className="flex gap-3 text-white">
        <Purchase_Input label="Dari" flex1>
          <Select_Component
            defaultValue={Kota[0]}
            options={Kota}
            icon={<FaPlaneDeparture className="text-white" />}
          />
        </Purchase_Input>
        <Purchase_Input label="Ke" flex1>
          <Select_Component
            defaultValue={Kota[1]}
            options={Kota}
            icon={<FaPlaneArrival className="text-white" />}
          />
        </Purchase_Input>
        <Purchase_Input label="Tanggal Pergi" flex1>
          <Calendar_Component
            icon={<FaCalendarDays className="text-white" />}
          />
        </Purchase_Input>
        <Purchase_Input label="Tanggal Pulang" flex1>
          <Calendar_Component
            icon={<FaCalendarDays className="text-white" />}
          />
        </Purchase_Input>
        <div className="flex items-end">
          <Button className="max-w-20 h-[43px] rounded-xl" />
        </div>
      </div>
      <div className="flex gap-3 text-white">
        <h1 className="font-semibold my-auto">Mencari</h1>
        <li className="flex gap-1 px-3 py-1 bg-white/30 rounded-md cursor-pointer">
          <FaGlobe /> Cari Inspirasi Terbang
        </li>
        <li className="flex gap-1 px-3 py-1 bg-white/30 rounded-md cursor-pointer">
          <MdNotificationsActive /> Notifikasi Harga
        </li>
        <li className="flex gap-1 px-3 py-1 bg-white/30 rounded-md cursor-pointer">
          <FaUsers /> Pemesanan Rombongan
        </li>
      </div>
    </div>
  );
};

export default Tiket_Pesawat_Dashboard_Purchase;
