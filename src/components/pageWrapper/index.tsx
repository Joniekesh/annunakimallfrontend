import Header from "../header/Header";
import Footer from "../footer/Footer";
import React from "react";
import NewsLetter from "../newsletter/NewsLetter";

function PagesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <NewsLetter />
      <Footer />
    </>
  );
}

export default PagesWrapper;
