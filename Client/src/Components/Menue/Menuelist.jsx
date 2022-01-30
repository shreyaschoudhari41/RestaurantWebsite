import React, { useState } from "react";
import { Form } from "./Form";
import { MenueProduct } from "./MenueProduct";
import { TotalAmount } from "./TotalAmount";



export const Menuelist = () => {
  const items = [
    {
      name: "Maharashtra Special",
      quantity: 0,
      price: 250,
    },

    {
      name: "South Indian Special",
      quantity: 0,
      price: 250,
    },

    {
      name: "Northern Zayka",
      quantity: 0,
      price: 250,
    },

    {
      name: "Homemade Ravioli",
      quantity: 0,
      price: 350,
    },

    {
      name: "Linguine with Fresh Tomatoes",
      quantity: 0,
      price: 350,
    },

    {
      name: "Cherry Tomato & Basil Focaccia",
      quantity: 0,
      price: 350,
    },

    {
      name: "Make-Ahead Spinach Manicotti",
      quantity: 0,
      price: 350,
    },

    {
      name: "Artichoke Caprese Platter",
      quantity: 0,
      price: 500,
    },

    {
      name: "Shiitake Fried Rice With Water Chestnuts",
      quantity: 0,
      price: 500,
    },

    {
      name: "Mixed Vegetable Bake",
      quantity: 0,
      price: 500,
    },

    {
      name: "Dulce de Leche",
      quantity: 0,
      price: 500,
    },
  ];

  const [productList, setproductList] = useState(items);
  const [totalAmount, settotalAmount] = useState(0);
  const [orders, setorders] = useState([]);

  const increament = (index) => {
    let newItemList = [...productList];
    newItemList[index].quantity++;
    setproductList(newItemList);

    let newtotalAmount = totalAmount + newItemList[index].price;
    settotalAmount(newtotalAmount);

    let neworders = [...orders, newItemList[index].name];
    // neworders.push(newItemList[index].name);
    setorders(neworders);
    console.log(orders);
  };

  const decreament = (index) => {
    if (productList[index].quantity > 0) {
      let newItemList = [...productList];
      newItemList[index].quantity--;
      setproductList(newItemList);

      let newtotalAmount = totalAmount - newItemList[index].price;
      settotalAmount(newtotalAmount);

      let text;
      const checkval = (text) => {
        return (text = productList[index]);
      };
      var pos = orders.findIndex(checkval);
      orders.splice(pos, 1);
      // setorders(orders);
      console.log(orders);
    } else {
      let newItemList = [...productList];
      setproductList(newItemList);

      let newtotalAmount = totalAmount;
      settotalAmount(newtotalAmount);
    }
  };
  return (
    <>
      <MenueProduct
        productList={productList}
        increament={increament}
        decreament={decreament}
      />
      <TotalAmount totalAmount={totalAmount} />
      <Form totalAmount={totalAmount} productList={productList} />

    </>
  );
};
