import { Gift_Voucher_Traveloka } from "@/lib";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";

const page = () => {
  return (
    <div className="space-y-10">
      <div className="relative my-20">
        <Image
          src={"/assets/images/banner_international_data.jpg"}
          alt=""
          height={100}
          width={300}
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute top-0 z-40 h-[350px] w-full bg-gradient-to-r from-red-500 via-red-500 to-red-500/30">
          <div className="space-y-5 px-[250px] py-16 text-slate-50">
            <h1 className="font-semibold text-3xl">Traveloka Gift Voucher</h1>
            <p className="font-semibold text-sm w-[500px]">
              Hadiah yang mudah, menyenangkan, dan penuh makna, yang juga dapat
              digunakan untuk berbagai produk Traveloka.
            </p>
            <p className="font-bold underline cursor-pointer">
              Corporate Gift Voucher juga tersedia di sini
            </p>
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
      </div>
      <div className="wrapper p-10 space-y-5">
        <h1 className="font-bold text-2xl text-center text-slate-800">
          Mengapa Pilih Gift Voucher Traveloka?
        </h1>
        <p className="italic text-slate-600 text-center">
          - Karena mudah dan menyenangkan Untuk Anda dan mereka -
        </p>
        <div className="grid grid-cols-3 gap-3">
          {Gift_Voucher_Traveloka.map((item, idx) => (
            <div key={idx} className="flex flex-col space-y-3 p-5">
              <div className="flex-center h-36">
                <Image src={item.image} alt="" height={200} width={200} />
              </div>
              <h1 className="font-medium text-slate-800">{item.title}</h1>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex-center flex-row gap-10">
          <div>
            <Image
              src={"/assets/images/phone_gift_voucher.webp"}
              alt=""
              height={300}
              width={300}
            />
          </div>
          <div className="space-y-5">
            <h1 className="font-bold text-2xl text-slate-800">
              Cara Beli Traveloka Gift Voucher
            </h1>
            <div className="flex flex-col gap-5  text-slate-700 font-medium">
              <li className="flex gap-5">
                <span className="px-3 py-1 bg-blue-500 text-white rounded-full">
                  1
                </span>
                Pilih momen perayaan
              </li>
              <li className="flex gap-5">
                <span className="px-3 py-1 bg-slate-300 text-white rounded-full">
                  2
                </span>
                Pilih desain, nominal, dan metode pengiriman
              </li>
              <li className="flex gap-5">
                <span className="px-3 py-1 bg-slate-300 text-white rounded-full">
                  3
                </span>
                Periksa ulang dan lanjut ke pembayaran
              </li>
              <p className="font-semibold text-lg text-blue-500 underline cursor-pointer">
                Corporate Gift Voucher juga tersedia di sini.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex-center">
          <Image
            src={"/assets/images/banner_international_data.jpg"}
            alt=""
            height={300}
            width={300}
            className="h-[400px] w-[980px] rounded-lg object-cover"
          />
          <div className="absolute p-10 flex-center flex-col h-[400px] w-[980px] bg-black/20 text-center text-slate-50 space-y-5 rounded-lg">
            <h1 className="font-semibold text-2xl">
              Traveloka Gift Voucher for Business
            </h1>
            <p className="font-semibold w-[400px]">
              Beri pelanggan dan karyawan Anda hadiah sederhana dan bermakna
              yang akan mereka sukai
            </p>
            <button className="bg-slate-100 font-bold text-blue-500 px-3 py-2 rounded-md">
              Pesan Sekarang
            </button>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl text-center text-slate-800">
            Penggunaan Voucher Hadiah Traveloka
          </h1>
          <h6 className="text-blue-600 py-5 font-semibold text-center border-b border-blue-600">
            Info Penting
          </h6>
          <div className="grid grid-cols-3 px-20 py-10 gap-5">
            <div className="flex border rounded-md">
              <FaRegCalendarAlt className="bg-slate-200 py-10 px-5 text-lg" />
              <div className="p-3">
                <h1 className="text-xl">Voucher Kadaluarsa</h1>
                <p className="text-sm">Dalam kurun waktu 1 tahun</p>
              </div>
            </div>
            <div className="flex border rounded-md">
              <FaRegCalendarAlt className="bg-slate-200 py-10 px-5 text-lg" />
              <div className="p-3">
                <h1 className="text-xl">Voucher Berlaku Untuk</h1>
                <p className="text-sm">
                  Pesawat, Hotel, Pesawat + Hotel, dan Xperience (kecuali
                  Bioskop)
                </p>
              </div>
            </div>
            <div className="flex border rounded-md">
              <FaRegCalendarAlt className="bg-slate-200 py-10 px-5 text-lg" />
              <div className="p-3">
                <h1 className="text-xl">Voucher Dibatasi Untuk</h1>
                <p className="text-sm">Satu kali penggunaan</p>
              </div>
            </div>
          </div>
          <div className="space-y-5 px-28">
            <li>
              ✔️ Tiap kode voucher hadiah berlaku selama{" "}
              <strong>1 tahun</strong> untuk memesan periode perjalanan{" "}
              <strong>kapan saja, tanpa pembelian minimal</strong>.
            </li>
            <li>
              ✔️ Tiap kode voucher hadiah hanya{" "}
              <strong>berlaku untuk satu kali pemakaian</strong> dan tidak dapat
              digunakan kembali, termasuk ketika pemesanan di-refund.
            </li>
            <li>
              ✔️ Jika terdapat lebih dari satu kode di dalam voucher hadiah,
              Anda dapat menggunakan semuanya di satu pemesanan atau
              menggunakannya secara terpisah. Voucher hadiah juga dapat
              digabungkan dengan kode kupon promo.
            </li>
            <li>
              ✔️ Voucher hadiah dapat digunakan untuk membeli produk{" "}
              <strong>Tiket Pesawat, Hotel</strong> (berlaku untuk hotel
              tertentu, tergantung kebijakan masing-masing hotel),{" "}
              <strong>
                {" "}
                Pesawat + Hotel, Xperience, Kereta Api, Antar Jemput Bandara,
                Bus & Travel, dan Rental Mobil
              </strong>{" "}
              di Traveloka.
            </li>
            <li>
              ✔️ Gift Voucher yang didapatkan/dibeli di luar Traveloka App tidak
              memenuhi syarat untuk produk Bill & Top Up
            </li>
            <li>
              ✔️ Voucher hadiah dapat digunakan di situs Traveloka versi
              desktop/mobile web dan/atau aplikasi Traveloka versi IOS/Android,
              untuk <strong>metode pembayaran apa pun</strong>.
            </li>
            <li>
              ✔️ Penggunaan voucher hadiah akan memberikan Anda Poin sesuai
              harga setelah potongan. Namun penggabungan voucher hadiah dengan
              kode kupon promo tidak akan mendapatkan Traveloka Poin.
            </li>
            <li>
              ✔️ Jika nilai Voucher Hadiah Anda lebih tinggi dari transaksi
              Anda, Anda tidak akan mendapatkan sisa dana dari voucher Anda.
            </li>
            <li>
              ✔️ Traveloka tidak bertanggung jawab dan/atau berkewajiban atas
              segala klaim, tuntutan, kerugian, atau kerusakan yang dibuat,
              diklaim, atau diderita yang disebabkan oleh Kelalaian atau
              kesalahan yang disengaja oleh pengguna. Segala tindakan penjualan
              dan/atau pembelian Voucher Hadiah yang tidak sah di luar platform
              Traveloka dan/atau mitra penjualan resmi, akan dianggap sebagai
              Kelalaian pengguna.
            </li>
            <li>
              ✔️ Harap dicatat bahwa mitra penjualan resmi kami hanya Ultra
              Voucher & Shopee
            </li>
            <li>
              ✔️ Silakan mengunjungi{" "}
              <span className="text-blue-600 font-bold underline">
                http://traveloka.com/giftvoucher/help
              </span>{" "}
              untuk mengetahui lebih lanjut mengenai Voucher Hadiah Traveloka.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
