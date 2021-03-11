import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import {BuildTwoTone, EmojiPeople, FlashOnTwoTone, HomeTwoTone, SettingsInputAntennaTwoTone, ExitToAppTwoTone} from "@material-ui/icons";

export const mainListItems = (
    <div>
        <ListItem button component={Link} to="/Dashboard">
            <ListItemIcon>
                <FlashOnTwoTone />
            </ListItemIcon>
            <ListItemText primary="Comunicaciones" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BuildTwoTone  />
            </ListItemIcon>
            <ListItemText primary="Material" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <EmojiPeople />
            </ListItemIcon>
            <ListItemText primary="Personal" />
        </ListItem>
        <ListItem button component={Link} to="/Sensores">
            <ListItemIcon>
                <SettingsInputAntennaTwoTone />
            </ListItemIcon>
            <ListItemText primary="Sensores" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset/>
        <ListItem button component={Link} to="/LibroGu">
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Libro de guardia" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Turnos y servicios" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Reportes" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Notas" />
        </ListItem>
        <ListItem button component={Link} to="/">
            <ListItemIcon>
                <ExitToAppTwoTone />
            </ListItemIcon>
            <ListItemText primary="Salir" />
        </ListItem>
    </div>


);