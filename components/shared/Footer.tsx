import { ProdukFooter, SosialMedia, TentangTraveloka } from "@/constanst";
import Image from "next/image";
import { PiHandshakeBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="flex bg-gray-800 p-10">
      <div className="w-full">
        <div className="wrapper grid grid-cols-4 w-full pb-10 border-b">
          <section className="flex flex-col gap-5">
            <div className="text-white text-4xl">traveloka</div>
            <div>
              <button className="flex bg-slate-600 p-3 text-white text-lg gap-2 items-center rounded-lg">
                <PiHandshakeBold /> Jadi Partner Traveloka
              </button>
            </div>
            <div>
              <p className="text-white font-bold">Partner Pembayaran</p>
              <div className="grid grid-cols-4 grid-rows-2 gap-2 py-5 pr-5">
                <Image
                  src={"/assets/images/bank_bca.png"}
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-md"
                />
                <Image
                  src={"/assets/images/bank_bni.png"}
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-md"
                />
                <Image
                  src={"/assets/images/bank_mandiri.png"}
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-md"
                />
                <Image
                  src={"/assets/images/bank_bri.png"}
                  alt=""
                  height={100}
                  width={100}
                  className="rounded-md"
                />
              </div>
            </div>
          </section>
          <section className="space-y-10">
            <div>
              <h1 className="text-white font-bold mb-3">Tentang Traveloka</h1>
              {TentangTraveloka.map((link) => {
                return (
                  <li
                    key={link}
                    className="text-slate-400 text-sm font-semibold hover:text-slate-200 cursor-pointer"
                  >
                    {link}
                  </li>
                );
              })}
            </div>
            <div>
              <h1 className="text-white font-bold mb-3">Sosial Media</h1>
              {SosialMedia.map((link) => {
                return (
                  <li
                    key={link}
                    className="text-slate-400 text-sm font-semibold hover:text-slate-200 cursor-pointer"
                  >
                    {link}
                  </li>
                );
              })}
            </div>
          </section>
          <section>
            <div>
              <h1 className="text-white font-bold mb-3">Produk</h1>
              {ProdukFooter.map((link) => {
                return (
                  <li
                    key={link}
                    className="flex text-slate-400 text-sm font-semibold hover:text-slate-200 cursor-pointer"
                  >
                    {link}
                  </li>
                );
              })}
            </div>
          </section>
          <section className="space-y-10">
            <div>
              <h1 className="text-white font-bold mb-3">Tentang Traveloka</h1>
              {TentangTraveloka.map((link) => {
                return (
                  <li
                    key={link}
                    className="text-slate-400 text-sm font-semibold hover:text-slate-200 cursor-pointer"
                  >
                    {link}
                  </li>
                );
              })}
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-white font-bold">Download Traveloka App</h1>
              <div className="grid grid-rows-2 gap-3">
                <Image
                  src={"/assets/images/GeoglePlay.jpeg"}
                  alt="Download Traveloka App"
                  height={100}
                  width={100}
                  className="rounded-lg"
                />

                <Image
                  src={"/assets/images/AppStore.jpeg"}
                  alt="Download Traveloka App"
                  height={100}
                  width={100}
                  className="rounded-lg"
                />
              </div>
            </div>
          </section>
        </div>
        <p className="text-sm text-slate-100 text-center mt-5">
          Copyright © 2024 Traveloka. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
