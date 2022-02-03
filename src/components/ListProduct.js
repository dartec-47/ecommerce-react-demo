import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


export default function ListProduct({product, removeFromCart, addQuantity, removeQuantity}) {
  const [dense] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1, }}>
        <Grid item xs={12} md={12}>
            <List dense={dense}>
                <ListItem
                  secondaryAction={
                     <>
                    <IconButton onClick={()=>removeQuantity(product)}>
                        <RemoveIcon />
                    </IconButton>
                    <IconButton onClick={() => addQuantity(product)}>
                        <AddIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete" onClick={()=>removeFromCart(product)}>
                      <DeleteIcon />
                    </IconButton>
                     </> 
                  }
                >
                </ListItem>
                <ListItemAvatar>
                  <Avatar>
                  <Avatar alt={product.images[0].alt} src={product.images[0].src} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={product.name}
                  secondary={product.quantity + 'x' + product.price + ' € = ' + (+product.quantity * +product.price) + ' €' }
                  
                />
            </List>
        </Grid>
    </Box>
  );
}
