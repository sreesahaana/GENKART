import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="bg-black text-white mt-10 lg:px-20 px-8 py-5 pt-10">
      <div className="grid lg:grid-cols-8 gap-8">
        <div className="col-span-3 ">
          <h1 className="text-2xl font-semibold">Genkart</h1>
          
        </div>
        <div className="col-span-2">
          <h1 className="text-xl font-semibold">Navigation</h1>
          <div className="grid gap-1 text-sm lg:grid-cols-2 pt-3 ">
            <Link className="hover:font-semibold duration-200" href={"/"}>Home</Link>
            <Link className="hover:font-semibold duration-200" href={"/product"}>Explore</Link>
            <Link className="hover:font-semibold duration-200" href="/categories/casuals">Casuals</Link>
            <Link className="hover:font-semibold duration-200" href="/categories/tshirts">T shirts</Link>
            <Link className="hover:font-semibold duration-200" href={"/trend"}>Trends</Link>
            <Link className="hover:font-semibold duration-200" href={"/offer"}>Offers</Link>
          </div>
        </div>
        
      </div>
      <div className="">
      <div className="flex justify-center capitalize py-10 text-gray-400">
        <div className="">
          
          <div className="flex justify-center gap-5 text-white text-2xl pt-5">
            <Link href={"https://www.linkedin.com/in/sreesahaananagarajan/"}>
              <FaLinkedin />
            </Link>
            <Link href={"https://github.com/sreesahaana"}>
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
