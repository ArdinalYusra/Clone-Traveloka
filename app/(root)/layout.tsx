"use client";

import Footer from "@/components/shared/Footer";
import Footer_Category from "@/components/shared/Footer_Category";
import Header from "@/components/shared/Header";
import Header_Purchase from "@/components/shared/Header_Purchase";
import { usePathname } from "next/navigation";

const disableHeaderPurchase = [
  "/",
  "/international-data",
  "/destinations",
  "/giftvoucher",
];

const disableFooterCategory = ["/"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <Header />
        {!disableHeaderPurchase.includes(pathname) && <Header_Purchase />}
        {children}
        {!disableFooterCategory.includes(pathname) && <Footer_Category />}
        <Footer />
      </body>
    </html>
  );
}
