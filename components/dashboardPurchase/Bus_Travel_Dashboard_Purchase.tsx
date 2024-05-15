import { CategoryListProps } from "@/types";
import React, { useState } from "react";
import { FaBus, FaBusAlt, FaRegCalendarAlt } from "react-icons/fa";
import Purchase_Input from "../shared/Purchase_Input";
import { TbBus } from "react-icons/tb";
import Select_Component from "../ui/Select";
import { Amount_People, Kota } from "@/constanst";
import Calendar_Component from "../shared/Calendar";
import { BiChild } from "react-icons/bi";
import Button from "../ui/Button";

const BUS_TRAVEL_OPTIONS: CategoryListProps[] = [
  {
    label: "Tiket Bus & Shuttle",
    icon: FaBus,
  },
  {
    label: "Bus Bandara",
    icon: FaBusAlt,
  },
];

const Bus_Travel_Dashboard_Purchase = () => {
  const [busTravelOption, setBusTravelOption] = useState(0);

  const handleClickBusTravel = (i: any) => {
    setBusTravelOption(i);
  };
  return (
    <div className="space-y-10 text-white">
      <div className="flex gap-5">
        {BUS_TRAVEL_OPTIONS.map((item, i) => (
          <button
            key={i}
            onClick={() => handleClickBusTravel(i)}
            className={`flex gap-2 px-3 py-1 rounded-full font-semibold text-white text-sm ${busTravelOption === i ? "bg-blue-600" : "bg-black/30"}`}
          >
            {item.icon && <item.icon className="my-auto" />}
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex gap-3">
        <Purchase_Input label="Dari" flex1>
          <TbBus className="text-xl px-3 scale-x-[-1]" />
          <Select_Component defaultValue={Kota[0]} options={Kota} />
        </Purchase_Input>
        <Purchase_Input label="Ke" flex1>
          <TbBus className="text-xl px-3" />
          <Select_Component defaultValue={Kota[0]} options={Kota} />
        </Purchase_Input>
        <Purchase_Input label="Tanggal Pergi" flex1>
          <FaRegCalendarAlt className="px-3" />
          <Calendar_Component />
        </Purchase_Input>
        <Purchase_Input label="Pulang Pergi" flex1>
          <FaRegCalendarAlt className="px-3" />
          <Calendar_Component />
        </Purchase_Input>
        <Purchase_Input label="Jumlah Kursi" flex1>
          <BiChild className="text-4xl px-3" />
          <Select_Component
            defaultValue={Amount_People[0]}
            options={Amount_People}
          />
        </Purchase_Input>
        <div className="flex items-end">
          <Button className="max-w-10 h-[43px] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Bus_Travel_Dashboard_Purchase;
