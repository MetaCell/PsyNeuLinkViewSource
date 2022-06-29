import React from 'react';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import createEngine, { DiagramModel, DefaultNodeModel, DefaultLinkModel } from '@projectstorm/react-diagrams';
import { JSCustomNodeModel } from './custom-node/JSCustomNodeModel';
import { JSCustomNodeFactory } from './custom-node/JSCustomNodeFactory';
// import '../App.css';

export default class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
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
		name: 'Node 4',
		color: 'red',
    pnlClass: 'ProcessingMechanism',
		shape: 'circle'
	});
	var node5 = new JSCustomNodeModel({
		name: 'Node 5',
		color: 'red',
    pnlClass: 'ProcessingMechanism',
		shape: 'circle'
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
        <div className='main'>
            <CanvasWidget className="diagram-container" engine={engine} />
        </div>
    );
  }
}