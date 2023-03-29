import React from "react";
import "./css/BlogItems.css";
import { addItem } from "../state/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function BlogItems(props) {
  const dispatch = useDispatch();
  let { productName, price, image } = props;

  return (
    <>
      <div className={props.Mode === "light" ? "card" : "darkcard"}>
        <div className="card__header">
          <img
            src={image}
            alt="card__image"
            className="card__image"
            width="600"
          />
        </div>
        <div className="card__body">
          <h4
            style={{
              display: "inline-block",
            }}
          >
            {(productName)}...
          </h4>
        </div>
        <div className="card__footer">
          <div className="user">
            <div className="user__info">
            <p class="card-text">Rs. {price}/-</p>
            </div>
          </div>
          <button
          onClick={(e) =>
            dispatch(addItem({ name: props.productName, price: props.price }))
          }
          className="btn btn-primary"
        >
          Add to cart
        </button>
        </div>
      </div>
    </>
  );
}
