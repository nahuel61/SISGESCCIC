import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {mainListItems, secondaryListItems} from "./ListItems";
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core/styles";
import EventText from "../Components/EventText";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export default function BottomBar(props){
    const classes = useStyles();
    return(
        <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper, }} >

            <div className={classes.drawerContainer}>
                <Divider />

                <Divider />

            </div>
        </Drawer>
    );
}