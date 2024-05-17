import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pesan Tiket Bus dan Travel Online di Traveloka",
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
