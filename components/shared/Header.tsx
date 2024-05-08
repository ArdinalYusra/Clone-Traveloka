"use client";

import { CategoryList, Navlinks } from "@/constanst";
import Link from "next/link";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-[12%] z-20">
        <nav className="flex-between py-2">
          <Link href={"/"} className="text-white text-3xl">
            traveloka
          </Link>
          <div className="flex-center gap-x-5 text-slate-200 font-semibold text-sm">
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
              <button className="flex-center border px-3 py-2 gap-2 rounded-lg hover:bg-black/20">
                <FaUser /> Log In
              </button>
            </div>
            <button className="bg-blue-600 font-bold px-3 py-2 rounded-lg hover:bg-blue-500">
              Daftar
            </button>
          </div>
        </nav>
        <div className="flex py-2 text-sm font-bold text-slate-200 gap-3">
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
              More {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
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
    </>
  );
};

export default Header;
