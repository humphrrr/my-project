import React, { useEffect, useState } from 'react';

export default function MessageWindow({socket}) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('message', (data) => setMessages([...messages,  data.message, <br/>]));
    }, [socket, messages]
    );

    return (
        <div id='message_window' className='message_window'>{messages}</div>
    );
}












