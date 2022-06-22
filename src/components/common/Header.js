import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Breadcrumbs, Button, Chip, Link, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import LOGO from "../../assets/images/logo.svg";
import FOLDER from "../../assets/images/folder.svg";
import SYNC from "../../assets/images/sync.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    border: '0.0625rem solid #D5D5D5',
    height: '3.5rem',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center'
  },

  leftSection: {
    display: 'flex',
    alignItems: 'center',
    width: '20.625rem',
    '& img': {
      display: 'block',
      marginRight: '1rem'
    },

    '& .MuiChip-root': {
      marginRight: '0.75rem'
    },
  },

  middleSection: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  rightSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '20.625rem',
  },
}));


const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.leftSection}>
        <img src={LOGO} alt="Logo" />

        <Chip label="PsyNeuLink UI" />

        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            <img src={FOLDER} alt="Folder" />
            Desktop
          </Link>
          <Typography color="text.primary">Model 1</Typography>
        </Breadcrumbs>
      </Box>

      <Box className={classes.middleSection}>
        <List className="customSwitch" component="nav">
          <ListItemButton selected>
            <ListItemText primary="Construct" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Monitor" />
          </ListItemButton>
        </List>
      </Box>

      <Box className={classes.rightSection}>
        <Button variant="text"><img src={SYNC} alt="Synching" />Synching...</Button>
        <Button disableElevation variant="contained" color='secondary'>Share</Button>
        <Button disableElevation variant="contained">Run composition</Button>
      </Box>
    </Box>
  )
};

export default Header;