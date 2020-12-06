import React, { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../contexts/socketContext';

const ChatMessage = () => {
  const { socket, nickname } = useContext(SocketContext);
  const [userMessage, setUserMessage] = useState({});
  const [userInput, setUserInput] = useState('');

  const submitMessage = (e) => {
    e.preventDefault();
    socket.emit('FromClient', userMessage);
  };

  useEffect(() => {
    setUserMessage({ nickname, message: userInput });
  }, [userInput, nickname]);

  return (
    <div>
      <label style={{ display: 'flex' }}>
        <input
          type='text'
          style={{ position: 'absolute', left: 0, bottom: 20, width: '50vw' }}
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <input
          type='submit'
          value='Send'
          style={{ position: 'absolute', left: '50vw', bottom: 20 }}
          onClick={submitMessage}
        />
      </label>
    </div>
  );
};

export default ChatMessage;
