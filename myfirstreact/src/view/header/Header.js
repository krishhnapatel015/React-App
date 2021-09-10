import React from 'react';
import './Header.css';
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';


// import logoUrl from '../../assets/logo.svg';


const WhiteCreateIcon = withStyles({
    root: {
        color: "white"
    }
})(FastfoodIcon);

const Header = (props) => (

    <Grid container className="header">

        <Grid item lg={4}>
            <>

                <div className="foodLogo">
                    <WhiteCreateIcon />
                    <Typography variant='h6' component='h6' style={{ color: 'white', marginLeft: '10px' }}>    Food's Restaurant  </Typography>


                </div>


                {/* <img src={logoUrl} alt="Tesla" /> */}
            </>
        </Grid>
        <Grid item lg={4}>

        </Grid>
        <Grid item lg={4}>

            <Badge color="secondary" badgeContent={props.count} style={{ position: 'absolute', right: '4%' }}>
                <ShoppingCartIcon />
            </Badge>



        </Grid>
    </Grid>



)
export default Header;