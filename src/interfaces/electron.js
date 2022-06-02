let instance = null;

class ElectronInterface {
    constructor() {
        this.initialize = this.initialize.bind(this);
    }
    windows = {};

    sendMessage(channel, message){
        var mainWindow = this.windows.renderMain;
        mainWindow.webContents.send(channel, message)
    }

    initialize() {
        console.log('### Electron interface initialization ###')
    }
}

function initElectronInterface() {
    instance = new ElectronInterface();
}

exports.getElectronInterface = () => {
    if (instance === null) {
        initElectronInterface();
    }
    return instance;
};