type Props = {
  type: string;
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
};

const Input = (props: Props) => {
  const { type, className, placeholder, value, onChange } = props;

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-2 py-[5.5px] rounded-md border border-slate-500 focus:border-slate-600 hover:border hover:border-slate-600 ${className}`}
    />
  );
};

export default Input;
