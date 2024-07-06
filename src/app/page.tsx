import "./home.scss";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import NewsLetter from "@/components/newsletter/NewsLetter";
import Hero from "@/components/hero/Hero";
import FeaturedProducts from "@/components/featured/FeaturedProducts";
import TopSellingProducts from "@/components/topSelling/TopSellingProducts";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <div className="container">
        <div className="homeWrapper">
          <Hero />
          <FeaturedProducts />
          <TopSellingProducts />
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </main>
  );
}
