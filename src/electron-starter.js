const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow(){
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL('http://localhost:3000');

  // 開発者モード
  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function(){
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function(){
  // Mac以外の場合閉じる
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('active', function(){
  if(mainWindow === null){
    createWindow();
  }
});

