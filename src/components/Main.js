import React from 'react';
import MechanismNode from '../model/nodes/mechanism/MechanismNode';
import ModelInterpreter from '../model/Interpreter';

import { CanvasWidget } from '@projectstorm/react-canvas-core';
import createEngine, { DiagramModel, DefaultNodeModel, DefaultLinkModel } from '@projectstorm/react-diagrams';
import { JSCustomNodeModel } from './custom-node/JSCustomNodeModel';
import { JSCustomNodeFactory } from './custom-node/JSCustomNodeFactory';

// import mockModel from '../resources/model.dot';
const mockModel = require('../resources/model').mockModel;

export default class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
	const interpreter = new ModelInterpreter(mockModel);

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
		color: 'rgb(0,192,255)',
        pnlClass: 'ProcessingMechanism',
		shape: 'circle'
	});

	// var node5 = new JSCustomNodeModel({
	// 	name: 'Node 5',
	// 	color: 'rgb(0,192,255)',
    //     pnlClass: 'ProcessingMechanism',
	// 	shape: 'hexagon'
	// });

	node4.setPosition(700,200);
	// node5.setPosition(550,500);

	// node1.setPosition(100, 100);
	// let port1 = node1.addOutPort('Out');

	//3-B) create another default node
	// var node2 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
	// node2.addInPort('in');
	// node2.setPosition(400, 100);

	// var node3 = new DefaultNodeModel('Node 2', 'rgb(192,255,0)');
	// node3.addInPort('in');
	// node3.setPosition(200, 400);

	// link the ports
	// let link1 = port1.link(port2);
	// link1.getOptions().testName = 'Test';
	// link1.addLabel('Hello World!');
    // const link1 = new DefaultLinkModel();
    // link1.setSourcePort(node1.getPort('out'));
    // link1.setTargetPort(node2.getPort('in'));
	// const link2 = new DefaultLinkModel();
    // link2.setSourcePort(node1.getPort('out'));
    // link2.setTargetPort(node3.getPort('in'));

	//4) add the models to the root graph
	// model.addAll(node1, node2, node3, link1, link2, node4, node5);
	model.addAll(node4);

	//5) load model into engine
	engine.setModel(model);

    return (
        <div className='main'>
            <CanvasWidget className="diagram-container" engine={engine} />
        </div>
    );
  }
}