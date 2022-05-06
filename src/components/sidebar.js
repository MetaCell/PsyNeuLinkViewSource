import * as React from 'react'
import {Classes, Icon} from '@blueprintjs/core'
import '../css/sidebar.css'
import {Resizable} from "re-resizable"
import {connect} from "react-redux";
import {DropTarget} from 'react-dnd';
import {ItemTypes} from './constants';
import DraggableTreeNode from "./tree-node";
import {Select, List, Typography} from "antd";
import {CHANGE_VISUALIZATION} from '../state/core/actionTypes';
import {getProcessingMechanismParams} from "../utility/functions";
import {addComponent} from "../services/rpcService";

const mapStateToProps = ({core}) => {
    return {
        activeView: core.activeView,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeVisualization: () => dispatch({type: CHANGE_VISUALIZATION}),
    }
}

const {Text} = Typography;

const style = {
    overflowY: "auto",
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
};

// DnD Spec
const PlotSpec = {
    drop() {
    }
}

// DnD DropTarget - collect
let collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
}


class SidebarSelect extends React.Component {
    components = ['Mechanisms', 'Projections'];

    constructor(props) {
        super(props);
        this.bindThisToFunctions = this.bindThisToFunctions.bind(this);
        this.bindThisToFunctions();
    }

    bindThisToFunctions() {
        var _ = this;
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
    }

    onBlur() {
    }

    onFocus() {
    }

    onSearch(val) {
    }

    render() {
        return (
            <Select
                showSearch
                style={{width: this.props.size.width}}
                placeholder="Select a component type"
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onSearch={this.onSearch}
                bordered={false}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {this.components}
            </Select>)
    }
}


const structureDataOld = [
    {
        categoryName: 'Control',
        components: [
            {
                id: 0,
                label: 'Control Mechanism',
                // label:
                //   <div>
                //       <DraggableTreeNode
                //         id={0}
                //         label={'Control Mechanism'}/>
                //     </div>,
                icon: 'square'
            },
            {
                id: 1,
                label: 'Optimization Control Mechanism',
                icon: 'square'
            },
            {
                id: 2,
                label: 'Control Projection',
                icon: 'arrow-bottom-right'
            },
        ]
    },
    {
        categoryName: 'Gating',
        components: [
            {
                id: 3,
                label: 'Gating Mechanism',
                icon: 'square'
            },
            {
                id: 4,
                label: 'Gating Projection',
                icon: 'arrow-bottom-right'
            }
        ]
    },
    {
        categoryName: 'Learning',
        components: [
            {
                id: 5,
                label: 'Learning Mechanism',
                icon: 'square'
            },
            {
                id: 6,
                label: 'Learning Projection',
                icon: 'arrow-bottom-right'
            }
        ]
    },
    {
        categoryName: 'Processing',
        components: [
            {
                id: 7,
                label: 'Integrator Mechanism',
                icon: 'square'
            },
            {
                id: 8,
                label: 'Objective Mechanism',
                icon: 'square'
            },
            {
                id: 9,
                label: 'Processing Mechanism',
                icon: 'square'
            },
            {
                id: 10,
                label: 'Transfer Mechanism',
                icon: 'square'
            },
            {
                id: 11,
                label: 'Mapping Projection',
                icon: 'arrow-bottom-right'
            },
            {
                id: 12,
                label: 'Pathway Projection',
                icon: 'arrow-bottom-right'
            },
        ]
    },
];


const structureDataNew = [
    {
        categoryName: 'Modulatory',
        components: [

            {
                id: 0,
                label: 'Control Mechanism',
                icon: 'square'
            },
            {
                id: 1,
                label: 'Optimization Control Mechanism',
                icon: 'square'
            },
            {
                id: 2,
                label: 'Control Projection',
                icon: 'arrow-bottom-right'
            },

            {
                id: 3,
                label: 'Gating Mechanism',
                icon: 'square'
            },
            {
                id: 4,
                label: 'Gating Projection',
                icon: 'arrow-bottom-right'
            },
            {
                id: 5,
                label: 'Learning Mechanism',
                icon: 'square'
            },
            {
                id: 6,
                label: 'Learning Projection',
                icon: 'arrow-bottom-right'
            }
        ]
    },
    {
        categoryName: 'Processing',
        components: [
            {
                id: 7,
                label: 'Integrator Mechanism',
                icon: 'square'
            },
            {
                id: 8,
                label: 'Objective Mechanism',
                icon: 'square'
            },
            {
                id: 9,
                label: 'Processing Mechanism',
                icon: 'square',
                onClick: (callback) => addComponent(getProcessingMechanismParams("ProcessingMechanism", "test", "Linear", 2), callback)
            },
            {
                id: 10,
                label: 'Transfer Mechanism',
                icon: 'square'
            },
            {
                id: 11,
                label: 'Mapping Projection',
                icon: 'arrow-bottom-right'
            },
            {
                id: 12,
                label: 'Pathway Projection',
                icon: 'arrow-bottom-right'
            },
        ]
    },
    {
        categoryName: 'Options',
        components: [
            {
                id: 13,
                label: 'Change visualization',
                icon: 'expand-all'
            }
        ]
    },
];


const plottingData = [
    {
        categoryName: 'Plots',
        components: [
            {
                id: 13,
                label:
                    <div className={'linePlotListItem'}>
                        <DraggableTreeNode
                            id={13}
                            label={'Line Plot'}/>
                    </div>,
                icon: 'timeline-line-chart'
            }

        ]
    }
];

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nodes: PLOTVIEW_NODES,
            class: props.className !== undefined ? `${Classes.ELEVATION_0} ${props.className}` : Classes.ELEVATION_0
        }

        this.sidebarHandler = this.sidebarHandler.bind(this);
    }

    componentDidUpdate() {
    }

    addComponentCallback(err) {
        if (err) {
            console.error(err)
        } else {
            this.props.setStateFromRpcClient()
        }
    }

    sidebarHandler(component) {
        if (component.onClick) {
            component.onClick((err) => this.addComponentCallback(err))
        } else {
            switch (component.id) {
                case 13: {
                    this.props.changeVisualization();
                    break;
                }
                default: {
                    break;
                }
            }
        }
    }

    render() {
        var nodes, listHeader;
        const connectDropTarget = this.props.connectDropTarget;
        if (this.props.activeView === 'graphview') {
            // nodes = structureDataOld;


            nodes = structureDataNew;


            listHeader = <SidebarSelect
                size={this.props.size}/>
        } else {
            nodes = plottingData;
            listHeader = ''
        }
        return connectDropTarget(
            <div>
                <Resizable
                    style={style}
                    onResize={this.props.onResize}
                    onResizeStart={this.props.onResizeStart}
                    onResizeStop={this.props.onResizeStop}
                    enable={{
                        top: false,
                        right: true,
                        bottom: true,
                        left: false,
                        topRight: false,
                        bottomRight: true,
                        bottomLeft: false,
                        topLeft: false
                    }}
                    className='sidebar pnl-panel'
                    size={
                        this.props.size
                    }
                    minHeight={
                        40
                    }
                    minWidth={
                        40
                    }
                    maxWidth={
                        this.props.maxWidth
                    }
                    maxHeight={
                        this.props.maxHeight
                    }
                >
                    {/*{listHeader}*/}
                    <List
                        style={{width: '100%', height: '100%', padding: '5px'}}
                        size={'small'}
                        itemLayout="vertical"
                        dataSource={nodes}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={item.categoryName}
                                    style={{marginBottom: 0}}
                                />
                                {item.components.map(component =>
                                    <List.Item.Meta
                                        id={component?.id}
                                        key={component?.id}
                                        avatar={<Icon
                                            icon={component.icon}
                                        />}
                                        description={component.label}
                                        style={{
                                            marginLeft: '5px',
                                            marginBottom: '7px',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => {
                                            this.sidebarHandler(component);
                                        }}
                                    />)}
                            </List.Item>
                        )}
                    />
                </Resizable>
            </div>
        )
    }

    handleNodeClick = (nodeList, nodeData, _nodePath, e) => {
        const originallySelected = nodeData.isSelected
        if (!e.shiftKey) {
            this.forEachNode(this.state.nodes, n => (n.isSelected = false))
        }
        nodeData.isSelected = originallySelected == null ? true : !originallySelected
        this.setState(this.state)
    }

    handleNodeCollapse = (nodeData) => {
        nodeData.isExpanded = false
        this.setState(this.state)
    }

    handleNodeExpand = (nodeData) => {
        nodeData.isExpanded = true
        this.setState(this.state)
    }

    forEachNode(nodes, callback) {
        if (nodes == null) {
            return
        }

        for (const node of nodes) {
            this.forEachNode(node.childNodes, callback)
            callback(node)
        }
    }
}

// var PLOTVIEW_NODES = [
//   <DraggableTreeNode
//       id = {0}
//       icon = {'folder-close'}
//       hasCaret = {false}
//       isExpanded = {true}
//       label = {'Components'}
//   />
// ]

var PLOTVIEW_NODES = [
    {
        id: 0,
        label: <DraggableTreeNode
            id={0}
            label={'Line Plot'}/>
    },
    {
        id: 1,
        label: <DraggableTreeNode
            id={1}
            label={'Bar Graph'}/>
    }
];

export default DropTarget(ItemTypes.PLOT, PlotSpec, collect)(connect(mapStateToProps, mapDispatchToProps)(SideBar))