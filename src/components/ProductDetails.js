import React, { useContext, useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useParams } from 'react-router';
import { Skeleton } from '@mui/material';
import { CartContext } from '../containers/CartContext';

const useStyles = makeStyles(() =>
  createStyles({

  })
)

const api = new WooCommerceRestApi({
  url: "http://ecommerce-react-demo.x10.mx/wp/",
  headers: {
    "content-type": "application/x-www-form-urlencoded"
  },
  consumerKey: "ck_0fbeec789c4e12780070d60ebaccf11245dba721",
  consumerSecret: "cs_ba3eb67352f860a6ca7102fd9aca0b5242fcbd71",
  wpAPI: true,
  version: "wc/v3"
});

export default function ProductDetails() {
    const classes = useStyles()
    const param = useParams()

    const theme = useTheme();

    const [product, setProduct] = useState({})
    const [load, setLoad] = useState(false)
    const [cart, setCart] = useContext(CartContext)

  
      let check = false
      cart.map(el => {
        if(el.id === product.id){
          check = true
          return
        }
      })
  

    useEffect(()=>{
        fetchProduct()
    },[])

    let fetchProduct = () => {
        api.get("products/" + param.path)
        .then(response=> {
            setProduct(response.data)
            setLoad(true)
        })
    }

    let handleProducts = (product) => {
        product.quantity= 1;

        setCart(prevState => (
            [...prevState, product]
        ));
    }

    let removeFromCart = (element) => {
        let arr = cart.filter(el => el.id !== element.id);
        setCart(arr)
    }
  
      let removeQuantity = (el) => {
        el.quantity --
        setCart(prevState => (
            [...prevState]
        ))
        if(el.quantity === 0){
            removeFromCart(el)
        }
    }
    
    let addQuantity = (el) => {
        el.quantity ++
        setCart(prevState => (
            [...prevState]
        ))
    }  

    return (
      <>
        {load === true ? (
          <Card sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {product.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></Typography>
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
              </CardContent>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 400 }}
              image={product.images[0].src}
              alt={product.images[0].alt}
            />
          </Card>
        ) : (
          <>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" />
            <Skeleton variant="text" />
            <Skeleton variant="rectangular" width={210} height={118} />
          </>
        )}
      </>
    );
}
