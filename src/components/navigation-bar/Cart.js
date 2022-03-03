import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListProduct from "../ListProduct";
import { Link } from "react-router-dom";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { CartContext } from "../../containers/CartContext";
import { Badge } from "@mui/material";

export default function Cart() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      /* onClick={toggleDrawer(anchor, false)} */
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography>CART</Typography>
      <List>
        {cart.map((product, index) => (
          <ListProduct
            key={index}
            product={product}
            removeFromCart={removeFromCart}
            addQuantity={addQuantity}
            removeQuantity={removeQuantity}
          />
        ))}
      </List>
      <Typography>Tot: {tot + " €"}</Typography>
      <Button component={Link} to={"/ecommerce-react-demo/checkout"} onClick={toggleDrawer(anchor, false)}>
        Checkout
      </Button>
    </Box>
  );

  const [cart, setCart] = useContext(CartContext);
  const [tot, setTot] = useState(0);

  let arr = cart.map((el) => el.price);
  let sum = 0;
  if (arr.length > 0) {
    sum = arr.reduce(
      (initialValue, currentValue) => initialValue + currentValue
    );
  }

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

  useEffect(() => {
    let arr = cart.map((el) => el.price * el.quantity);
    let sum = 0;
    if (arr.length > 0) {
      sum = arr.reduce(
        (initialValue, currentValue) => initialValue + currentValue
      );
    }
    setTot(sum);
  });

  let arrCart = cart.map((el) => el.quantity);
  let sumCart = 0;
  if (arrCart.length > 0) {
    sumCart = arrCart.reduce(
      (initialValue, currentValue) => initialValue + currentValue
    );
  }

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Badge badgeContent={sumCart} color="warning">
            <ShoppingBagOutlinedIcon onClick={toggleDrawer(anchor, true)} />
          </Badge>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
