import './components.css';
import React, { useState } from 'react';

export default function CommandBar({socket}) {
    const [command, setCommand] = useState('');

    const handleSendCommand = (e) => {
        e.preventDefault();
        socket.emit('command', {
            command: command
        });
        setCommand('');
    }

    return (
        <div>
            <form onSubmit={handleSendCommand}>
                <input 
                    type="text" 
                    className="command_bar" 
                    placeholder="type a command" 
                    value={command} 
                    onChange={(e) => setCommand(e.target.value)}>
                </input>
                <button className="send_button">Send</button>
            </form>
        </div>
    )
}