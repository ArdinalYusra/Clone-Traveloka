import Header from "@/components/shared/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Voucher | Bagi Kebahagiaan Dengan Gift Card Traveloka",
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
