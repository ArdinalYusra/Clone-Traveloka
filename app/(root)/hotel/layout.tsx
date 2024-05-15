import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booking Hotel Murah Harga Promo! Pesan Online Sekarang di traveloka",
  description: "This app was created by Ardinal Yusra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
