import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesan Antar Jemput Bandara di Traveloka",
  description: "This app was created by Ardinal Yusra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
