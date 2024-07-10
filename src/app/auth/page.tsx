"use client";

import React, { useState } from "react";
import "./auth.scss";
import PagesWrapper from "@/components/pageWrapper";
import Link from "next/link";
import Image from "next/image";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Page = () => {
  const [active, setActive] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <PagesWrapper>
      <div className="userRegister">
        <div className="container">
          <div className="userRegisterWrapper">
            <div className="innerWrapper">
              <Link href="/" className="logoWrapper">
                <Image
                  src="/assets/favicon.png"
                  alt=""
                  width={70}
                  height={70}
                  objectFit="cover"
                />
              </Link>
              <p>Welcome to Annunaki Mall. Login to your account</p>

              <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter Email" />
                <div className="passwordContainer">
                  <input
                    type={active ? "text" : "password"}
                    placeholder="Password"
                  />
                  <span onClick={() => setActive((prev) => !prev)}>
                    {active ? <IoMdEyeOff /> : <IoMdEye />}
                  </span>
                </div>
                <button type="submit">LOGIN</button>
              </form>
              <Link href="/forgotPassword" className="underline text-green-600">
                Forgot Password?
              </Link>
              <span>Do not have an accoun?</span>
              <div className="redirects">
                <Link className="redirect affiliate" href="/affiliate/auth">
                  Register as an Affiliate{" "}
                </Link>
                <Link className="redirect seller" href="/vendor/auth">
                  Register as a Seller{" "}
                </Link>
                <Link className="redirect shopper" href="/auth/register">
                  Register as a Shopper{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
};

export default Page;
