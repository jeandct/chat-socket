import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SocketContext } from '../contexts/socketContext';

const Home = () => {
  let history = useHistory();

  const { nickname, setNickname } = useContext(SocketContext);

  const joinChat = () => {
    history.push('/chat');
  };
  return (
    <form onSubmit={joinChat}>
      <label>
        {' '}
        Nickname:
        <input
          type='text'
          onChange={(e) => setNickname(e.target.value)}
          value={nickname}
        />
        <button type='submit'>Join Chat</button>
      </label>
    </form>
  );
};

export default Home;
