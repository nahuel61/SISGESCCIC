import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {AppBar,Toolbar,IconButton, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    menuButton:{
        marginRigth: '16px'
    },
    title:{
        flexGrow:1
    },
    imagen:{
        borderRadius: '50%'
    }
}));

function Navbar(props) {
    const classes= useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant={"h6"} className={classes.title}>
                        Hola soy el proyecto del tuty pero mas lindo
                    </Typography>
                    <IconButton color={"inherit"}>
                        <img src={require('../Static/img/Horus_standing_head.jpg')} width={40} height={40} className={classes.imagen}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

        </div>
    );

}

export default Navbar;