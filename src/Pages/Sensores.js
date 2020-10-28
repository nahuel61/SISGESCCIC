import React from "react";
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import 'fontsource-roboto';
import '../Static/css/Dashboard.css';
import Cards from '../Components/Cards';
import MainTitleBar from "../Components/MainTitleBar";
import LatBar from "../Components/LatBar";
import Container from "@material-ui/core/Container";
const drawerWidth = 240;
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

function Sensores(props) {
    const classes= useStyles();
    return (
        <div className={classes.root}>
            <MainTitleBar />
            <LatBar/>

            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>

                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="HUMO" texto="692"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="COMBUSTIBLE" texto="111,092"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="LUZ" texto="2,504 horas"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="ENERGIA" texto="14.2%"/>
                    </Grid>
                </Grid>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>

            </Grid>
                </Container>
            </main>
        </div>

    );
}

export default Sensores;
