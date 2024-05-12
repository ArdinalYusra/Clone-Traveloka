import React from "react";
import Purchase_Input from "../shared/Purchase_Input";
import { FaPlaneDeparture, FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import Select_Component from "../ui/Select";
import { Alamat_List, Bandara_List } from "@/constanst";
import { FaLocationDot } from "react-icons/fa6";
import Input from "../ui/Input";
import Calendar_Component from "../shared/Calendar";
import Button from "../ui/Button";

const Airport_Transfer_Dashboard_Purchase = () => {
  return (
    <div className="flex gap-3 my-10 text-white">
      <Purchase_Input label="Dari Bandara">
        <FaPlaneDeparture className="px-3" />
        <Select_Component
          defaultValue={Bandara_List[0]}
          options={Bandara_List}
        />
      </Purchase_Input>
      <Purchase_Input label="Ke area, alamat, gedung">
        <FaLocationDot className="px-3" />
        <Select_Component defaultValue={Alamat_List[0]} options={Alamat_List} />
      </Purchase_Input>
      <Purchase_Input label="Tanggal Jemput">
        <FaRegCalendarAlt className="px-3 rounded-md" />
        <Calendar_Component />
      </Purchase_Input>
      <Purchase_Input label="Jam Jemput">
        <FaRegClock className="px-3" />
        <Input type="number" placeholder="00-00" className="text-black" />
      </Purchase_Input>
      <div className="flex items-end">
        <Button className="max-w-10 h-[43px] rounded-xl" />
      </div>
    </div>
  );
};

export default Airport_Transfer_Dashboard_Purchase;
