import { SettingsTwoTone } from '@mui/icons-material'
import { Button, List, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../containers/CartContext'
import ListProduct from '../ListProduct'

export default function SideCart({handleDrawerClose}) {
    const [cart, setCart] = useContext(CartContext)
    const [tot, setTot] = useState(0)


    let arr = cart.map(el => el.price)
    let sum = 0
    if (arr.length > 0) {
        sum = arr.reduce((initialValue, currentValue) => initialValue + currentValue)
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
            <List>
                {cart.map((product, index) => 
                    <ListProduct key={index} product={product} removeFromCart={removeFromCart} addQuantity={addQuantity} removeQuantity={removeQuantity}/> )}            
            </List>
            <Typography>
                Tot: {tot + ' €'}
            </Typography>
            <Button component={Link} to={'/checkout'}>Checkout</Button>
        </>
    )
}
