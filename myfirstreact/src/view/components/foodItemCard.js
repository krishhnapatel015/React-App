import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard(props) {


    const { cartCount ,setCartCount} = props;



    const classes = useStyles();
    const [itemCount, setItemCount] = React.useState(0);
    const [cost, setCost] = React.useState(0);
    const [buttonColor, setButtonColor] = React.useState('disabled');
    const [clear, setClear] = React.useState(true);




    const handleAddClick = () => {
        setClear(false);
        setButtonColor('secondary')
        setItemCount(itemCount + 1);
        setCost(cost + props.price);
        if(itemCount + 1 === 1)
        {
 
            setCartCount(cartCount+1);
        }
    };

    const handleRemoveClick = () => {


        if (itemCount > 0) {
            setItemCount(itemCount - 1);
            setCost(cost - props.price);
            if(itemCount - 1 === 0)
            {
                setClear(true);
                setButtonColor('disabled')
                setCartCount(cartCount-1);

            }
        }
       


    };
    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={props.image}
                title={props.title}
            />
            <CardContent>
                <Typography variant='h6' component='h6' style={{ display: 'flex' }}>
                    {props.title}
                </Typography>
                <Typography variant='h7' component='h7' style={{ display: 'flex' }}>
                    Price : {props.price}
                </Typography>

                {clear ? (<></>) : (<>  <Typography variant='h7' component='h7' style={{ display: 'flex' }}>
                    Total : {itemCount}
                </Typography>
                    <Typography variant='h7' component='h7' style={{ display: 'flex' }}>
                        Cost (INR): {cost}
                    </Typography></>)}

            </CardContent>
            <CardActions disableSpacing style={clear ? {marginTop : '43px'} : null}>
                <Button variant="contained" color="primary" onClick={handleAddClick}>
                    <AddIcon />
                </Button>


                <Button variant="contained" color={buttonColor} onClick={handleRemoveClick} style={{ marginLeft: '5px' }}>
                    <RemoveIcon />
                </Button>

            </CardActions>
        </Card>
    );
}