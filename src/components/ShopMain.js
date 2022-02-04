import React, { useEffect, useState, useContext } from 'react';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { createStyles, makeStyles } from '@mui/styles';
import { CartContext } from '../containers/CartContext';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router';

const api = new WooCommerceRestApi({
  url: "https://ecommerce-react-demo.x10.mx/wp/",
  consumerKey: "ck_0fbeec789c4e12780070d60ebaccf11245dba721",
  consumerSecret: "cs_ba3eb67352f860a6ca7102fd9aca0b5242fcbd71",
  wpAPI: true,
  version: "wc/v3"
});

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(() => 
    createStyles({
      root: { 
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        justifyContent: 'center'
      }
    })
)


function ShopMain() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const classes = useStyles()
    const [cart, setCart] = useContext(CartContext);
    const [categories, setCategories] = useState([])
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        fetchCategories();
    }, []);    
    
    let fetchCategories = () => {
        api.get("products/categories").then((response) => {
            if (response.status === 200) {
              setCategories(response.data);
              setLoaded(true);
            }
        })
    };

    React.useEffect(() => {
        setCart(cart)
    }, [])

    let slideshow = []
    let maxSteps = categories.length - 1;
    if(loaded === true) {
      slideshow = categories.filter(el => el);
    }

  return (
    <>
    {loaded === true ? (
      <Box sx={{ width: '100vw', flexGrow: 1, marginTop: -15 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '10vh',
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{categories[activeStep].name}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {slideshow.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
              onClick={() => navigate(`${step.id}`)}
                component="img"
                sx={{
                  display: 'block',
                  overflow: 'hidden',
                  width: '100vw',
                }}
                /* src={step.images[0].src}
                alt={step.images[0].alt} */
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    ) : (
      <Box className={classes.root} sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    )}
    </>
  );
}

export default ShopMain;
