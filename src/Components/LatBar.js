import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {mainListItems, secondaryListItems} from "./listItems";
import Drawer from "@material-ui/core/Drawer";
import {makeStyles} from "@material-ui/core/styles";

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

export default function LatBar(props){
    const classes = useStyles();
    return(
        <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper, }} >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </div>
        </Drawer>
    );
}