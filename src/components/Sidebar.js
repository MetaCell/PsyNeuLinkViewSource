import React from 'react';
import { makeStyles } from '@mui/styles';
import CURSOR from "../assets/svg/cursor.svg";
import MOVE from "../assets/svg/move.svg";
import FULLSCREEN from "../assets/svg/fullscreen.svg";
import ICON from "../assets/svg/icon.svg";
import NODE from "../assets/svg/node.svg";
import { Box } from '@mui/system';
import { Divider, List, ListItemButton, ListItemIcon } from '@mui/material';
import vars from "../assets/styles/variables";

const { textWhite, dividerColor } = vars;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '4rem',
    background: textWhite,
    boxShadow: '0 0 3.75rem rgba(0, 0, 0, 0.1), 0 0.5rem 2.5rem -0.625rem rgba(0, 0, 0, 0.1)',
    borderRadius: '2rem',
    position: 'fixed',
    left: '1rem',
    top: '50%',
    transform: 'translateY(-50%)',

    '&.right': {
      left: 'auto',
      right: '1rem',
    },

    '& .MuiList-root': {
      padding: '0.75rem',
    },
  },

  node: {
    margin: '0.25rem 0',
    '& .MuiDivider-root': {
      borderColor: dividerColor,
      width: 'calc(100% - 1.5rem)',
      margin: '0 auto',
      border: 'none',
      borderTop: '0.0625rem solid'
    },

    '& img': {
      display: 'block',
       margin: '1rem 0',
    },
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Box className={`${classes.root} left`}>
      <List disablePadding component="nav">
        <ListItemButton selected>
          <ListItemIcon>
            <img src={CURSOR} alt="icon" />
          </ListItemIcon>
        </ListItemButton>

         <ListItemButton>
          <ListItemIcon>
            <img src={MOVE} alt="icon" />
          </ListItemIcon>
        </ListItemButton>
      </List>

      <Box className={classes.node}>
        <Divider />
        <img src={NODE} alt="Node" />
        <Divider />
      </Box>

      <List disablePadding component="nav">
        <ListItemButton disabled>
          <ListItemIcon>
            <img src={ICON} alt="icon" />
          </ListItemIcon>
        </ListItemButton>

         <ListItemButton>
          <ListItemIcon>
            <img src={FULLSCREEN} alt="icon" />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  )
};

export default Sidebar;