import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import NAV from "../assets/images/sidebar/nav.svg";
import MECHANISM from "../assets/images/sidebar/mechanism.svg";
import PROJECTION from "../assets/images/sidebar/projection.svg";
import COMPOSITION from "../assets/images/sidebar/composition.svg";
import EXPAND from "../assets/images/sidebar/expand.svg";
import COLLAPSE from "../assets/images/sidebar/collapse.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '9.875rem',
    padding: '0.5rem',
    background: '#FFFFFF',
    borderRight: '0.0625rem solid #D5D5D5',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all ease-in-out .3s',

    '&.shrink': {
      width: '3.5rem',
      '& .MuiListItemText-primary': {
        fontSize: 0,
      },
    },

    '& .MuiList-root': {
      '&:not(:last-child)': {
        flexGrow: 1,
      },
    },

    '& .MuiListItemButton-root': {
      padding: 0,
      borderRadius: '0.5rem',

      '&:not(:last-child)': {
        marginBottom: '0.5rem',
      },

      '&.Mui-selected': {
        backgroundColor: '#ECECEC',
        '&:hover': {
          backgroundColor: '#ECECEC',
        },
      },

    },

    '& .MuiListItemIcon-root': {
      minWidth: '0.0625rem',
    },

    '& .MuiListItemText-root': {
      margin: 0,
    },

    '& .MuiListItemText-primary': {
      fontWeight: '400',
      fontSize: '0.875rem',
      letterSpacing: '-0.001em',
      lineHeight: '1.5rem',
      color: '#292929',
      transition: 'all ease-in-out .3s'
    },
  },
}));

const Sidebar = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const sidebarClass = open ? classes.root : `${classes.root} shrink`;
  return (
    <Box className={sidebarClass}>
      <List disablePadding component="nav">
        <ListItemButton selected>
          <ListItemIcon>
            <img src={NAV} alt="Navigation" />
          </ListItemIcon>
          <ListItemText primary="Navigation" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <img src={MECHANISM} alt="Mechanisms" />
          </ListItemIcon>
          <ListItemText primary="Mechanisms" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <img src={PROJECTION} alt="Projections" />
          </ListItemIcon>
          <ListItemText primary="Projections" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <img src={COMPOSITION} alt="Compositions" />
          </ListItemIcon>
          <ListItemText primary="Compositions" />
        </ListItemButton>
      </List>


      <List disablePadding component="nav">
        <ListItemButton onClick={() => setOpen((prevState) =>!prevState )}>
          <ListItemIcon>
            {open ? <img src={COLLAPSE} alt="COLLAPSE" /> : <img src={EXPAND} alt="EXPAND" />}
          </ListItemIcon>
          <ListItemText primary="Collapse" />
        </ListItemButton>
      </List>
    </Box>
  )
};

export default Sidebar;