const fileSystemInterface = require('./filesystem').getFileSystemInterface();
const interpreterInterface = require('./interpreter').getInterpreterInterface();
const electronInterface = require('./electron').getElectronInterface();
const rpcInterface = require('./rpc').getRPCInterface();

const interfaces = {
    'filesystem': fileSystemInterface,
    'interpreter': interpreterInterface,
    'electron': electronInterface,
    'rpc': rpcInterface
};

exports.interfaces = interfaces;