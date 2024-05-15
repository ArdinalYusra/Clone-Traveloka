import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Mobil Harga Murah Rp200rb /hari Termasuk Sopir - Treveloka",
  description: "This app was created by Ardinal Yusra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
