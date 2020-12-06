import React, { useState, useContext, useEffect } from 'react';
import { SocketContext } from '../contexts/socketContext';
import { useHistory } from 'react-router-dom';

const ChatMessage = () => {
  const { socket, nickname } = useContext(SocketContext);
  const [userMessage, setUserMessage] = useState({});
  const [userInput, setUserInput] = useState('');

  let history = useHistory();

  const submitMessage = (e) => {
    e.preventDefault();
    socket.emit('user_message', userMessage);
    setUserInput('');
  };

  useEffect(() => {
    !nickname && history.push('/');
  }, []);

  useEffect(() => {
    setUserMessage({ nickname, message: userInput });
  }, [userInput, nickname]);

  return (
    <form onSubmit={submitMessage}>
      <label style={{ display: 'flex' }}>
        <input
          type='text'
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
          style={{ width: '60vw' }}
        />
        <button type='submit'>Send</button>
      </label>
    </form>
  );
};

export default ChatMessage;
