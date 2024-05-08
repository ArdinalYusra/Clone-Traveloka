import Image from "next/image";

const Header_Purchase = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="wrapper w-full h-full p-3">
        <div className="grid grid-cols-2 grid-rows-1 p-3">
          <div className=" flex flex-col text-2xl my-auto font-medium px-12 text-white items-center gap-5">
            <p>Cari & booking dengan harga termurah di sini!</p>
            <p>
              Temukan harga terbaik untuk setiap produk Traveloka yang Anda
              butuhkan.
            </p>
          </div>
          <div className="flex justify-end">
            <Image
              src={"/assets/images/hotel_page.webp"}
              alt="Hotel Page"
              width={1000}
              height={350}
            />
          </div>
        </div>
        <p className="text-[12px] pt-2 pb-10 text-center text-white font-bold cursor-pointer hover:underline">
          Lihat promo lainnya
        </p>
      </div>
    </div>
  );
};

export default Header_Purchase;
