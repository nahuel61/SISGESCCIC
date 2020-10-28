import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppBar from "@material-ui/core/AppBar";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: 'rgba(73,155,14,1)',
    },
    title: {
        flexGrow: 1,
    }
}));

export default function MainTitleBar(props){
    
    const classes= useStyles();
    return (
        <AppBar position="fixed" className={classes.appBar} >
            <Toolbar>
                <Typography component="h1" variant="h6" color="inherit" align={"center"} noWrap
                            className={classes.title}>
                    Sistema de Gestion - ECR Cdo Op
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}




