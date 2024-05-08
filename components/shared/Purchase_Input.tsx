type Props = {
  children: React.ReactNode;
  label?: string;
};

const Purchase_Input = (props: Props) => {
  const { children, label } = props;

  return (
    <div>
      {label && <label className="font-semibold">{label}</label>}
      <div className="flex">{children}</div>
    </div>
  );
};

export default Purchase_Input;
