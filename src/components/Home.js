import React, { useEffect, useState } from "react";
import { Button, Grid, Skeleton } from "@mui/material";
import { api } from "../assets/api";
import CardProducts from "./CardProducts";
import Loading from "./Skeleton";
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  let fetchProducts = () => {
    api.get("products").then((response) => {
      if (response.status === 200) {
        setProducts(response.data);
        setLoaded(true);
        }
        });
      }

  let skeletonLoading = (n) => {
    let productsSkeleton = [];
    for(let i = 0; i < n; i++) {
        productsSkeleton.push(i)
    }
    return (
      productsSkeleton.map((product, index) => (
        <Grid item xs={4}>
          <Loading key={index}/>
        </Grid>
      ))
      )
 
  }

  return (
    <Grid container spacing={1} justifyContent="center">
      <Grid item xs={10}>
        <Grid container spacing={2}>
          {loaded === false ? (
               skeletonLoading(10)
          ) : (
            products.map((product, index) => (
              <Grid key={index} item xs={4} >
                <CardProducts product={product} />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}
