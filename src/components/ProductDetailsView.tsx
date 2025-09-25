import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../products";

const ProductDetailsView = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <img src="http://via.placeholder.com/400x400" alt="Placeholder" />
        </div>
        <div>
          <h3>${product.price}</h3>
          <p>Description: {product.description}</p>
          <p>Category: {product.category}</p>
          <p>In Stock: {product.stock} pcs</p>
          <p>Rating: {product.rating} / 5.0</p>
          <div style={{ marginTop: "20px" }}>
            {/* No functionality is required for this button */}
            <button>Add to Cart</button>{" "}
          </div>
          <div style={{ marginTop: "20px" }}>
            <Link to="/">Back to Products</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsView;
