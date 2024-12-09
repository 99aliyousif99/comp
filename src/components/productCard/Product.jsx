// eslint-disable-next-line no-unused-vars
import React from "react";
import "./product.css";
import headset from "../../assets/image 1.png";
import frame from "../../assets/Frame.svg";
import vec from "../../assets/Vector.svg";
const Product = () => {
  return (
    <div className="container">
      <img src={headset} alt="test" />
      <div className="content">
        <div className="shipping">
          <h5>Free shipping</h5>
        </div>
        <h3>
          Razer Kraken Kitty Edt Gaming <br />
          Headset Quartz
        </h3>
        <div className="sale">
          <p>1599,-</p>
        </div>

        <h1>799,-</h1>
        <div className="info">
          <p>the offer is valid until april 3 or as long as stock lasts!</p>
        </div>

        <div className="addToCart">
          <button> Add to cart</button>
        </div>
        <div className="stock">
          <div className="avaliable"></div>
          50+ pcs. in stock.
        </div>
        <div className="wishlist">
          <button className="cartBtn">
            <img src={frame} alt="" /> Add to Cart
          </button>
          <button className="wishBtn">
            
            <img src={vec} alt="" /> Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
