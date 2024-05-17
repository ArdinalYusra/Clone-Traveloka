"use client";

import { CategoryList, Navlinks } from "@/constanst";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div
        className={`fixed top-0 left-0 z-50 w-full px-20 ${isScrolled && pathname === "/" ? "bg-white text-black" : pathname !== "/" ? "bg-white text-slate-700" : "bg-transparent text-white"}`}
      >
        <nav className="flex-between py-2">
          <Link href={"/"} className="text-3xl">
            <Image
              src={
                isScrolled || pathname !== "/"
                  ? "/assets/images/logo-traveloka-black.png"
                  : "/assets/images/logo-traveloka-white.png"
              }
              alt="Traveloka Logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex-center gap-x-5 font-semibold text-sm">
            <Link
              href={""}
              className="flex gap-1 hover:bg-black/20 p-2 rounded-lg"
            >
              🏁ID / IDR <IoIosArrowDown />
            </Link>
            <Link
              href={""}
              className="flex gap-1 hover:bg-black/20 p-2 rounded-lg"
            >
              <span className="bg-transparent font-extrabold rounded-full px-1 border border-blue-600 text-yellow-600">
                %
              </span>
              Promo
            </Link>
            <div className="flex-center gap-x-5">
              {Navlinks.map((link) => {
                return (
                  <Link
                    href={link.path}
                    key={link.path}
                    className="hover:bg-black/20 p-2 rounded-md"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="rounded-md">
              <Link
                href={"/login"}
                className={`flex-center ring-1 px-3 py-2 gap-2 rounded-lg hover:bg-black/20 ${isScrolled && pathname === "/" ? "ring-blue" : isScrolled && pathname !== "/" ? "ring-slate-300" : "ring-slate-300"}`}
              >
                <FaUser /> Log In
              </Link>
            </div>
            <Link
              href={"/login"}
              className="bg-blue-600 font-bold text-white px-3 py-2 rounded-lg hover:bg-blue-500"
            >
              Daftar
            </Link>
          </div>
        </nav>
        <div className="flex py-2 text-sm font-bold gap-3">
          <ul className="flex gap-3 my-auto">
            {CategoryList.slice(0, 7).map((link) => {
              return (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="hover:bg-black/20 p-2 rounded-md"
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <section className="flex-center relative p-2 hover:bg-black/20 hover:rounded-md">
            <button
              onClick={() => setOpen(!open)}
              className="flex-center gap-2"
            >
              More{" "}
              <IoIosArrowDown
                className={`${open && "rotate-180"} duration-300 ease-in-out`}
              />
            </button>
            {open && (
              <ul className="flex flex-col bg-slate-200 p-3 w-max rounded-lg absolute left-0 top-[110%] z-10 duration-700">
                {CategoryList.slice(7).map((link) => {
                  return (
                    <Link
                      href={link.path}
                      key={link.path}
                      className="bg-slate-200 p-3 text-slate-600 rounded-lg hover:bg-slate-300"
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </ul>
            )}
          </section>
        </div>
      </div>
    </header>
  );
};

export default Header;
