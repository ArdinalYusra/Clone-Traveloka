import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiket Pesawat | Harga Tiket Pesawat Promo Online di Traveloka",
  description: "This app was created by Ardinal Yusra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
