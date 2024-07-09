"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { MdOutlinePhoneInTalk, MdOutlineEmail } from "react-icons/md";
import { IoMdContacts, IoMdContact, IoMdPerson } from "react-icons/io";
import Image from "next/image";
import { GoPencil } from "react-icons/go";
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentUser = false;

  const data = [
    {
      id: 1,
      text: "Annunaki...connecting Africa!",
    },
    {
      id: 2,
      text: "Near zero exchange rate with Annunaki Coin.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbarWrapper">
          <div className="left">
            <Link href="/onboarding" className="item seller">
              <GoPencil />
              <span>Become an Affiliate</span>
            </Link>
            <Link href="/auth" className="item start">
              <span>Start Selling</span>
            </Link>
          </div>
          <div className="carousel">{data[currentIndex].text}</div>
          <div className="right">
            {currentUser ? (
              <Link href="/user" className="item">
                <IoMdContact className="icon" />
                <span className="myAccount">My Account</span>
              </Link>
            ) : (
              <Link href="/auth" className="item auth">
                <IoMdLogIn className="icon" />
                {/* <IoMdPerson className="icon" /> */}
                <span className="reg">Login / Register</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
