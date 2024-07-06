"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { MdOutlinePhoneInTalk, MdOutlineEmail } from "react-icons/md";
import { IoMdContacts, IoMdContact, IoMdPerson } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

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
            <Link href="/" className="logoWrapper">
              <Image
                src="/assets/favicon.png"
                alt=""
                width={50}
                height={50}
                objectFit="cover"
              />
              <span>Annunaki Mall</span>
            </Link>
            <div className="item">
              <MdOutlinePhoneInTalk className="icon" />
              <span>+234567890</span>
            </div>
            <Link href="/" className="item">
              <MdOutlineEmail className="icon" />
              <span>annunakimall@gmail.com</span>
            </Link>
          </div>
          <div className="carousel">{data[currentIndex].text}</div>
          <div className="right">
            <Link href="/contact" className="item contact">
              <IoMdContacts className="icon" />
              <span>Contact Us</span>
            </Link>
            {!currentUser ? (
              <Link href="/user" className="item">
                <IoMdContact className="icon" />
                <span className="myAccount">My Account</span>
              </Link>
            ) : (
              <Link href="/auth" className="item">
                <IoMdPerson className="icon" />
                <span>Login / Register</span>
              </Link>
            )}
            <div className="hamburger">
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
