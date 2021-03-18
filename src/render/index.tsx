import { h, render } from 'preact';
import './index.css';
import { sendPingAsync, sendPingSync } from './ipc';

render(<App />, document.getElementById('root') as HTMLElement)

function App() {
    return <div class="min-h-screen bg-gray-100 col items-center justify-center space-y-5">
        <div>
            <h1 class="text-2xl">Welcome</h1>
            <p>You've done it!</p>
        </div>

        <hr class="w-60 my-2 border-t border-gray-400" />

        <p>
            <span>Get started with:</span>
            <ul class="list-disc list-inside mt-2 space-y-1">
                <li><a target="_blank" href="https://www.electronjs.org" class="text-blue-500">Electron</a></li>
                <li><a target="_blank" href="https://reactjs.org/docs/getting-started.html" class="text-blue-500">React/Preact</a></li>
                <li><a target="_blank" href="https://tailwindcss.com" class="text-blue-500">Tailwind CSS</a></li>
            </ul>
        </p>

        <hr class="w-60 my-2 border-t border-gray-400" />

        <p class="col mt-10 space-y-3">
            <button onClick={callIpc} class="px-4 py-2 font-semibold bg-red-300 rounded">Test IPC</button>
            <span class="text-sm">(Open your terminal and dev tools)</span>
        </p>
    </div>
}

function callIpc() {
    sendPingSync()
    sendPingAsync()
}