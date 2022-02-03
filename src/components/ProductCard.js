import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useContext } from 'react';
import { CartContext } from '../containers/CartContext';
import { useNavigate } from 'react-router';


export default function ProductCard({product, handleProducts}) {

  const [cart, setCart] = useContext(CartContext)

  const navigate = useNavigate()

    let check = false
    cart.map(el => {
      if(el.id === product.id){
        check = true
        return
      }
    })

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
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={product.name} />
      <CardMedia
        component="img"
        height="194"
        image={product.images[0].src}
        alt="Paella dish"
      />
      <CardActions disableSpacing >
        <CardContent
          dangerouslySetInnerHTML={{ __html: `${product.price} €` }}
        ></CardContent>
        <Button
            onClick={() => navigate(`/shop/details/${product.id}`)}
            sx={{ my: 2, display: "block" }}
          >
            Details
          </Button>
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
