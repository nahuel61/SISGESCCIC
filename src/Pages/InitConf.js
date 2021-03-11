import React from "react";
import { Link } from 'react-router-dom';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {HomeTwoTone} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import MainTitleBar from "../Components/MainTitleBar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },

    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function InitConf(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <MainTitleBar/>

            <div className={classes.container}>
                <h1>Pagina de Configuracion Inicial del Sistema</h1>
            <ListItem button component={Link} to="/Dashboard">
                <ListItemIcon>
                    <HomeTwoTone />
                </ListItemIcon>
                <ListItemText primary="Aceptar y continuar" />
            </ListItem>
            </div>
        </div>
    );
}