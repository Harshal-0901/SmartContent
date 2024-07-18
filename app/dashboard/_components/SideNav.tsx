"use client";

import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";
import UsageTrack from "./UsageTrack";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();

  useEffect(() => {}, []);

  return (
    <div className="h-screen p-5 shadow-sm border bg-white relative">
      <div className="flex justify-center">
        <Link href='/'>
          <Image src={"/logo.png"} alt="logo" width={150} height={200} />
        </Link>
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {MenuList.map((menu) => (
          <Link key={menu.path} href={menu.path} passHref>
            <div
              className={`flex mb-2 gap-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
                path === menu.path && "bg-primary text-white"
              }`}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
};

export default SideNav;
