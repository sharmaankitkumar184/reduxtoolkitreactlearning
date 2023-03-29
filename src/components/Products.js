import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import "./css/BlogPosts.css";
import Spinner from "./Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../state/slices/productsSlice";

// import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../state/index";
// import { useSelector } from 'react-redux';

const Products = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);


  useEffect(() => {
    dispatch(fetchProducts())
    // eslint-disable-next-line
  }, []);
  console.log("State", state);


  return (
    <>

      {state.products.isLoading && <Spinner />}
      <div className="container">
      {state.products.data && state.products.data.map((item,index) => (
            <div key={index}>
              {
                <ProductItem
                  Mode={props.mode}
                  productName={item.productName ? item.productName : ""}
                  price={item.price}
                  image={item.image}
                />
              }
            </div>
          ))}
      </div>
    </>
  );
};

export default Products;
