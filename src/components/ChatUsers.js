import React from 'react';
import './ChatRoom.css';

const ChatUsers = ({ users }) => {
  return (
    users &&
    users.length > 0 && (
      <div className='users-connected'>
        {users.map((user, index) => {
          return (
            <div className='user-info' key={index}>
              <div className='user-status'></div>
              {user.username}
            </div>
          );
        })}
      </div>
    )
  );
};

export default ChatUsers;
