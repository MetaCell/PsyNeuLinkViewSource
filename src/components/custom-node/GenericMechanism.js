import * as React from "react";
import InputNode from "./InputNode";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { PortWidget } from "@projectstorm/react-diagrams";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    display: "flex",
    alignItems: "stretch",
  },
});

class GenericMechanism extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <div className="custom-node2" style={{ zIndex: 999999999, background: "#D4F4D4" }}>
          <div>Mechanism</div>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(GenericMechanism);
