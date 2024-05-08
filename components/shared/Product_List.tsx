type Props = {
  children: React.ReactNode;
};

const Product_List = (props: Props) => {
  const { children } = props;
  return (
    <div className="grid grid-rows-1 grid-cols-4 gap-2 p-3 cursor-pointer">
      {children}
    </div>
  );
};

export default Product_List;
