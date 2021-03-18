import { ipcMain } from "electron";

/** Send and receive messages from the render process.
 * @see https://www.electronjs.org/docs/api/ipc-main
 */

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log('asynchronous-message', arg) // prints "ping"
    event.reply('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
    console.log('synchronous-message', arg) // prints "ping"
    event.returnValue = 'pong'
})