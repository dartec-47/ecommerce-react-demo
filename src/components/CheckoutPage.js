import React, { useContext, useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CartContext } from '../containers/CartContext';
import { Backdrop, Button, CircularProgress, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { Link, useNavigate } from 'react-router-dom';
import FormOrder from './FormOrder';

const useStyles = makeStyles(() => 
    createStyles({
      root: { 
        display: 'flex',
        padding: '5%'
      },
    })
)

const api = new WooCommerceRestApi({
  url: "https://ecommerce-react-demo.x10.mx/wp/",
  consumerKey: "ck_0fbeec789c4e12780070d60ebaccf11245dba721",
  consumerSecret: "cs_ba3eb67352f860a6ca7102fd9aca0b5242fcbd71",
  wpAPI: true,
  version: "wc/v3"
});

export default function SpanningTable() {
  const classes = useStyles();
  const [cart, setCart] = useContext(CartContext)
  const [tot, setTot] = useState(0)
  const [billing, setBilling] = useState({})
  const [backDrop, setBackdrop] = useState(false)

  const navigate = useNavigate()

  let removeFromCart = (element) => {
    let arr = cart.filter(el => el.id !== element.id);
    setCart(arr)
  }

  let removeQuantity = (el) => {
      el.quantity --
      setCart(prevState => (
          [...prevState]
      ))
  }

  let addQuantity = (el) => {
      el.quantity ++
      setCart(prevState => (
          [...prevState]
      ))
  }

  let items = cart.map(el => (
    {product_id: el.id, quantity: el.quantity}
  ))

  let handleInformation = (event)=>{
    let obj = Object.assign({}, billing)
    obj[event.target.name] = event.target.value
    /* let newOrder = { obj, obj, line_items: items } */    
    setBilling(obj)
  }

  let submitOrder= ()=> {
    setBackdrop = true
    let info = billing;
    let lineItems = items;

    let order = { 
      billing: info,
      shipping: info,
      line_items: lineItems
    }
    
    api.post("orders", order)
    .then(response=> {
      setCart([])
      navigate(`/ecommerce-react-demo//order/${response.data.id}`)
    })
  }

  useEffect(() => {
    let arr = cart.map(el => el.price * el.quantity)
    let sum = 0
    if(arr.length > 0){
      sum = arr.reduce((initialValue, currentValue) => initialValue + currentValue)
    }
    setTot(sum)
  })
  


  return (
    <>
        <div className={classes.root}>
        <div>
    <FormOrder handleInformation={handleInformation}/>
        </div>
          <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Details
            </TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Desc.</TableCell>
            <TableCell align="right">Actions</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((product) => (
            <TableRow key={product.name}>
              <TableCell>{product.name}</TableCell>
              <TableCell>
              <IconButton onClick={() => addQuantity(product)}>
                        <AddIcon />
                    </IconButton>
                    <IconButton onClick={()=>removeQuantity(product)}>
                        <RemoveIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={()=>removeFromCart(product)}>
                      <DeleteIcon />
                    </IconButton>
              </TableCell>
              <TableCell align="right">{product.quantity}</TableCell>
              <TableCell align="right">{product.price * product.quantity}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{tot}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Button onClick={submitOrder}>Create Order</Button>
    <Button component={Link} to={'/ecommerce-react-demo/checkout'}>Back to shop</Button>
        </div>
        </div>
            {backDrop === true && <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
>
  <CircularProgress color="inherit" />
</Backdrop>}
    </>
    
  );
}
