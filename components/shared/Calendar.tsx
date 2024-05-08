import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Input from "../ui/Input";

type Props = {
  icon?: any;
};

export default function Calendar_Component(props: Props) {
  const { icon } = props;

  const [value, setValue] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={handleClick} className="flex w-full">
      {icon && <div className="m-2 text-slate-600">{icon}</div>}
      <Input type="text" value={value.toDateString()} />
      {isOpen && <Calendar value={value} />}
    </div>
  );
}
