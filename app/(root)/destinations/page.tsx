import {
  Article_Items,
  Benua_lainnya,
  Destinasi_Wajib_Dijelajahi,
} from "@/lib";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";

const page = () => {
  return (
    <>
      <div className="relative">
        <div className="bg-black/40 absolute top-0 left-0 right-0 bottom-0" />
        <Image
          src={"/assets/images/bali_beach.jpg"}
          alt="Pantai Bali"
          height={300}
          width={300}
          className="w-full h-[350px]"
        />
        <div className="absolute top-[20%] left-[30%] flex-center flex-col space-y-5 w-[500px]">
          <Image
            src={"/assets/images/travel_guide.png"}
            alt=""
            height={200}
            width={200}
          />
          <p className="text-slate-100 text-sm font-semibold">
            Temukan inspirasi perjalanan, dengan caramu!
          </p>
          <div className="relative items-center w-full">
            <FaSearch className="absolute top-[5px] left-[5px] px-2 py-2 bg-green-700 bg-opacity-65 text-slate-100 text-sm  rounded-full" />
            <input
              type="text"
              placeholder="Cari destinasi"
              className="w-full py-2 px-12 rounded-full placeholder:text-sm"
            />
          </div>
          <div className="flex gap-5 text-slate-300 text-sm font-semibold">
            <button className=" hover:text-slate-50">
              Temukan destinasi saya
            </button>
            <button className=" hover:text-slate-50">
              Lihat semua destinasi
            </button>
          </div>
        </div>
        <p className="absolute top-[85%] right-[2%] flex gap-2 text-lg text-slate-100">
          <GrMapLocation className="" />
          Bali, Indonesia
        </p>
      </div>
      <div className="wrapper p-5 space-y-5">
        <h1 className="font-bold text-2xl text-slate-800">
          Destinasi yang Wajid Anda Jelajahi
        </h1>
        <p className="font-semibold text-slate-600">
          Berkemas dan jelajahi destinasi di bawah ini, sekarang!
        </p>
        <div className="grid grid-cols-4 gap-3">
          {Destinasi_Wajib_Dijelajahi.map((item, index) => (
            <div key={index} className="relative">
              <Image
                src={item.image}
                alt=""
                height={300}
                width={300}
                className="rounded-md"
              />
              <div className="absolute left-0 top-[50%] flex flex-col p-5 text-slate-100 shadow-md">
                <span className="font-medium text-sm">{item.benua}</span>
                <span className="font-bold text-xl">{item.negara}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-5">
          <h1 className="font-bold text-2xl text-slate-800">
            Artikel Inspirasi
          </h1>
          <p className="font-semibold-slate-600">
            Perkaya rencana perjalanan Anda dengan membaca artikel inspirasi
            berikut.
          </p>
          <div>
            <button className="bg-blue-700 text-white px-3 py-2 rounded-full">
              Asia
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {Article_Items.map((item, index) => (
              <div key={index} className="bg-white">
                <div>
                  <Image
                    src={item.image}
                    alt=""
                    height={300}
                    width={300}
                    className="rounded-md"
                  />
                </div>
                <div className="flex flex-col p-3 shadow-md rounded-b-md">
                  <span className="font-bold text-sm text-slate-800">
                    {item.title}
                  </span>
                  <span className="text-sm text-slate-600">{item.name}</span>
                  <span className="text-sm text-slate-600">{item.upload}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={"/assets/images/let's_go_with_traveloka.webp"}
          alt="Let's Go with Traveloka"
          height={100}
          width={300}
          className="w-full rounded-md"
        />
        <h1 className="font-bold text-2xl text-slate-800">
          Jelajahi Benua Lainnya
        </h1>
        <p className="font-semibold text-slate-600">
          Lihat dan temukan pesona tiap benua
        </p>
        <div className="grid grid-cols-4 gap-3 ">
          {Benua_lainnya.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              alt=""
              height={300}
              width={300}
              className="rounded-md"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
