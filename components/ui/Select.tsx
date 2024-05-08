import Select from "react-select";

type Props = {
  defaultValue?: any;
  options?: any;
  icon?: any;
};

const Select_Component = (props: Props) => {
  const { defaultValue, options, icon } = props;

  return (
    <div className="flex w-full">
      {icon && <div className="m-2 text-slate-600">{icon}</div>}
      <Select
        defaultValue={defaultValue}
        options={options}
        className="w-full border border-slate-600 rounded-md"
      />
    </div>
  );
};

export default Select_Component;
