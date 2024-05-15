import { CategoryProps } from "@/types"
import { FaBus, FaCarAlt, FaGetPocket, FaHotel } from "react-icons/fa"
import { FaChildCombatant, FaTrainSubway, FaTruckPlane } from "react-icons/fa6"
import { IoMdAirplane } from "react-icons/io"
import { MdCarRental, MdOutlineSignalWifiStatusbarConnectedNoInternet4, MdPayments, MdWallet } from "react-icons/md"
import { PiFlowerLotusDuotone } from "react-icons/pi"
import { TbHorseToy, TbShip } from "react-icons/tb"
import { GiDeskLamp } from "react-icons/gi"
import { TiFlowChildren, TiTicket } from "react-icons/ti"

export const Navlinks = [
    {
        label: "Bantuan",
        path: "/"
    },
    {
        label: "Jadi Mitra",
        path: "/"
    },
    {
        label: "Pesanan",
        path: "/pesanan"
    },
]

export const CategoryList: CategoryProps[] = [
    {
        label: "Hotel",
        path: "/hotel",
        icon: FaHotel,
    },
    {
        label: "Tiket Pesawat",
        path: "/tiket-pesawat",
        icon: IoMdAirplane,
    },
    {
        label: "Tiket Kereta Api",
         path: "/kereta-api",
         icon: FaTrainSubway,
    },
    {
        label: "Tiket Bus & Travel",
         path: "/bus-and-shuttle",
         icon: FaBus,
    },
    {
        label: "Antar Jemput Bandara",
         path: "/airport-transfer",
         icon: FaCarAlt,
    },

    {
        label: "Rental Mobil",
         path: "/car-rental",
         icon: MdCarRental,
    },
    {
        label: "Aktraksi dan Aktivitas",
         path: "/activities",
         icon: FaGetPocket,
    },
    {
        label: "Pesawat + Hotel",
         path: "/packages",
         icon: FaTruckPlane,
    },
    {
        label: "Internet Luar Negeri",
        path: "/international-data",
        icon: MdOutlineSignalWifiStatusbarConnectedNoInternet4,
    },
    {
        label: "Asuransi Perjalanan", path: "/insurance",
    },
    {
        label: "Paduan Wisata",
        path: "/destinations",
    },
    {
        label: "Gift Voucher",
         path: "/giftvoucher",
         icon: MdWallet,
    },
]

export const  Activities: CategoryProps[] = [
    {
        label: "Spa & Kecantikan",
        path : "/",
        icon: PiFlowerLotusDuotone,
    },
    {
        label: "Taman Bermain",
        path : "/",
        icon: TbHorseToy,
    },
    {
        label: "Kursus & Workshop",
        path : "/",
        icon: GiDeskLamp,
    },
    {
        label: "Events",
        path : "/",
        icon: TiTicket,
    },
    {
        label: "Atraksi",
        path : "/",
        icon: TiFlowChildren,
    },
    {
        label: "Tur",
        path : "/",
        icon: FaChildCombatant,
    },
    {
        label: "Cruises",
        path : "/",
        icon: TbShip,
    },
]

export const TentangTraveloka = [
                "Cara Pesan",
                "Hubungi Kami",
                "Pusat bantuan",
                "Karier",
                "Cicilan",
                "Tentang Kami",
]

export const SosialMedia = [
        "Follow kami di",
        "Twitter",
        "facebook",
        "Instagram",
        "Youtube",
        "Tiktok",
]

export const ProdukFooter = [
        "Tiket Pesawat",
        "Hotel",
        "Tiket Kereta Api",
        "JR Pass",
        "Pesawat + Hotel",
        "Xperience",
        "Rental Mobil",
        "Internet Luar Negeri",
        "PayLater",
        "Antar Jemput Bandara",
        "Tiket Bus & Travel",
        "Gift Voucher",
        "Asuransi",
        "Vila",
        "Apartemen",
        "Taksi",
]

export const LainnyaFotter = [
            "Traveloka for Corporates",
            "Traveloka Affiliate",
            "Blog Traveloka",
            "Pemberitahuan Privasi",
            "Syarat & Ketentuan",
            "Darftarkan Akomodasi Anda",
            "Daftarkan Bisnis Aktivitas Anda",
            "Traveloka Press Room",
            "Traveloka Ads",
]

export const Hotel_Destination_List = [
    {name:"Sari Ater", path: ""},
    {name:"Fairmont Jakarta", path: ""},
    {name:"Chevilly Resort", path: ""},
    {name:"Dusun Bambu Lembang", path: ""},
    {name:"Kempinski Bali", path: ""},
    {name:"Gaia Hotel Bandung", path: ""},
    {name:"Kempinski Jakarta", path: ""},
    {name:"Bobocabin Gunung Mas", path: ""},
    {name:"Bobocabin Ranca Upas", path: ""},
    {name:"Hotel Bumi Surabaya", path: ""},
    {name:"Ayana Resort Bali", path: ""},
    {name:"Ritz Carlton Mega Kuningan", path: ""},
    {name:"Swissbell Dago", path: ""},
    {name:"Hotel Mulia", path: ""},
    {name:"Amanjiwo", path: ""},
    {name:"Safari Resort", path: ""},
    {name:"Bobocabin Malang", path: ""},
    {name:"Bobocabin Pangalengan", path: ""},
    {name:"Le MerJakarta", path: ""},
    {name:"Four Seasons Jakarta", path: ""},
    {name:"The Lodge Maribaya", path: ""},
    {name:"Grant Hyatt Jakarta", path: ""},
    {name:"Jw Marriott Jakarta", path: ""},
    {name:"Raffles Jakarta", path: ""},
    {name:"Padma Hotel Bandung", path: ""},
    {name:"Bobocabin Baturaden", path: ""},
    {name:"Bobocabin Cikole", path: ""},
]

export const Bus_Price_List = [
    {
        image: "/assets/images/destination2.jpg",
        from: "Jakarta",
        rute: [
            {
                travel: "Bandung",
                price: "Rp70.000",
            },
            {
                travel: "Yogyakarta",
                price: "Rp125.000",
            },
            {
                travel: "Surabaya",
                price: "Rp210.000",
            },
            {
                travel: "Semarang",
                price: "Rp105.000",
            },
            {
                travel: "Solo",
                price: "Rp120.000",
            },
            {
                travel: "Lampung",
                price: "Rp180.000",
            },
        ]
    },
    {
        image: "/assets/images/destination2.jpg",
        from: "Bandung",
        rute: [
            {
                travel: "Jakarta",
                price: "Rp45.000",
            },
            {
                travel: "Yogyakarta",
                price: "Rp115.000",
            },
            {
                travel: "Cirebon",
                price: "Rp100.000",
            },
            {
                travel: "Surabaya",
                price: "Rp230.000",
            },
            {
                travel: "Semarang",
                price: "Rp115.000",
            },
            {
                travel: "Bekasi",
                price: "Rp75.000",
            },
        ]
    },
    {
        image: "/assets/images/destination2.jpg",
        from: "Yogyakarta",
        rute: [
            {
                travel: "Jakarta",
                price: "Rp105.000",
            },
            {
                travel: "Semarang",
                price: "Rp45.000",
            },
            {
                travel: "Surabaya",
                price: "Rp85.000",
            },
            {
                travel: "Bandung",
                price: "Rp125.000",
            },
            {
                travel: "Denpasar",
                price: "Rp250.000",
            },
            {
                travel: "Malang",
                price: "310.000",
            },
        ]
    },
    {
        image: "/assets/images/destination2.jpg",
        from: "Surabaya",
        rute: [
            {
                travel: "Denpasar",
                price: "Rp160.000",
            },
            {
                travel: "Jakarta",
                price: "Rp215.000",
            },
            {
                travel: "Yogyarkarta",
                price: "Rp85.000",
            },
            {
                travel: "Bandung",
                price: "Rp195.000",
            },
            {
                travel: "Semarang",
                price: "Rp95.000",
            },
        ]
    },
    {
        image: "/assets/images/destination2.jpg",
        from: "Semarang",
        rute: [
            {
                travel: "Yogyakarta",
                price: "Rp45.000",
            },
            {
                travel: "Jakarta",
                price: "Rp140.000",
            },
            {
                travel: "Bandung",
                price: "Rp130.000",
            },
            {
                travel: "Surabaya",
                price: "Rp95.000",
            },
            {
                travel: "Solo",
                price: "Rp45.000",
            },
        ]
    },
    {
        image: "/assets/images/destination2.jpg",
        from: "Tanggerang",
        rute: [
            {
                travel: "Bandung",
                price: "Rp90.000",
            },
            {
                travel: "Yoyakarta",
                price: "Rp125.000",
            },
            {
                travel: "Solo",
                price: "Rp135.000",
            },
            {
                travel: "Semarang",
                price: "Rp135.000",
            },
            {
                travel: "Surabaya",
                price: "Rp260.000",
            },
        ]
    },
]

export const Antar_jemput_Bandara = [
    {
        src: "/assets/images/sesuai_kebutuhan.png",
        title: "Pilihan Sesuai Kebutuhan",
        description: "Dengan beragam pilihan dari layanan mobil hingga bus bandara, pesan yang paling sesuai dengan kebutuhan Anda.",
    },
    {
        src: "/assets/images/beban_cemas.png",
        title: "Beban Cemas",
        description: "Pesan jauh hari dan hindari antrean bus atau taksi bandara. Dengan harga final yang mencakup biaya tol dan parkir, tak ada lagi biaya tambahan.",
    },
    {
        src: "/assets/images/partner_terpercaya.png",
        title: "Partner Terpercaya",
        description: "Demi kenyamanan Anda, kami bekerja sama hanya dengan penyedia jasa transportasi paling berpengalaman.",
    },
]

export const Sewa_Mobil_Traveloka = [
    {
        src: "/assets/images/hemat_waktu.png",
        title: "Hemat Waktu",
        description: "Sewa mobil cukup di genggaman Anda, kapan saja dan di mana saja. Bandingkan pilihan mobil dari partner tepercaya kami dengan mudah dan temukan yang sesuai dengan kebutuhan Anda.",
    },
    {
        src: "/assets/images/servis_berkualitas.png",
        title: "Servis Berkualitas Dari Partner Terpercaya",
        description: "Partner rental mobil Traveloka menyediakan servis berkualitas demi kenyamanan bepergian Anda.",
    },
    {
        src: "/assets/images/rating_pengguna.png",
        title: "Rating Pengguna Asli",
        description: "Ucapkan selamat tinggal pada keputusan yang tidak tepat. Rating dari user lain akan membantu Anda untuk menemukan pilihan rental mobil yang paling tepat.",
    },
    {
        src: "/assets/images/paylater.png",
        title: "Tambah Mudah dengan PayLater",
        description: "Booking rental mobil kapan aja tanpa perlu membayar penuh secara langsung. Gunakan limit awal mulai dari 10 juta, cicilan 1-12 bulan dan bunga rendah.",
    },
]

export const Ketentuan_Umum_Rental_Mobil = [
    {
        title: "Syarat Sewa Mobil Lepas Kunci",
        desc: [
            {
                title: "Termasuk",
                ketentuan: "Asuransi untuk mobil dan penumpang"
            },
            {
                title: "Tidak Termasuk",
                ketentuan: "Bensin, pengambilan/pengembalian di luar kota, dan klaim asuransi",
            },
            {
                title: "Lokasi Jemput",
                ketentuan: "Gratis penjemputan dan pengantaran di area bandara dan dalam kota.",
            },
            {
                title: "Dokumen yang dibutuhkan",
                ketentuan: "Mohon diketahui bahwa saat pengambilan mobil, traveler pada Detail Traveler harus menunjukkan KTP/paspor, SIM A, dan kartu kredit asli milik pribadi atau keluarga (foto kartu keluarga atau surat nikah Anda harus dibagikan kepada tempat rental sebelum pengambilan mobil untuk memverifikasi kartu kredit keluarga).",
            },
        ],
        note: "Catatan: Akun media sosial dan foto diri dengan KTP diperlukan untuk rental dengan supplier rental. Supplier akan memerlukan bentuk verifikasi lainnya jika akun media sosial tidak tersedia. Mohon diketahui bahwa supplier akan menghubungi penyewa untuk meminta informasi tersebut. Cek Syarat & Ketentuan untuk informasi selengkapnya."
    },
    {
        title: "Syarat Sewa Mobil Dengan Sopir",
        desc: [
            {
                title: "Termasuk",
                ketentuan: "Penggunaan sampai dengan 12 jam atau hingga 23:59 di setiap hari rental",
            },
            {
                title: "Tidak Termasuk",
                ketentuan: "Bensin, parkir, tol, uang makan sopir dan tips"
            },
            {
                title: "Lokasi Penjemputan",
                ketentuan: "Gratis penjemputan dan pengantaran di area bandara dan dalam kota",
            },
        ],
        note: "Catatan: Sopir akan menghubungi Anda 12 jam sebelum waktu jemput. Bila Anda memsan rental mobil kurang dari 12 jam sebelum waktu jemput, sopir akan menghubungi Anda segera setelah pesanan dikonfirmasi."
    }
]

export const Paket_Wisata = [
    "Bandung",
    "Lombok",
    "Seoul",
    "Belitung",
    "Ubud",
    "Manado",
    "Ho Chi Minh City",
    "Karimun Jawa",
    "Penang",
    "Makassar",
    "Bintan",
    "Bromo",
    "Jakarta",
    "Surabaya",
    "Manila",
    "Semarang",
    "Labuan Bajo",
    "Dieng",
    "Johor Bahru",
    "Shanghai",
    "Malang",
    "Nusa Penida",
    "Raja Ampat",
    "Tidung",
    "Pulau Seribu"
]

export const Pilihan_Asuransi_Terbaik = [
    "Asuransi Perjalanan ke Jepang",
    "Asuransi Perjalanan ke Australia",
    "Asuransi Perjalanan ke Turki",
    "Asuransi Perjalanan ke Amerika",
    "Asuransi Perjalanan ke Korea Selatan",
    "Asuransi Mobil All risk",
    "Asuransi Mobil TLO",
    "Asuransi Mobil Jakarta",
    "Asuransi Mobil Toyota",
    "Asuransi Mobil Honda",
    "Asuransi Covid-19",
    "Asuransi Keterlambatan Pesawat",
    "Baggage Protection",
    "Travel Insurance",
    "Cancer Protection",
]

export const Kota = [
    {
        label: "Jakarta, Indonesia (JKTA)",
        value: "Semua bandara di Jakarta",
    },
    {
        label: "Bali / Denpasar, Indonesia (DPS)",
        value: "Ngurah Rai International Airport",
    },
    {
        label: "Hong Kong, Hong Kong (HKG)",
        value: "Hong Kong International Airport",
    },
    {
        label: "Surabaya, Indonesia (SUB)",
        value: "Juanda",
    },
    {
        label: "Medan, Indonesia (KNO)",
        value: "Semua bandara di Medan",
    },
    {
        label: "Tokyo, Jepang (TYOA)",
        value: "Semua Bandara di Tokyo",
    },
    {
        label: "Singapore, Singapura",
        value: "Singapore International Airport",
    },
    {
        label: "New York, Amerika Serikat (JFK)",
        value: "John F. Kennedy International Airport",
    },
    {
        label: "Los Angeles, Amerika Serikat (LAX)",
        value: "Los Angeles International Airport",
    },
    {
        label: "Makassar, Indonesia (UPG)",
        value: "Hassanudin",
    },
]

export const Jumlah_Malam = [
    {
        label: "1 malam",
    },
    {
        label: "2 malam",
    },
    {
        label: "3 malam",
    },
    {
        label: "4 malam",
    },
    {
        label: "5 malam",
    },
    {
        label: "6 malam",
    },
]

export const Kelas_Penerbangan = [
    {
      label: "Ekonomi",
      value: "Ekonomi",
    },
    {
      label: "Bisnis",
      value: "Bisnis",
    },
    {
      label: "Eksekutif",
      value: "Eksekutif",
    },
    {
      label: "First Class",
      Value: "First Class",
    },
  ];

export const Usia = [
    {
        label: "1 Dewasa",
        value: "(12 thn atau lebih)",
    },
    {
        label: "1 Anak",
        value: "(2 - 11 thn)",
    },
    {
        label: "1 Bayi",
        value: "(di bawah 2 thn)",
    },
] 

export const Amount_People = [
    {
        label: "0",
    },
    {
        label: "1",
    },
    {
        label: "2",
    },
    {
        label: "3",
    },
    {
        label: "4",
    },
    {
        label: "5",
    },
    {
        label: "6",
    },
    {
        label: "7",
    },
    {
        label: "8",
    },
    {
        label: "9",
    },
    {
        label: "10",
    },
]
  
export const Bandara_List = [
    {
        label: "Bandar Udara Internasional Soekarno Hatta (CKG)",
    },
    {
        label:"Bandar Udara Internasional Juanda (SUB)"
    },
    {
        label:"Bandar Udara Internasional Ngurah Rai (DPS)"
    },
    {
        label:"Bandar Udara Internasonal Kualanamu (KNO)"
    },
    {
        label:"Bandar Udara Internasional Adisutjipto (JOG)"
    },
    {
        label:"KLIA T1"
    },
    {
        label:"Bandar Udara Intersional Changi Singapura (SIN)"
    },
    {
        label:"Bandar Udara Internasional Don Mueang (DMK)"
    },
]

export const Alamat_List = [
    {
        label: "Grand Indonesia Shopping Mall"
    },
    {
        label: "Hotel Borobudur Jakarta"
    },
    {
        label: "FX Sudirman Mall"
    },
    {
        label: "Medan Station (MDN)"
    },
    {
        label: "Gambir Station"
    },
    {
        label: "Swiss-Bellresidences Kalibata"
    },
    {
        label: "Pasaraya Blok M"
    },
    {
        label: "Lombok Epicentrum Mall"
    }
]

export const Country = [
    {
        label: "Indonesia",
    },
    {
        label: "Australia",
    },
    {
        label: "Singapore",
    },
    {
        label: "Amerika Serikat",
    },
    {
        label: "Jepang",
    },
    {
        label: "Arab Saudi",
    },
    {
        label: "Prancis",
    },
    {
        label: "Malaysia",
    },
    {
        label: "Turki",
    },
]

export const Jenis_Perlindungan = [
    {
        value: "Single Trip",
    },
    {
        value: "Perjalanan Tahunan",
    }
]

export const Wilayah = [
    {value: "Domestik"},
    {value: "Indonesia"}
]

export const ATRAKSI = [
    {
        image: "/assets/images/atraksi-1.webp",
        label: "Tur dan Atraksi",
    },
    {
        image: "/assets/images/atraksi-2.webp",
        label: "Fun Activities",
    },
    {
        image: "/assets/images/atraksi-3.webp",
        label: "Travel Insurance",
    },
    {
        image: "/assets/images/atraksi-4.webp",
        label: "Traveloka PayLater",
    },
]