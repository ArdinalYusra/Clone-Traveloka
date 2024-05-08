import { Internet_Luar_Negeri } from "@/lib";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute top-1 w-full py-1 bg-black opacity-55 text-sm text-slate-300">
          <p className="wrapper">
            Pulsa & Internet{" "}
            <span className="italic">Internet Luar Negeri</span>
          </p>
        </div>
        <Image
          src={"/assets/images/banner_international_data.jpg"}
          alt="Internet Luar Negeri"
          height={300}
          width={300}
          className="w-screen h-screen object-cover"
        />
        <div className="absolute top-32 left-[20%] text-slate-200 space-y-5">
          <h1 className="font-semibold text-3xl mb-5">Tetap Semangat</h1>
          <p className="w-[480px] text-lg">
            Ketika Anda memiliki solusi konektivitas luar negeri di tangan Anda,
            Anda bisa melakukan segalanya: mencari petunjuk arah di tempat
            asing, menjelajahi aktivitas baru, mengirim email ke partner,
            menerjemahkan bahasa lokal, hingga melakukan panggilan video dengan
            keluarga tercinta. Dengan berbagai pilihan seperti paket roaming,
            rental Pocket WiFi dan kartu SIM, kami membantu Anda untuk tetap
            terhubung di seluruh dunia.
          </p>
          <p className="text-slate-200 ">Kini tersedia di Traveloka App</p>
          <div className="flex gap-2">
            <Image
              src={"/assets/images/GeoglePlay.jpeg"}
              alt="Geogle Play"
              height={100}
              width={100}
              className="rounded-md border"
            />
            <Image
              src={"/assets/images/AppStore.jpeg"}
              alt="App Store"
              height={100}
              width={100}
              className="rounded-md border"
            />
          </div>
        </div>
      </div>
      <div className="wrapper p-5 space-y-5">
        <h1 className="font-bold text-2xl text-center text-slate-800">
          Mengapa pesan paket internet luar negeri di Traveloka?
        </h1>
        <div className="grid grid-cols-3 gap-5 justify-center">
          {Internet_Luar_Negeri.map((item, index) => (
            <div key={index} className="space-y-5 text-center">
              <div className="flex-center h-56">
                <Image src={item.image} alt="" height={100} width={100} />
              </div>
              <h1 className="text-xl font-semibold text-slate-800">
                {item.title}
              </h1>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <h1 className="font-bold text-2xl text-center text-slate-800">
          Nikmati Koneksi internet super cepat di genggaman Anda!
        </h1>
        <div className="flex-center gap-20 font-semibold text-blue-600 py-3 border-b">
          <button>Paket Roaming</button>
        </div>
        <h1 className="font-semibold text-2xl text-center text-slate-800">
          Paket Roaming
        </h1>
        <p className="text-slate-600 text-center text-sm px-20">
          Pastikan pemakaian internet Anda terkontrol, agar biaya yang
          berlebihan dapat dihindari. Anda dapat mengaktifkan fitur roaming
          internasional melalui kartu SIM Anda, pilih paket sesuai kebutuhan
          Anda dan jelajahi dunia!
        </p>
        <div className="border rounded-md text-slate-600 space-y-5">
          <h1 className="text-lg text-center mb-5 border-b p-5">
            Cara Memesan
          </h1>
          <div className="space-y-5 px-10 py-5">
            <li>- Pilih negara tujuan dan lama bepergian Anda (opsional).</li>
            <li>
              - Pilih paket roaming yang Anda inginkan dari hasil pencarian dan
              masukan nomor handphone Anda.
            </li>
            <li>
              - Dengan beberapa produk dari operator tertentu. Anda dapat
              memilih kapan paket diaktifkan (saat itu juga atau di tanggal
              lain)
            </li>
            <li>
              - Setelah pemesanan berhasil, Anda akan menerima SMS konfirmasi
              atau email berisi detail mengenai aktivasi paket roaming Anda.
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
