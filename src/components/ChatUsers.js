import React from 'react';
import './ChatRoom.css';

const ChatUsers = ({ users }) => {
  return (
    <div className='users-connected-container'>
      {users.map((user, index) => {
        return (
          <div key={index} className='users-connected'>
            <div className='user-status'></div>
            {user}
          </div>
        );
      })}
    </div>
  );
};

export default ChatUsers;
