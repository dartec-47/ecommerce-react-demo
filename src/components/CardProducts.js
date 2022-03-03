import React, { useContext, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { CartContext } from "../containers/CartContext";
import { Button } from "@mui/material";

export default function CardProducts({ product }) {
  const [cart, setCart] = useContext(CartContext);

  let handleProducts = (product) => {
    product.quantity = 1;

    setCart((prevState) => [...prevState, product]);
  };
  
  let check = false;
  cart.map((el) => {
    if (el.id === product.id) {
      check = true;
      return;
    }
  });

  let removeFromCart = (element) => {
    let arr = cart.filter((el) => el.id !== element.id);
    setCart(arr);
  };

  let removeQuantity = (el) => {
    el.quantity--;
    setCart((prevState) => [...prevState]);
    if (el.quantity === 0) {
      removeFromCart(el);
    }
  };

  let addQuantity = (el) => {
    el.quantity++;
    setCart((prevState) => [...prevState]);
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardHeader title={product.name} />
      <CardMedia
        component="img"
        height="194"
        image={product.images[0].src}
        alt={product.images[0].name}
      />
      <CardActions disableSpacing>
        {check === false ? (
          <Button
            onClick={() => handleProducts(product)}
            sx={{ my: 2, display: "block" }}
          >
            Add to cart
          </Button>
        ) : (
          <>
            <IconButton onClick={() => removeQuantity(product)}>
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={() => addQuantity(product)}>
              <AddIcon />
            </IconButton>
          </>
        )}
      </CardActions>
    </Card>
  );
}
