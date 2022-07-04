import * as React from "react";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import NodeSelection from "./NodeSelection";

const styles = () => ({
  root: {
    position: 'relative',
    width: '18rem',
    height: '22.6875rem',
    borderRadius: '0.875rem',
    border: 'solid 0.0625rem',
    padding: '0.5rem',

    '& p': {
      fontWeight: '500',
      fontSize: '0.8125rem',
      lineHeight: '1.25rem',
      letterSpacing: '-0.005rem',
      margin: 0,
    },



    '& label': {
      display: 'block',
      fontWeight: 400,
      fontSize: '0.625rem',
      lineHeight: '0.625rem',
      letterSpacing: '-0.005rem',
      color: '#76787D',
      textTransform: 'uppercase'
    },
  },

  header: {
    marginBottom: '0.25rem',
    padding: '0.75rem 0',

    '& img': {
      display: 'block',
      margin: '0 auto 0.25rem',
    },

    '& p': {
      textAlign: 'center',
    },
  },

  block: {
  },

  card: {
    padding: '0.625rem 0.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    display: 'flex',
    alignItems: 'center',

    '&:first-child': {
      borderTopLeftRadius: '0.625rem',
      borderTopRightRadius: '0.625rem',
    },

    '&:last-child': {
      borderBottomLeftRadius: '0.625rem',
      borderBottomRightRadius: '0.625rem',
    },

    '&:not(:last-child)': {
      marginBottom: '0.0625rem'
    },
  },

  bullet: {
    width: '1rem',
    height: '1rem',
    border: 'solid 0.0625rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mr8: {
    marginRight: '0.5rem',
  },

  ml8: {
    marginLeft: '0.5rem',
  },

  cardSecondary: {
    background: '#FFFFFF',
    padding: '0.5rem',
    width: 'calc((100% - 0.125rem) / 3)',

    '&:first-child': {
      borderTopLeftRadius: '0.625rem',
    },

    '&:nth-child(3)': {
      borderTopRightRadius: '0.625rem',
    },

    '&:last-child': {
      width: '100%',
      borderBottomLeftRadius: '0.625rem',
      borderBottomRightRadius: '0.625rem',
    },
  },

  dot: {
    width: '0.375rem',
    height: '0.375rem',
    borderRadius: '50%',
  },

  separator: {
    width: '0.125rem',
    height: '1rem',
    borderRadius: '1.25rem',
    margin: '0.25rem auto'
  },
});

class JSCustomNodeWidget extends React.Component {
  render() {
    const { classes, node, node: { options }, engine } = this.props;
    return (
      <>
        {options.selected && (
          <NodeSelection node={node} engine={engine} text={"Hide properties"} />
        )}
        <Box
          className={classes.root}
          style={{
            background: options.backgroundColor,
            borderColor: options.borderColor,
            boxShadow: options.boxShadow,
          }}
        >
          <Box className={classes.header}>
            <img src={options.icon} alt="mechanism" />
            <Typography component="p" style={{ color: options.textColor }}>
              {options.name}
            </Typography>
          </Box>

          <Box className={classes.block}>
            <Box className={classes.card}>
              <Box
                className={`${classes.bullet} ${classes.mr8}`}
                style={{
                  background: options.backgroundColor,
                  borderColor: options.borderColor,
                }}
              >
                <Box
                  className={classes.dot}
                  style={{
                    background: options.borderColor,
                  }}
                />
              </Box>
              <Typography>Input from Frame 1</Typography>
            </Box>
            <Box className={classes.card}>
              <Box
                className={`${classes.bullet} ${classes.mr8}`}
                style={{
                  background: options.backgroundColor,
                  borderColor: options.borderColor,
                }}
              >
                <Box
                  className={classes.dot}
                  style={{
                    background: options.borderColor,
                  }}
                />
              </Box>
              <Typography>Input from Frame 1</Typography>
            </Box>
          </Box>

          <Box
            className={classes.separator}
            style={{
              background: options.borderColor,
            }}
          />

          <Box className={classes.block}>
            <Box display="flex" flexWrap="wrap" gap="0.0625rem">
              <Box className={classes.cardSecondary}>
                <Typography component="label">Context</Typography>
                <Typography>12</Typography>
              </Box>

              <Box className={classes.cardSecondary}>
                <Typography component="label">Size</Typography>
                <Typography>8.90</Typography>
              </Box>

              <Box className={classes.cardSecondary}>
                <Typography component="label">Prefs</Typography>
                <Typography>44</Typography>
              </Box>

              <Box className={classes.cardSecondary}>
                <Typography component="label">Function</Typography>
                <Typography>function=pnl.Logistic(gain=1.0, bias=-4)</Typography>
              </Box>
            </Box>

          </Box>

          <Box
            className={classes.separator}
            style={{
              background: options.borderColor,
            }}
          />

          <Box className={classes.block}>
            <Box className={classes.card} justifyContent="flex-end">
              <Typography>Output to Frame 1</Typography>

              <Box
                className={`${classes.bullet} ${classes.ml8}`}
                style={{
                  background: options.backgroundColor,
                  borderColor: options.borderColor,
                }}
              >
                <Box
                  className={classes.dot}
                  style={{
                    background: options.borderColor,
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
}

export default withStyles(styles)(JSCustomNodeWidget);
