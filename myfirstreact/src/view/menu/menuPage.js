import React from 'react';
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Grid from "@material-ui/core/Grid";
import RecipeReviewCard from '../components/foodItemCard';
import hamburger from '../../assets/hamburger.jpg';
import fries from '../../assets/fries.jpg';
import coke from '../../assets/coke.jpg';


const MenuPage = (props) => {

  
  return (

    <Grid container style={{ marginTop: '5%' }}>

      <Grid item lg={2}>
      </Grid>
      <Grid item lg={8}>
        <Grid container spacing={3}>
          <Grid item lg={4} >
            <RecipeReviewCard 
            cartCount = {props.cartCount}
            setCartCount={props.setCartCount}
            image={hamburger}
            title={'Hamburger'}
            price={200}
            />
          </Grid>
          <Grid item lg={4} >
            <RecipeReviewCard
              cartCount = {props.cartCount}
            setCartCount={props.setCartCount}
                  image={fries}
                  title={'Fries'}
                  price={100} 
                  />
          </Grid>
          <Grid item lg={4} >
            <RecipeReviewCard
              cartCount = {props.cartCount}
            setCartCount={props.setCartCount}
            image={coke}
            title={'Coke'}
            price={50}  />
          </Grid>

        </Grid>
      </Grid>
      <Grid item lg={2}>
      </Grid>

    </Grid>



  )
}
export default MenuPage;