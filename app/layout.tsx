import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traveloka - Southeast Asia's Leading Travel Platform",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
