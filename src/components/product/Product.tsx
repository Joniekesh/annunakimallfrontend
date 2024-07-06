import Image from "next/image";
import "./product.scss";

const Product = () => {
  return (
    <div className="product">
      <span>-47%</span>
      <div className="imageContainer">
        <Image src="/assets/bg.jpg" alt="" fill objectFit="cover" />
      </div>
      <div className="details">
        <p className="name">Annunaki product...</p>
        <p className="price">$99.99</p>
        <p className="discount" style={{ textDecoration: "line-through" }}>
          $200.99
        </p>
      </div>
    </div>
  );
};

export default Product;
