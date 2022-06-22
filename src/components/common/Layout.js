import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import Sidebar from '../Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 3.5rem)',
    display: 'flex',
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Sidebar />
    </Box>
  )
};

export default Layout;