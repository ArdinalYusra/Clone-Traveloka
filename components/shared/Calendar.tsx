import { useState } from "react";
import Input from "../ui/Input";

type Props = {
  icon?: any;
};

export default function Calendar_Component(props: Props) {
  const { icon } = props;
  const [value, setValue] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <div className="flex w-full cursor-pointer">
      {icon && <div className="m-2 text-slate-600">{icon}</div>}
      <form onSubmit={handleSubmit}>
        <Input type="date" value={value} className="text-black" />
      </form>
    </div>
  );
}
