import React from "react";
import { Menue } from "./Menue";

export const MenueProduct = (props) => {
  return props.productList.map((product, index) => {
    return (
      <Menue
        product={product}
        key={index}
        index={index}
        increament={props.increament}
        decreament={props.decreament}
      />
    );
  });
};
