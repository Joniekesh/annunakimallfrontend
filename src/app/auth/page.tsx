import React from "react";
import "./auth.scss";
import PagesWrapper from "@/components/pageWrapper";
import Reg from "@/components/utilComponents/reg/Reg";

const Page = () => {
  return (
    <PagesWrapper>
      <div className="auth">
        <div className="container">
          <div className="authWrapper">
            <Reg />
          </div>
        </div>
      </div>
    </PagesWrapper>
  );
};

export default Page;
