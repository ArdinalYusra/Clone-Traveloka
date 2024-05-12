import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { CategoryListProps } from "@/types";
import { PiFlowerLotusDuotone } from "react-icons/pi";
import { TbHorseToy, TbTrain } from "react-icons/tb";
import { TiFlowChildren, TiTicket } from "react-icons/ti";
import { FaChildCombatant } from "react-icons/fa6";
import {
  GiArcheryTarget,
  GiFullMotorcycleHelmet,
  GiSchoolBag,
} from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { MdClass } from "react-icons/md";

const CATEGORY_ACTIVITIES: CategoryListProps[] = [
  {
    label: "Atraksi",
    icon: TiFlowChildren,
  },
  {
    label: "Arena Bermain",
    icon: TbHorseToy,
  },
  {
    label: "Spa & Relaksasi",
    icon: PiFlowerLotusDuotone,
  },
  {
    label: "Tur",
    icon: FaChildCombatant,
  },
  {
    label: "Olahraga Rekreasi",
    icon: GiFullMotorcycleHelmet,
  },
  {
    label: "Event",
    icon: TiTicket,
  },
  {
    label: "Game & Aktivitas",
    icon: GiArcheryTarget,
  },
  {
    label: "Transportasi",
    icon: TbTrain,
  },
  {
    label: "Pelengkap Perjalanan",
    icon: GiSchoolBag,
  },
  {
    label: "Pengalaman Kuliner",
    icon: ImSpoonKnife,
  },
  {
    label: "Kelas & Kebudayaan",
    icon: MdClass,
  },
];

const Activities_Dashboad_Purchase = () => {
  return (
    <div className="space-y-10 text-white">
      <div className="flex gap-3">
        <Input
          type="text"
          placeholder="Apa yang ingin kamu lakukan si liburanmu?"
          className="text-black"
        />
        <div className="flex items-end">
          <Button className="max-w-10 h-[43px] rounded-xl" />
        </div>
      </div>
      <div className="text-center space-y-3">
        <p>Atau pilih kategori buat coba pengalaman baru!</p>
        <div className="flex-center gap-3 flex-wrap">
          {CATEGORY_ACTIVITIES.map((item, i) => (
            <li
              key={i}
              className="flex gap-2 px-3 py-2 bg-white/30 rounded-md cursor-pointer"
            >
              {item.icon && <item.icon className="text-xl my-auto" />}
              {item.label}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activities_Dashboad_Purchase;
