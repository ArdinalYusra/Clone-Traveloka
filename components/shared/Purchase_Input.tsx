type Props = {
  children: React.ReactNode;
  label?: string;
  flex1?: boolean;
};

const Purchase_Input = (props: Props) => {
  const { children, label, flex1 } = props;

  return (
    <div className={`${flex1 && "flex-1"} flex flex-col gap-2 cursor-pointer`}>
      {label && <label className="font-semibold">{label}</label>}
      <div className="flex">{children}</div>
    </div>
  );
};

export default Purchase_Input;
