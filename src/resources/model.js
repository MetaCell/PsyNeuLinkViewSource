const composition = `digraph "Composition-0" { ` +
`        graph [label="Composition-0" overlap=False rankdir=BT] ` +
`        node [color=black fontname=arial fontsize=12 penwidth=1 shape=record]` +
`        edge [fontname=arial fontsize=10]` +
`        input [label=<<table border='3' cellborder="0" cellspacing="1" bgcolor="#FFFFF0"><tr><td colspan="2"> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr><td><table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="OutputPort-OutputPort-0"><b>OutputPort-0</b></td></tr></table></td></tr> <tr><td colspan="1" valign="middle"><b><i>OutputPorts</i></b></td></tr> </table></td></tr><tr><td port="input" colspan="1"><b><b><i>Mechanism</i></b>:<br/><font point-size="16" >input</font></b></td><td> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr><td rowspan="1" valign="middle"><b><i>ParameterPorts</i></b></td> <td> <table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="ParameterPort-intercept"><b>intercept</b></td></tr><tr><td port="ParameterPort-slope"><b>slope</b></td></tr></table></td></tr></table></td></tr><tr><td colspan="2"> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr><td colspan="1" valign="middle"><b><i>InputPorts</i></b></td></tr><tr><td><table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="InputPort-InputPort-0"><b>InputPort-0</b></td></tr></table></td></tr></table></td></tr></table>> color=green penwidth=3 rank=source shape=plaintext]` +
`        mid [label=<<table border='1' cellborder="0" cellspacing="1" bgcolor="#FFFFF0"><tr><td colspan="2"> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr><td><table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="OutputPort-OutputPort-0"><b>OutputPort-0</b></td></tr></table></td></tr> <tr><td colspan="1" valign="middle"><b><i>OutputPorts</i></b></td></tr> </table></td></tr><tr><td port="mid" colspan="1"><b><b><i>Mechanism</i></b>:<br/><font point-size="16" >mid</font></b></td><td> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr><td rowspan="1" valign="middle"><b><i>ParameterPorts</i></b></td> <td> <table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="ParameterPort-intercept"><b>intercept</b></td></tr><tr><td port="ParameterPort-slope"><b>slope</b></td></tr></table></td></tr></table></td></tr><tr><td colspan="2"> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr><td colspan="1" valign="middle"><b><i>InputPorts</i></b></td></tr><tr><td><table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="InputPort-InputPort-0"><b>InputPort-0</b></td></tr></table></td></tr></table></td></tr></table>> color=black penwidth=1 rank=same shape=plaintext]` +
`        input:"OutputPort-OutputPort-0" -> mid:"InputPort-InputPort-0" [label="" arrowhead=normal color=black penwidth=1]` +
`        mid:"OutputPort-OutputPort-0" -> output:"InputPort-InputPort-0" [label="" arrowhead=normal color=black penwidth=1]` +
`        output [label=<<table border='3' cellborder="0" cellspacing="1" bgcolor="#FFFFF0"><tr><td colspan="2"> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr><td><table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="OutputPort-OutputPort-0"><b>OutputPort-0</b></td></tr></table></td></tr> <tr><td colspan="1" valign="middle"><b><i>OutputPorts</i></b></td></tr> </table></td></tr><tr><td port="output" colspan="1"><b><b><i>Mechanism</i></b>:<br/><font point-size="16" >output</font></b></td><td> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr><td rowspan="1" valign="middle"><b><i>ParameterPorts</i></b></td> <td> <table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="ParameterPort-intercept"><b>intercept</b></td></tr><tr><td port="ParameterPort-slope"><b>slope</b></td></tr></table></td></tr></table></td></tr><tr><td colspan="2"> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr><td colspan="1" valign="middle"><b><i>InputPorts</i></b></td></tr><tr><td><table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="InputPort-InputPort-0"><b>InputPort-0</b></td></tr></table></td></tr></table></td></tr></table>> color=red penwidth=3 rank=max shape=plaintext]` +
`}`;

// TODO: keep in mind that this below has been generated by _show_structure has suggested, but it required
// being incapsulated into the digraph in order to be consumed by the library we are using.
// Also in the interpreter we are purging the artificial graph and the first node for this same reason
// what done manually here will have to be implemented backend wise if there are free mechanisms outside composition.
const singleNode = `digraph "single_node" { graph` +
`        single_node [label=<<table border='1' cellborder="0" cellspacing="1" bgcolor="#FFFFF0"><tr><td colspan="2"> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr><td><table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="OutputPort-OutputPort-0"><b>OutputPort-0</b><br/>=[0.]</td></tr></table></td></tr>  </table></td></tr><tr><td port="single_node" colspan="1"><b><font point-size="16" >single_node</font></b><br/>=[[0.]]</td><td> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr> <td> <table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="ParameterPort-intercept"><b>intercept</b><br/>=[0.]</td></tr><tr><td port="ParameterPort-slope"><b>slope</b><br/>=[2.]</td></tr></table></td></tr></table></td></tr><tr><td colspan="2"> <table border="0" cellborder="0" bgcolor="#FAFAD0"> <tr><td><table border="0" cellborder="2" cellspacing="0" color="LIGHTGOLDENRODYELLOW" bgcolor="PALEGOLDENROD"><tr><td port="InputPort-InputPort-0"><b>InputPort-0</b><br/>=[0.]</td></tr></table></td></tr></table></td></tr></table>>]` +
`}`;

const model = {
        'compositions': [composition],
        'mechanisms': [singleNode]
}

module.exports = {
        'mockModel': model,
};
