import { app, BrowserWindow } from 'electron';

// Checks dev mode args
const devMode = process.argv.some(val => val === '--dev')
if (devMode) require('electron-reload')(__dirname)

// Start electron app
app.on('ready', function () {
    var window = new BrowserWindow({ width: 800, height: 600, webPreferences: { nodeIntegration: true } })
    window.loadFile('./dist/index.html')
})

// Close electron app
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
