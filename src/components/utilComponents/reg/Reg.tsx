"use client";

import Link from "next/link";
import "./reg.scss";
import Image from "next/image";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const Reg = ({
  isAffiliate,
  isVendor,
}: {
  isAffiliate?: boolean;
  isVendor?: boolean;
}) => {
  const [active, setActive] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="reg">
      <div className="regWrapper">
        <Link href="/" className="logoWrapper">
          <Image
            src="/assets/favicon.png"
            alt=""
            width={70}
            height={70}
            objectFit="cover"
          />
          {/* <span>Annunaki Mall</span> */}
        </Link>
        <div className="bottom">
          <form onSubmit={handleSubmit}>
            <h1>
              {isAffiliate
                ? "CREATE AFFILIATE ACCOUNT"
                : isVendor
                ? "CREATE SELLER ACCOUNT"
                : "CREATE SHOPPER ACCOUNT"}
            </h1>
            <p>
              Welcome to Annunaki Mall. Create{" "}
              {isAffiliate
                ? "an Affiliate Account"
                : isVendor
                ? "a Seller Account"
                : "a Shopper Account"}{" "}
              or{" "}
              <Link href="/auth" className="underline text-green-800">
                Login
              </Link>{" "}
              if you already have an account.
            </p>
            <div className="formInputs">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Confirm Phone Numer" />
              <input type="email" placeholder="Email" />
              <div className="passwordContainer">
                <input
                  type={active ? "text" : "password"}
                  placeholder="Password"
                />
                <span onClick={() => setActive((prev) => !prev)}>
                  {active ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
              </div>
              <div className="passwordContainer">
                <input
                  type={active ? "text" : "password"}
                  placeholder="Confirm Password"
                />
                <span onClick={() => setActive((prev) => !prev)}>
                  {active ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
              </div>
            </div>
            <select>
              <option value="">---SELECT---</option>
              <option value="Abia">Abia</option>
              <option value="Abia">Adamawa</option>
              <option value="Abia">Akwa Ibom</option>
              <option value="Abia">Anambra</option>
              <option value="Abia">Bauchi</option>
            </select>
            <button type="submit" className="submitBtn">
              CREATE ACCOUNT
            </button>
          </form>
          <div className="banner">
            <Image
              src="/assets/favicon.png"
              alt=""
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reg;
