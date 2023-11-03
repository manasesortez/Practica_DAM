const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
    //Crear la ventana principal
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 600,
        webPreferences: { nodeIntegration: true },
    });

    mainWindow.loadFile('app/index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if(mainWindow === null) {
        createWindow();
    }
});