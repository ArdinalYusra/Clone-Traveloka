import { AiOutlineMail } from "react-icons/ai";

const Footer_Category = () => {
  return (
    <div className="bg-blue-500">
      <div className="wrapper flex-between p-3">
        <div className="w-1/2">
          <h1 className="font-bold text-semibold text-white">
            Selalu Tahu Kabar Terbaru
          </h1>
          <p className="text-sm text-slate-100">
            Dapatkan berbagai rekomendasi travel & gaya hidup serta info promo
            terkini dengan berlangganan newsletter kami.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <input
              type="email"
              placeholder="Alamat email Anda"
              className="px-10 py-2 rounded-md focus:outline-slate-300"
            />
            <AiOutlineMail className="absolute top-1 py-1 px-2 text-2xl text-slate-600" />
          </div>
          <div>
            <button className="bg-orange-500 font-bold text-white px-3 py-2 rounded-md">
              Berlangganan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_Category;
