import React from 'react';
 import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Button, Chip, List, ListItemButton, Typography } from '@mui/material';
import PLAY from "../../assets/svg/play.svg";
import vars from "../../assets/styles/variables";

const { textWhite, listSelectedTextColor } = vars;

const useStyles = makeStyles((theme) => ({
  root: {
    background: textWhite,
    height: '3.5rem',
    padding: '0 0.625rem 0 1.5rem',
    display: 'flex',
    alignItems: 'center',
    '& .MuiTypography-root': {
    fontWeight: 600,
    fontSize: '1.25rem',
    lineHeight: '1.5rem',
    color: listSelectedTextColor,
    }
  },

  leftSection: {
    width: '20.625rem',
  },

  middleSection: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  rightSection: {
    width: '20.625rem',
    display: 'flex',
    justifyContent: 'flex-end'
  },
}))

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.leftSection}>
        <Typography>New visualization</Typography>
      </Box>
      <Box className={classes.middleSection}>
        <List className="customSwitch" component="nav">
          <ListItemButton disableRipple selected>
            <Typography>Construct</Typography>
          </ListItemButton>
          <ListItemButton disableRipple disabled>
            <Typography>Visualize</Typography>
            <Chip label="SOON" />
          </ListItemButton>
        </List>
      </Box>
      <Box className={classes.rightSection}>
        <Button disabled disableElevation variant="contained">
          <img src={PLAY} alt="Run-selection" />
          Run selection
          <Chip label="SOON" color='primary' />
        </Button>
      </Box>
    </Box>
  );
};

export default Header;