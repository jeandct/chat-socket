import React, { useState, useEffect, useContext } from 'react';
import { SocketContext } from '../contexts/socketContext';
import ChatMessage from './ChatMessage';
import './ChatRoom.css';
import ChatUsers from './ChatUsers';

const ChatRoom = () => {
  const { socket, nickname } = useContext(SocketContext);
  const [chat, setChat] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('connection', (id) => {
      console.log(id);
    });

    socket.on('connect', () => {
      console.log(socket.id);
      if (socket.connected) {
        socket.emit('user_connected', nickname);
      }
    });

    socket.on('all_users_connected', (user) => {
      setUsers(user);
    });

    socket.on('chat_message', (message) => {
      setChat((prevChat) => {
        return [...prevChat, message];
      });
    });

    return () => socket.disconnect();
  }, [socket]);

  return (
    <div className='chatRoom-container'>
      <div className='chat-main-container'>
        <div className='chat-container'>
          <div className='message-container'>
            {chat.map((msg, index) => {
              return (
                <div className='message-user' key={index}>
                  <div className='user-nickname'>{msg.nickname} : </div>{' '}
                  <div className='user-message'>{msg.message}</div>
                </div>
              );
            })}
          </div>
        </div>
        <ChatMessage />
      </div>
      <div className='users-connected-container'>
        <ChatUsers users={users} />
      </div>
    </div>
  );
};

export default ChatRoom;
