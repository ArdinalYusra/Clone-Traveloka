import { CategoryListProps } from "@/types";
import React, { useState } from "react";
import Purchase_Input from "../shared/Purchase_Input";
import { TbTrain } from "react-icons/tb";
import Select_Component from "../ui/Select";
import { Amount_People, Kota } from "@/constanst";
import { FaRegCalendarAlt } from "react-icons/fa";
import Calendar_Component from "../shared/Calendar";
import { FaChildReaching } from "react-icons/fa6";
import Button from "../ui/Button";

const TRAIN_OPTIONS: CategoryListProps[] = [
  {
    label: "Indonesia",
  },
  {
    label: "Jepang",
  },
];

const Kereta_Api_Dashboard_Purchase = () => {
  const [trainOption, setTrainOption] = useState(0);

  const handleClickTrain = (i: any) => {
    setTrainOption(i);
  };
  return (
    <div className="space-y-10 text-white">
      <div className="flex gap-5">
        {TRAIN_OPTIONS.map((item, i) => (
          <button
            key={i}
            onClick={() => handleClickTrain(i)}
            className={`px-3 py-1 rounded-full font-semibold text-white text-sm ${trainOption === i ? "bg-blue-600" : "bg-black/30"}`}
          >
            {item.icon && <item.icon className="my-auto" />}
            {item.label}
          </button>
        ))}
      </div>
      <div className="flex gap-3">
        <Purchase_Input label="Asal">
          <TbTrain className="px-3 rounded-md" />
          <Select_Component defaultValue={Kota[0]} options={Kota} />
        </Purchase_Input>
        <Purchase_Input label="Tujuan">
          <TbTrain className="px-3 rounded-md scale-x-[-1]" />
          <Select_Component defaultValue={Kota[2]} options={Kota} />
        </Purchase_Input>
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
        <div className="flex items-end">
          <Button className="max-w-10 h-[43px] rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default Kereta_Api_Dashboard_Purchase;
