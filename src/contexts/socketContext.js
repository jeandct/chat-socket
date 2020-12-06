import React, { createContext, useState } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext({
  socket: () => {},
  nickname: '',
});

const SocketContextProvider = ({ children }) => {
  const [nickname, setNickname] = useState('');

  const socket = io('https://jeandct-chat-api.herokuapp.com');
  // const socket = io('http://localhost:8080');

  return (
    <SocketContext.Provider value={{ socket, nickname, setNickname }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
