import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../state/slices/cartSlice";

const Cart = (props) => {
  const items = useSelector(getItemsSelector);
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <>
     <h2
        style={{
          marginBottom: "35px",
          marginTop: "75px",
          textAlign: "center",
          color: props.mode === "light" ? "#102542" : "white",
        }}
      >
        {`Product - Top product to buy`}{" "}
      </h2>
    <div className="alert alert-success" style={{ marginBottom: "35px",
    marginTop: "15px",
    textAlign: "center"}}>
      <h3 className="text-center">
        Total Items: {items.length} (Rs. {total})/-
        {/* Total Items: 25 (Rs. 3,000)/- */}
      </h3>
    </div>
    </>
  );
};

export default Cart;
