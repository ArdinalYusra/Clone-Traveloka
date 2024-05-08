import React, { useEffect, useState } from "react";
import Input from "../ui/Input";

type Props = {
  icon?: any;
};

export default function Calendar_Component(props: Props) {
  const { icon } = props;

  const [value, setValue] = useState(new Date());
  const [date, setDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);
    setDate(formattedDate);
  }, []);

  return (
    <div className="flex w-full">
      {icon && <div className="m-2 text-slate-600">{icon}</div>}
      <Input type="date" value={date} />
    </div>
  );
}
