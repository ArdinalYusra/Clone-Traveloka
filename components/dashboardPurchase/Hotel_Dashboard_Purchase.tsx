import { Amount_People, Kota } from "@/constanst";
import React, { useState } from "react";
import Purchase_Input from "../shared/Purchase_Input";
import { IoLocationOutline } from "react-icons/io5";
import Select_Component from "../ui/Select";
import { FaRegCalendarAlt } from "react-icons/fa";
import Calendar_Component from "../shared/Calendar";
import { FaChildReaching } from "react-icons/fa6";
import { CategoryListProps } from "@/types";
import { RiHotelFill } from "react-icons/ri";
import { MdApartment, MdVilla } from "react-icons/md";
import { GiVillage } from "react-icons/gi";
import Button from "../ui/Button";

const CHOICE_OF_HOTEL: CategoryListProps[] = [
  {
    label: "Hotel",
    icon: RiHotelFill,
  },
  {
    label: "Holiday Stays",
    icon: MdVilla,
  },
  {
    label: "Villa",
    icon: GiVillage,
  },
  {
    label: "Apartemen",
    icon: MdApartment,
  },
];

const Hotel_Dashboard_Purchase = () => {
  const [isHotelChoice, setIsHotelChoice] = useState(0);

  const handleClickHotel = (i: any) => {
    setIsHotelChoice(i);
  };
  return (
    <div className="space-y-10">
      <div className="flex gap-5">
        {CHOICE_OF_HOTEL.map((item, i) => (
          <button
            key={i}
            onClick={() => handleClickHotel(i)}
            className={`flex gap-1 px-3 py-1 rounded-full font-semibold text-white text-sm ${isHotelChoice === i ? "bg-blue-600" : "bg-black/30"}`}
          >
            {item.icon && <item.icon className="my-auto" />}
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex gap-3 text-white">
        <Purchase_Input label="Asal" flex1>
          <IoLocationOutline className="px-3" />
          <Select_Component defaultValue={Kota[0]} options={Kota} />
        </Purchase_Input>
        <Purchase_Input label="Tanggal Check-in" flex1>
          <FaRegCalendarAlt className="px-3" />
          <Calendar_Component />
        </Purchase_Input>
        <Purchase_Input label="Tanggal Check-out" flex1>
          <FaRegCalendarAlt className="px-3" />
          <Calendar_Component />
        </Purchase_Input>
        <Purchase_Input label="Tamu" flex1>
          <FaChildReaching className="px-3" />
          <Select_Component
            defaultValue={Amount_People[0]}
            options={Amount_People}
          />
        </Purchase_Input>
        <div className="flex items-end">
          <Button className="max-w-20 h-[43px] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Hotel_Dashboard_Purchase;
