import React from 'react';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import createEngine, { DiagramModel, DefaultNodeModel, DefaultLinkModel } from '@projectstorm/react-diagrams';
import { JSCustomNodeModel } from './custom-node/JSCustomNodeModel';
import { JSCustomNodeFactory } from './custom-node/JSCustomNodeFactory';
import { withStyles } from '@mui/styles';
import BG from "../assets/svg/bg-dotted.svg";
import mechanismGreen from '../assets/svg/mechanism-green.svg';
import mechanismYellow from '../assets/svg/mechanism-yellow.svg';
// import '../App.css';


const styles = () => ({
  root: {
    position: 'absolute',
    top: '3.5rem',
    left: 0,
    height: 'calc(100% - 3.5rem)',
    width: '100%',
    backgroundRepeat: 'repeat',
    backgroundColor: '#fff',
    backgroundImage: `url(${BG})`
  },

  diagramContainer: {
    width: '100%',
    height: '100%',
  },
});

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    //1) setup the diagram engine
	var engine = createEngine();
    engine.getNodeFactories().registerFactory(new JSCustomNodeFactory());


	//2) setup the diagram model
	var model = new DiagramModel();

	//3-A) create a default node
	// var node1 = new JSCustomNodeModel({
	// 	name: 'Node 1',
	// 	color: 'rgb(0,192,255)',
    //     pnlClass: 'ProcessingMechanism',
	// 	shape: 'default'
	// });

	var node4 = new JSCustomNodeModel({
		name: 'Mechanism Name',
    backgroundColor: '#D4F4D4',
    textColor: '#669D66',
    borderColor: 'rgba(102, 157, 102, 0.2)',
    boxShadow: '0 0.25rem 0.625rem -0.25rem rgba(102, 157, 102, 0.3)',
    icon: mechanismGreen,
    pnlClass: 'ProcessingMechanism',
    shape: 'circle',
    selected: true
	});
	var node5 = new JSCustomNodeModel({
		name: 'Mechanism Name',
		backgroundColor: '#F4E9D4',
    textColor: '#9D8B66',
    borderColor: 'rgba(157, 139, 102, 0.2)',
    boxShadow: '0 0.25rem 0.625rem -0.25rem rgba(157, 139, 102, 0.3)',
    icon: mechanismYellow,
    pnlClass: 'ProcessingMechanism',
    shape: 'default',
    selected: false
	});
	node4.setPosition(700,200);
	node5.setPosition(900,200);
	// const link1 = new DefaultLinkModel();
	// link1.setSourcePort(node4.getPort("out"));
	// link1.setTargetPort(node5.getPort("in"));


	// let port1 = node4.getPort("out");
	// let port2 = node5.getPort("in");

	// link the ports
	// port1.link(port2);

	model.addAll(node4, node5);

	//5) load model into engine
	engine.setModel(model);

    return (
      <div className={classes.root}>
        <CanvasWidget className={classes.diagramContainer} engine={engine} />
      </div>
    );
  }
}


export default withStyles(styles)(Main);