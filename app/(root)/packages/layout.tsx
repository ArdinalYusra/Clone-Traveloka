import Header from "@/components/shared/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesan Tiket Pesawat dan Hotel Online di Traveloka",
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
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
