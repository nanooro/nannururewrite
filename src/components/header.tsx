"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
  return (
    <div
      className="w-full bg-white  flex justify-start items-center p-2"
      id="header"
    >
      <h1 className="text-4xl font-bold">Nannuru</h1>
      <div className="ml-auto" id="hamMenuIcon">
        <motion.div
          animate={{ rotate: isHamMenuOpen ? 90 : 0 }}
          onClick={() => {
            setIsHamMenuOpen(!isHamMenuOpen);
          }}
        >
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
