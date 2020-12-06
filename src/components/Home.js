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
    <label>
      {' '}
      Nickname:
      <input
        type='text'
        onChange={(e) => setNickname(e.target.value)}
        value={nickname}
      />
      <input type='submit' value='Join' onClick={joinChat} />
    </label>
  );
};

export default Home;
