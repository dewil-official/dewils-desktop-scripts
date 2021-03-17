import { app, BrowserWindow } from 'electron';

/** This is the main entry file of the electon app.
 *
 * The Electron app works via two files:
 * - 'main.js': This is this file which starts electons and runs the 'index.html' files
 * - 'index.html': The starting point for the main UI using Preact
 */

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
