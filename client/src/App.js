import socketIO from 'socket.io-client';
import CommandBar from './components/CommandBar';
import MessageWindow from './components/MessageWindow';
const socket = socketIO.connect('http://localhost:4000');

export default function App() {
  return (
    <div>
      <MessageWindow socket={socket} />
      <CommandBar socket={socket} />
    </div>
  );
}