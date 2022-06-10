import * as React from "react";
import InputNode from "./InputNode";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import { PortWidget } from "@projectstorm/react-diagrams";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "stretch",
  },
});

class JSCustomNodeWidget2 extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="custom-node2" style={{ zIndex: 999999999 }}>
          <PortWidget
            style={{position: 'absolute', top: '0px', left: '0px'}}
            engine={this.props.engine}
            port={this.props.node.getPort("in")}
          >
            <div className="circle-port" />
          </PortWidget>
          <PortWidget
            style={{position: 'absolute', top: '0px', right: '0px'}}
            engine={this.props.engine}
            port={this.props.node.getPort("out")}
          >
            <div className="circle-port" />
          </PortWidget>
          {/* <div className="custom-node-color" style={{ backgroundColor: this.props.node.color }} /> */}
          <div
            style={{
              left: "0px",
			        top: '10px',
              bottom: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <InputNode property="Props1" top="15" />
            <InputNode property="Props2" top="60" />
            <Accordion style={{position: 'absolute', top: "130px", left: '0px', marginLeft: '0px', paddingLeft: '0px'}}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div></div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(JSCustomNodeWidget2);
