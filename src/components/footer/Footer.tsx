import React from "react";
import "./footer.scss";
import { MdOutlineEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdArrowDropright } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { importantLinks, myAccountLinks, serviceLinks } from "@/mockData";
import Link from "next/link";
import Image from "next/image";
import { RxCaretUp } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="containerWrapper">
          <div className="item">
            <div className="title">LOGO</div>
            <div className="details">
              <Link href="/" passHref>
                <div className="keyValue">
                  <span className="key">
                    <MdOutlinePhoneInTalk />
                  </span>
                  <span className="value">+1234567890</span>
                </div>
              </Link>
              <Link href="/" passHref>
                <div className="keyValue">
                  <span className="key">
                    <MdOutlineEmail />
                  </span>
                  <span className="value">annunakimall@gmail.com</span>
                </div>
              </Link>
              <Link href="/" passHref>
                <div className="keyValue">
                  <span className="key">
                    <IoLocationOutline />
                  </span>
                  <span className="value">Annunaki Villa</span>
                </div>
              </Link>
            </div>
            <div className="socials">
              <a
                href="https://www.facebook.com/your-facebook-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/your-instagram-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.twitter.com/your-twitter-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill />
              </a>
            </div>
          </div>
          <div className="item">
            <div className="title">IMPORTANT LINKS</div>
            <div className="details">
              {importantLinks.map((item) => (
                <Link href={item.path} passHref key={item.id}>
                  <div className="keyValue">
                    <span className="key">
                      <IoMdArrowDropright />
                    </span>
                    <span className="value">{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="item">
            <div className="title">MY ACCOUNT</div>
            <div className="details">
              {myAccountLinks.map((item) => (
                <Link href={item.path} passHref key={item.id}>
                  <div className="keyValue">
                    <span className="key">
                      <IoMdArrowDropright />
                    </span>
                    <span className="value">{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="item">
            <div className="title">OUR SERVICE</div>
            <div className="details">
              {serviceLinks.map((item) => (
                <Link href={item.path} passHref key={item.id}>
                  <div className="keyValue">
                    <span className="key">
                      <IoMdArrowDropright />
                    </span>
                    <span className="value">{item.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bottomLink">
        <div className="container">
          <div className="wrapper">
            <span className="copyright">
              Copyright 2024, Annunaki Mall. All Rights Reserved.
            </span>
            <div className="paymentGateway">
              <span>We are Using Safe Payment : </span>
              <Image
                src="/assets/mastercard.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <span className="caretIcon">
              <RxCaretUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
