import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const useStyles = makeStyles(() => 
    createStyles({
      root: { 
        display: 'flex',
      },
      container: { 
        marginTop: '10%',
        paddingLeft: '30%'
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
    const [order, setOrder] = useState({})
    const [isLoad, setIsLoad] = useState(false)

    const orderId = useParams()

    useEffect(() => {
        fetchOrder()
    }, []);    
    
    let fetchOrder = () => {
        api.get(`orders/`+ orderId.id).then((response) => {
            if (response.status === 200) {
              setOrder(response.data);
              setIsLoad(true)
            }
        }) 
    };


  return (
    <>
      {isLoad === true ? (
        <>
        <div className={classes.container}>
          <div className={classes.root}>
            <div>
              <Typography>{'Order Numer: ' + order.number}</Typography>
              <Typography>Billing Information</Typography>
              <Typography>{'Firstname: ' + order.billing.first_name}</Typography>
              <Typography>{'Lastname: ' + order.billing.last_name}</Typography>
              <Typography>{'Address 1: ' + order.billing.address_1}</Typography>
              <Typography>{'Address 2: ' + order.billing.address_2}</Typography>
              <Typography>{'City: ' + order.billing.city}</Typography>
              <Typography>{'State: ' + order.billing.state}</Typography>
              <Typography>{'Postcode: ' + order.billing.postcode}</Typography>
              <Typography>{'Country' + order.billing.country}</Typography>
              <Typography>{'Email: ' + order.billing.email}</Typography>
              <Typography>{'Phone' + order.billing.phone}</Typography>
            </div>
            <div>
              <Typography>Shipping Information</Typography>
              <Typography>{'Firstname: ' + order.shipping.first_name}</Typography>
              <Typography>{'Lastname: ' + order.shipping.last_name}</Typography>
              <Typography>{'Address 1: ' + order.shipping.address_1}</Typography>
              <Typography>{'City: ' + order.shipping.city}</Typography>
              <Typography>{'State: ' + order.shipping.state}</Typography>
              <Typography>{'Postcode: ' + order.shipping.postcode}</Typography>
              <Typography>{'Country' + order.shipping.country}</Typography>
            </div>
          </div>
            {order.line_items.map((product) => (
              <TableRow key={product.name}>
                <TableCell>{product.name}</TableCell>
                <TableCell align="right">{product.quantity}</TableCell>
                <TableCell align="right">
                  {product.price + "x" + product.quantity + "=" + product.total + ' €'}
                </TableCell>
              </TableRow>
            ))}
            <Typography>{'Total: ' + order.total + " €"}</Typography>
            </div>
            <Button component={Link} to={'/ecommerce-react-demo'}>Back to shop</Button>

        </>
      ) : (
        <>
            <Typography component="div">
        <CircularProgress />
        </Typography>
        </>
      )}
    </>
  );
}
