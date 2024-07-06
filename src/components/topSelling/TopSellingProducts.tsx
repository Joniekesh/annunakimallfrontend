import Product from "../product/Product";
import "./topSellingProducts.scss";
import { RxCaretRight } from "react-icons/rx";

const TopSellingProducts = () => {
  return (
    <div className="topSellingProducts">
      <div className="topSellingTop">
        <h2>TOP SELLING PRODUCTS</h2>
        <button className="viewButton">
          <span>VIEW ALL</span>
          <RxCaretRight className="vieIcon" />
        </button>
      </div>
      <div className="topSellingBottom">
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

export default TopSellingProducts;
