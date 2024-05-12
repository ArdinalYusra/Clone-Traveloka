import React from "react";
import Purchase_Input from "../shared/Purchase_Input";
import { TbMapSearch } from "react-icons/tb";
import Select_Component from "../ui/Select";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import Calendar_Component from "../shared/Calendar";
import Input from "../ui/Input";
import { Kota } from "@/constanst";
import Button from "../ui/Button";

const Car_Rent_Dashboard_Purchase = () => {
  return (
    <div className="flex gap-3 text-white">
      <Purchase_Input label="Lokasi Rental Mobil">
        <TbMapSearch className="px-3" />
        <Select_Component defaultValue={Kota[0]} options={Kota} />
      </Purchase_Input>
      <Purchase_Input label="Tanggal Mulai Rental">
        <FaRegCalendarAlt className="px-3" />
        <Calendar_Component />
      </Purchase_Input>
      <Purchase_Input label="Waktu Mulai">
        <FaRegClock className="px-3" />
        <Input type="number" placeholder="00-00" className="text-black" />
      </Purchase_Input>
      <Purchase_Input label="Tanggal Selesai">
        <FaRegCalendarAlt className="px-3" />
        <Calendar_Component />
      </Purchase_Input>
      <Purchase_Input label="Waktu Selesai">
        <FaRegClock className="px-3" />
        <Input type="number" placeholder="00-00" className="text-black" />
      </Purchase_Input>
      <div className="flex items-end">
        <Button className="max-w-10 h-[43px] rounded-xl" />
      </div>
    </div>
  );
};

export default Car_Rent_Dashboard_Purchase;
