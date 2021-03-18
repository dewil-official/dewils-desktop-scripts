import { app, BrowserWindow, shell } from 'electron';
import path, { dirname } from 'path';
import './main/ipc';

/** This is the main entry file of the electon app.
 *
 * The Electron app works via two files:
 * - 'main.js': This is this file which starts electons and runs the 'index.html' files
 * - 'index.html': The starting point for the main UI using Preact
 */

// Reload on file changes in dev mode
if (!app.isPackaged) require('electron-reload')(__dirname, {
    electron: process.platform === 'win32'
        ? path.join(dirname(__dirname), "node_modules", "electron", "dist", "electron.exe")
        : path.join(dirname(__dirname), 'node_modules', '.bin', 'electron')
})

// Start electron app
app.on('ready', function () {
    var window = new BrowserWindow({
        width: 800, height: 600, webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    window.loadFile('./dist/index.html')

    // Open external links in a browser instead of the electron app
    window.webContents.on('new-window', function (e, url) {
        e.preventDefault()
        shell.openExternal(url)
    });

    if (app.isPackaged) window.setMenuBarVisibility(false)
})

// Close electron app
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
