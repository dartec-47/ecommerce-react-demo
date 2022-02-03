import React, { useContext, useEffect, useState } from 'react'
import { createStyles, makeStyles } from '@mui/styles';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { CartContext } from '../containers/CartContext';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles(() => 
    createStyles({
      root: { 
        display: 'flex',
        width: '100%',
        height: '90vh',
        alignItems: 'center',
        justifyContent: 'space-around'
      }
    })
)

const api = new WooCommerceRestApi({
    url: "https://ecommerce-react-demo.x10.mx/wp/",
    consumerKey: "ck_0fbeec789c4e12780070d60ebaccf11245dba721",
    consumerSecret: "cs_ba3eb67352f860a6ca7102fd9aca0b5242fcbd71",
    wpAPI: true,
    version: "wc/v3"
});

export default function Buy() {
    const classes = useStyles()
    const params = useParams()
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useContext(CartContext);

    useEffect(() => {
        fetchProducts();
    }, [params]); 

    let fetchProducts = () => {
        api.get("products?category=" + params.path).then((response) => {
            if (response.status === 200) {
              setProducts(response.data);
            }
        })
    };

    let handleProducts = (product) => {
        product.quantity= 1;

        setCart(prevState => (
            [...prevState, product]
        ));
    }


    return (

        <Grid
            className={classes.root}
          container
        >
        {products.map((product, index) => (
            <ProductCard
            key={index}
            product={product}
            handleProducts={handleProducts}
            />
            ))}
        </Grid>
    )
}
