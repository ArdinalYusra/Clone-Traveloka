import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Traveloka Experience: Tiket Hiburan, Tempat Wisata, Kecantikan, Event, dan Aktivitas Seru Lainnya",
  description: "This app was created by Ardinal Yusra",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
