import React, { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../contexts/socketContext';
import ChatMessage from './ChatMessage';

const ChatRoom = () => {
  const { socket } = useContext(SocketContext);
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on('connection', (id) => {
      console.log(id);
    });

    socket.on('chat_message', (message) => {
      setChat((prevChat) => {
        return [...prevChat, message];
      });
    });

    return () => socket.disconnect();
  }, [socket]);

  return (
    <div>
      {chat.map((msg) => {
        return `${msg.nickname} : ${msg.message}`;
      })}
      <ChatMessage />
    </div>
  );
};

export default ChatRoom;
