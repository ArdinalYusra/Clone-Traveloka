type Props = {
  type: string;
  className?: string;
  placeholder?: string;
  value?: string;
};

const Input = (props: Props) => {
  const { type, className, placeholder, value } = props;

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={`w-full p-2 rounded-md border border-slate-500 focus:border-slate-600 hover:border hover:border-slate-600 ${className}`}
    />
  );
};

export default Input;
