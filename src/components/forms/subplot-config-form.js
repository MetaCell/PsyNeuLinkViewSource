import React from 'react'
import {createId} from "../../state/util";
import {ID_LEN, PNL_PREFIX} from "../../keywords";
import {Button, Divider, Form, Input, InputNumber, Menu, Select} from "antd"
import SelectedDataSourceTable from "../selected-data-source-table";
import {Spinner} from "@blueprintjs/core";
import '../../css/paramform.css';
import AvailableDataSourceTable from "../available-data-source-table";
import {connect} from "react-redux";
import {getMapParentIdToComponentFocus, getMapParentIdToTabFocus} from "../../state/subplot-config-form/selectors";
import {setComponentFocus, setTabFocus} from "../../state/subplot-config-form/actions";
import {registerComponent} from "../../state/psyneulink-components/actions";
import {getPsyNeuLinkIdSet} from "../../state/psyneulink-registry/selectors";
import {getSubplotMetaData} from "../../state/subplots/selectors";
import {parseNameOnEdit} from "../../state/subplots/util";
import {editSubplotMetaData} from "../../state/subplots/actions";

function validateRequired(value) {
}

const mapStateToProps = ({core, subplots, subplotConfigForm, psyNeuLinkRegistry}) => {
    return {
        psyNeuLinkIdSet: getPsyNeuLinkIdSet(psyNeuLinkRegistry),
        mapIdToTabFocus: getMapParentIdToTabFocus(subplotConfigForm),
        mapIdToComponentFocus: getMapParentIdToComponentFocus(subplotConfigForm),
        subplotMetaData: getSubplotMetaData(subplots),
        subplotState: subplots,
        activeComposition: core.activeComposition
    }
};

const mapDispatchToProps = dispatch => (
    {
        registerComponent: ({id, name}) => dispatch(registerComponent({id, name})),
        editSubplotMetaData: ({id, plotType, name, dataSources}) => dispatch(editSubplotMetaData({id, plotType, name, dataSources})),
        setTabFocus: ({parentId, tabKey})=>dispatch(setTabFocus({parentId, tabKey})),
        setComponentFocus: ({parentId, tabKey}) => dispatch(setComponentFocus({parentId, tabKey}))
    }
);

const electron = window.require('electron');
const ipcRenderer  = electron.ipcRenderer;
const rpc = window.interfaces.rpc;

class SubplotConfigForm extends React.Component{

    constructor(props) {
        super(props);
        this.bindThisToFunctions = this.bindThisToFunctions.bind(this);
        this.bindThisToFunctions();
        ipcRenderer.on('componentList', this.handleComponentList);
        this.state = {
            activeTab:`${this.props.id}-data`,
            components:[]
        };
    }

    bindThisToFunctions(){
        this.render = this.render.bind(this);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.setComposition = this.setComposition.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.getOptionsForm = this.getOptionsForm.bind(this);
        this.getDataForm = this.getDataForm.bind(this);
        this.getActiveForm = this.getActiveForm.bind(this);
        this.handleComponentList = this.handleComponentList.bind(this);
        this.editName = this.editName.bind(this);
    }

    componentDidMount() {
        if (this.props.activeComposition !== ''){
            this.setComposition();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.activeComposition !== this.props.activeComposition){
            this.setComposition();
        }
    }

    setComposition(){
        if (this.props.activeComposition !== ''){rpc.get_components(this.props.activeComposition)}
    }


    handleTabChange(new_tab_id, prev_tab_id, e) {
        let {id, setTabFocus} = this.props;
        this.setState({activeTab:new_tab_id});
        setTabFocus({parentId:id, tabKey:new_tab_id});
    }

    handleComponentList(event, message) {
        let idSet = new Set([...this.props.psyNeuLinkIdSet]);
        message.forEach(m=>{
            let id = createId(idSet, PNL_PREFIX, ID_LEN);
            idSet.add(id);
            this.props.registerComponent({id:id, name:m});
        });
        this.setState({components:message})
    }

    getDataForm(){
        var tableHeight = this.props.size.height - (this.props.padding * 2);
        let {mapIdToComponentFocus, id} = this.props
        let componentTabs =
            this.state.components.length > 0 ?
                <Menu
                    style={{width:'100px'}}
                    mode="inline"
                    selectedKeys={[mapIdToComponentFocus[id] ?? null]}
                    onSelect={
                        ({key}) => {
                            this.props.setComponentFocus({
                                parentId:this.props.id,
                                tabKey:key
                            });
                }}>
                    {this.state.components.map(
                        c =>
                            <Menu.Item
                                key={c}
                                style={{placeSelf: 'center'}}>
                                {c}
                            </Menu.Item>
                    )}
                </Menu>
                :
                <div
                    style={{
                        width:'100px',
                        placeSelf:'center'
                    }}>
                    <Spinner
                        size = {Spinner.SIZE_SMALL}
                        className={"graph_loading_spinner"}/>
                    <Divider type={'vertical'}/>,
                </div>;
        return([
            componentTabs,
            <div/>,
            <AvailableDataSourceTable
                name={`${this.props.id}-available-data`}
                id={this.props.id}
                components={this.state.components}
                size={{height: tableHeight, width:"100%"}}/>,
            <Divider type={'vertical'}/>,
            <SelectedDataSourceTable
                name={`${this.props.id}-selected-data`}
                id={this.props.id}
                size={{height: tableHeight, width:"100%"}}/>
        ])
    }

    editName(e) {
        let {id, subplotState, subplotMetaData, editSubplotMetaData} = this.props;
        let name = e.target.value;
        let plotType = subplotMetaData[id].plotType;
        name = parseNameOnEdit(id, subplotState, plotType, name);
        editSubplotMetaData({id: id, name: name})
    }

    getOptionsForm() {
        let {id, subplotMetaData} = this.props;
        let initialName = subplotMetaData[id].name;
        let metaDataDivider =
        <div className={'horizontal-divider-container'}>
            <Divider orientation="left" plain>
                Metadata
            </Divider>
        </div>;

        let groupProportion = '25%';
        let labelProportion = '28%';
        let inputProportion = '72%';
        let inputProportionWithButton = '47%';
        let buttonProportion = '25%';
        let inputMinRangeSpec = 'Fixed';
        let inputMaxRangeSpec = 'Dynamic';
        let metaDataRowOne =
        <div className={'metadata-row-container'}>
            <Input.Group
            style={{
                width:groupProportion,
                marginRight:"10px",
                display:"inline-block"
            }}>
                <Input
                    disabled
                    value={"Name"}
                    style={{ width: labelProportion, color: 'rgba(0, 0, 0, 1)', cursor: 'auto' }} />
                <Input
                    id={`metadata-name-${id}`}
                    value={initialName}
                    style={{ width:inputProportion }}
                    spellCheck={false}
                    onChange={this.editName}
                />
            </Input.Group>
        </div>;

        let xAxisDivider =
        <div className={'horizontal-divider-container'}>
            <Divider orientation="left" plain>
                x-Axis
            </Divider>
        </div>;

        let xAxisOptions =
            <div className={'xAxis-row-container'}>
                <Input.Group
                    style={{
                        width:groupProportion,
                        marginRight:"10px",
                        display:"inline-block"
                    }}>
                    <Input
                        disabled
                        value={"Label"}
                        style={{ width: labelProportion, color: 'rgba(0, 0, 0, 1)', cursor: 'auto' }} />
                    <Input
                        id={`metadata-name-${id}`}
                        style={{ width:inputProportion }}
                        spellCheck={false}
                    />
                </Input.Group>

                <Input.Group
                    style={{
                        width:groupProportion,
                        marginRight:"10px",
                        display:"inline-block",
                        verticalAlign:"top"
                    }}>
                    <Input
                        disabled
                        value={"Source"}
                        style={{ width: labelProportion, color: 'rgba(0, 0, 0, 1)', cursor: 'auto' }} />
                    <Select disabled
                            defaultValue={"Trial #"}
                            style={{ width: inputProportion }}>
                        <Select.Option value="Trial #">Trial #</Select.Option>
                    </Select>
                </Input.Group>

                <Input.Group
                    style={{
                        width:groupProportion,
                        marginRight:"10px",
                        display:"inline-block",
                        verticalAlign:"top"
                    }}>
                    <Input
                        disabled
                        value={"Scale"}
                        style={{ width: labelProportion, color: 'rgba(0, 0, 0, 1)', cursor: 'auto' }} />
                    <Select disabled
                            defaultValue={"linear"}
                            style={{ width: inputProportion }}>
                        <Select.Option value="linear">Linear</Select.Option>
                    </Select>
                </Input.Group>

                <br/>

                <Input.Group
                    style={{
                        width:groupProportion,
                        marginRight:"10px",
                        display:"inline-block",
                        verticalAlign:"top"
                    }}>
                    <Input
                        disabled
                        value={"Minimum"}
                        style={{ width: labelProportion, color: 'rgba(0, 0, 0, 1)', cursor: 'auto' }} />

                    <InputNumber
                        style={{ width: inputProportionWithButton, color: 'rgba(0, 0, 0, 1)', cursor: 'auto' }} />

                    <Button
                        style={{
                            width: buttonProportion,
                            bottom: "1px",
                            background: inputMinRangeSpec === "Dynamic" ? "darkorange" : "",
                            borderColor: inputMinRangeSpec === "Dynamic" ? "darkorange" : ""
                        }}
                        type={"primary"}>{inputMinRangeSpec}</Button>
                </Input.Group>

                <Input.Group
                    style={{
                        width:groupProportion,
                        marginRight:"10px",
                        display:"inline-block",
                        verticalAlign:"top"
                    }}>
                    <Input
                        disabled
                        value={"Maximum"}
                        style={{ width: labelProportion, color: 'rgba(0, 0, 0, 1)', cursor: 'auto' }} />

                    <InputNumber
                        style={{ width: inputProportionWithButton, color: 'rgba(0, 0, 0, 1)', cursor: 'auto' }} />

                    <Button
                        style={{
                            width: buttonProportion,
                            bottom: "1px",
                            background: inputMaxRangeSpec === "Dynamic" ? "darkorange" : "",
                            borderColor: inputMaxRangeSpec === "Dynamic" ? "darkorange" : ""
                        }}
                        type={"primary"}>{inputMaxRangeSpec}</Button>
                </Input.Group>

                <Input.Group
                    style={{
                        width:groupProportion,
                        marginRight:"10px",
                        display:"inline-block"
                    }}>
                    <Input
                        disabled
                        value={"Tick Marks"}
                        style={{ width: labelProportion, color: 'rgba(0, 0, 0, 1)', cursor: 'auto' }} />
                    <InputNumber
                        min={0}
                        style={{ width: inputProportion, color: 'rgba(0, 0, 0, 1)', cursor: 'auto' }} />
                </Input.Group>

            </div>;

        let yAxisDivider =
        <div className={'horizontal-divider-container'}>
            <Divider orientation="left" plain>
                y-Axis
            </Divider>
        </div>;

        let dataViewTableDivider =
        <div className={'horizontal-divider-container'}>
            <Divider orientation="left" plain>
                Data View
            </Divider>
        </div>;

        return [
            <div/>, metaDataDivider,
            <div/>, metaDataRowOne,
            <div/>, xAxisDivider,
            <div/>, xAxisOptions,
            <div/>, yAxisDivider,
            <div/>, dataViewTableDivider,
        ]
    }

    getActiveForm(){
        let {id, mapIdToTabFocus} = this.props;
        let activeForm;
        let outerColumnLayout;
        let innerColumnLayout;
        switch (mapIdToTabFocus[id]) {
            case 'data':
                outerColumnLayout = "1fr 50fr";
                innerColumnLayout = "1fr 1fr 50fr 1fr 50fr";
                activeForm = this.getDataForm();
                break;
            default:
                outerColumnLayout = "1fr 100fr";
                innerColumnLayout = "1fr 100fr";
                activeForm = this.getOptionsForm();
        }
        let form =
        <Form
            style={{
                padding:`${this.props.padding}px`,
                display: "grid",
                gridTemplateColumns: outerColumnLayout,
                height: this.props.size.height,
                ...this.props.style
            }}
        >
            <div className={'vertical-tab-container'}>
                <Menu
                    style={{width:'110px', height:'100%'}}
                    mode="inline"
                    selectedKeys={[this.props.mapIdToTabFocus[this.props.id] ?? 'configure']}
                    onSelect={
                        ({key}) => {this.handleTabChange(key)}}>
                    <Menu.Item
                        key={'configure'}
                        style={{placeSelf: 'center'}}>
                        {'Configure'}
                    </Menu.Item>
                    <Menu.Item
                        key={'data'}
                        style={{placeSelf: 'center'}}>
                        {'Data'}
                    </Menu.Item>
                </Menu>
            </div>
            <div
                style={{
                    gridTemplateColumns: innerColumnLayout,
                    display: "grid"
                }}>
                {activeForm}
            </div>
        </Form>;
        return form
    }

    render() {

        return <div>
            {this.getActiveForm()}
        </div>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubplotConfigForm)