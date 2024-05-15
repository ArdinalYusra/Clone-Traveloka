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
    <div className="min-h-screen w-full bg-white">
      <Header />
      <div
        className={`${pathname === "/" || pathname === "/international-data" || pathname === "/destinations" || pathname === "/giftvoucher" ? "my-0" : "my-24"}`}
      >
        {!disableHeaderPurchase.includes(pathname) && <Header_Purchase />}
      </div>
      {children}
      <div>
        {!disableFooterCategory.includes(pathname) && <Footer_Category />}
      </div>
      <Footer />
    </div>
  );
}
