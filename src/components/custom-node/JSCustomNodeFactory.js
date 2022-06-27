import * as React from 'react';
import { JSCustomNodeModel } from './JSCustomNodeModel';
import JSCustomNodeWidget from './JSCustomNodeWidget';
import GenericMechanism from './GenericMechanism';
import JSCustomNodeWidget3 from './JSCustomNodeWidget3';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';

export class JSCustomNodeFactory extends AbstractReactFactory {
	constructor() {
		super('js-custom-node');
	}

	generateModel(event) {
		return new JSCustomNodeModel();
	}

	generateReactWidget(event) {
		switch (event?.model?.options?.shape) {
			case 'default': {
				return <JSCustomNodeWidget engine={this.engine} node={event.model} />;
			}
			case 'circle': {
				return <GenericMechanism engine={this.engine} node={event.model} />;
			}
			case 'hexagon': {
				return <JSCustomNodeWidget3 engine={this.engine} node={event.model} />;
			}
			default: {
				return <JSCustomNodeWidget engine={this.engine} node={event.model} />;
			}
		}
	}
}