"use client";

import React, { useState } from "react";
import "./links.scss";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";

const Links = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="links">
      <div className="container">
        <div className="linksWrapper">
          <div className="leftWrapper">
            <div className="categoryContainer">
              <div className="top">
                <FiMenu
                  onClick={() => setShow((prev) => !prev)}
                  className="icon"
                />
                <span>Browse Categories</span>
                <FaCaretDown className="icon" />
              </div>
            </div>
            <div className="mainLinks">
              <div className="topMainLinks">
                <Link className="link" href="/">
                  Home
                </Link>
                <Link className="link" href="/">
                  Shop
                  <FaCaretDown className="icon" />
                </Link>
                <Link className="link" href="/sellers">
                  Sellers
                </Link>
                <Link className="link" href="/blog">
                  Blog
                </Link>
                <Link className="link" href="/campaign">
                  Campaign
                </Link>
                <Link className="link" href="/">
                  Pages
                  <FaCaretDown className="icon" />
                </Link>
              </div>
              {/* <ul className="subCatList active">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
              </ul> */}
            </div>
          </div>
          <div className="rightWrapper">
            <Link className="link" href="/trackorder">
              Track Order
            </Link>
            <Link className="link" href="/">
              Flash Deals
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
