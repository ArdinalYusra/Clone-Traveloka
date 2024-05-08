import { CategoryList } from "@/constanst";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Image
        src={"/assets/images/mountain.jpg"}
        alt=""
        width={1920}
        height={1080}
        className="h-screen w-full object-cover"
      />
      {/* <div className="relative wrapper">
        <div className="absolute -top-[200px] px-20">
          <h1 className="font-bold text-3xl text-center text-white">
            Wujudkan Perjalananmu dengan Caramu
          </h1>
          <div className="flex gap-1">
            {CategoryList.slice(0, 7).map((item) => (
              <div key={item.label} className="p-3">
                <li className="font-bold text-xl">{item.label}</li>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
