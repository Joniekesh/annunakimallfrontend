"use client";

import React from "react";
import "./filterbar.scss";
import Link from "next/link";
import { toast } from "sonner";
import { FaCaretDown, FaRegHeart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdOutlinePhoneInTalk, MdOutlineEmail } from "react-icons/md";
import { RiScissorsFill } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Filterbar = () => {
  return (
    <div className="filterbar">
      <div className="container">
        <div className="filterbarWrapper">
          <div className="top">
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
            <div className="call">
              <span className="icon">
                <MdOutlinePhoneInTalk />
              </span>
              <div className="phoneNumber">
                <span className="text">Call Us Now:</span>
                <span className="phone">+1234567890</span>
              </div>
            </div>
            <div className="right">
              <div className="icons">
                <Link href="/wishlist" className="item">
                  <FaRegHeart />
                  <span>10+</span>
                </Link>
                <div className="item">
                  <RiScissorsFill />
                  <span>0</span>
                </div>
                <Link href="/cart" className="item">
                  <IoCartOutline />
                  <span>0</span>
                </Link>
              </div>
              <div className="hamburger">
                <GiHamburgerMenu />
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="search">
              <div className="category">
                <span>Categories</span>
                <span>
                  <FaCaretDown />
                </span>
              </div>
              <div className="searchContainer">
                <input type="text" placeholder="Search here..." />
                <span>
                  <FaMagnifyingGlass />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
