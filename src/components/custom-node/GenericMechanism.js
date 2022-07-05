import * as React from "react";
import { withStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import NodeSelection from "./NodeSelection";

const styles = () => ({
  root: {
    border: 'solid 0.0625rem',
    borderRadius: '50%',
    width: '10rem',
    height: '10rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',

    '& img': {
      marginBottom: '0.25rem',
    },

    '& p': {
      fontWeight: 500,
      fontSize: '0.8125rem',
      lineHeight: '1.25rem',
      letterSpacing: '-0.005rem',
      margin: 0,
    },
  },
});

class GenericMechanism extends React.Component {
  render() {
    const { classes, node, node: { options }, engine } = this.props;

    return (
      <Box position='relative'>
        {options.selected && (
          <NodeSelection node={node} engine={engine} text={"Show properties"} />
        )}

        <Box
          className={classes.root}
          style={{
            background: options.backgroundColor,
            borderColor: options.borderColor,
            boxShadow: options.boxShadow,
          }}
        >
          <img src={options.icon} alt="mechanism" />
          <Typography component="p" style={{ color: options.textColor }}>
            {options.name}
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default withStyles(styles)(GenericMechanism);
