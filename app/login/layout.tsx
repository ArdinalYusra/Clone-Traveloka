import Header from "@/components/shared/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Sign In",
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
      <div>{children}</div>
    </div>
  );
}
