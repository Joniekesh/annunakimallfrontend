import Product from "../product/Product";
import "./featuredProducts.scss";
import { RxCaretRight } from "react-icons/rx";

const FeaturedProducts = () => {
  return (
    <div className="featuredProducts">
      <div className="featuredTop">
        <h2>FEATURED PRODUCTS</h2>
        <button className="viewButton">
          <span>VIEW ALL</span>
          <RxCaretRight className="vieIcon" />
        </button>
      </div>
      <div className="featuredBottom">
        <div className="products">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
