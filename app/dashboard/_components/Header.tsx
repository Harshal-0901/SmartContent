import { UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border b-2 flex justify-between items-center bg-white">
      <div
        className="gap-2 flex items-center p-2 border rounded-md bg-white"
        style={{ width: "400px" }}
      >
        <Search />
        <input
          type="text"
          placeholder="Search"
          className="outline-none flex-grow"
        />
      </div>
      <div className="w-100 flex gap-5 items-center">
        <h2 className="bg-primary p-2 rounded-full text-xs text-white px-2 flex items-center justify-center font-semibold">
          🔥Join Membership for $9.99/Month
        </h2>
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
