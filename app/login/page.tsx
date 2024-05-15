import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";
import { MdOutlineFacebook } from "react-icons/md";

const LoginPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={"/assets/images/mountain.jpg"}
        alt=""
        width={1920}
        height={1080}
        className="h-screen w-full object-cover"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-600/20"></div>
      <div className="absolute top-5 left-20 space-y-3">
        <div>
          <Link href={"/"} className="text-3xl text-white">
            <Image
              src={"/assets/images/logo-traveloka-white.png"}
              alt="Traveloka Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="flex gap-20">
          <div className="flex items-center max-w-[750px]">
            <h1 className="font-bold text-5xl text-white">
              Wujudkan Perjalananmu dengan Caramu.
            </h1>
          </div>
          <div className="space-y-5">
            <Link
              href={"/"}
              className="flex gap-2 font-semibold text-xl text-white"
            >
              <FaArrowLeft /> Ke Halaman Utama Traveloka
            </Link>
            <div className="max-w-[500px] bg-white p-8 rounded-xl space-y-5">
              <h1 className="font=semibold text-2xl mb-5">Login/Daftar</h1>
              <label className="flex flex-col gap-2">
                Email/No. Handphone
                <input
                  type="text"
                  placeholder="Masukkan email atau no. handphone-mu"
                  className="w-full py-2.5 px-3 ring-1 ring-slate-500 rounded-md"
                />
              </label>
              <button className="bg-blue-600 text-white w-full py-2.5 px-3 rounded-md">
                Lanjutkan
              </button>
              <div className="relative">
                <hr className="w-full border-b border-slate-3 00" />
                <p className="absolute -top-2 left-[30%] bg-white text-sm text-slate-500 px-5">
                  atau login/daftar dengan
                </p>
              </div>
              <button className="flex-center gap-2 w-full py-2.5 rounded-md font-bold text-lg text-blue-600 ring-1 ring-blue-600">
                <IoLogoGoogle />
                Lanjut dengan Google
              </button>
              <button className="flex-center gap-2 w-full py-2.5 rounded-md font-bold text-lg text-blue-600 ring-1 ring-blue-600">
                <MdOutlineFacebook className="text-blue-600" />
                Lanjut dengan Facebook
              </button>
              <p className="text-blue-600 text-center">
                Dengan mendaftar, kamu menyetujui{" "}
                <span className="font-semibold">Syarat & Ketentuan</span> yang
                berlaku dan kamu sudah membaca{" "}
                <span className="font-semibold">Pemberitahuan Privasi </span>
                kami.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
