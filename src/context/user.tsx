import { FC, useContext } from 'react';
import { UserContext } from './userContext';

export const User: FC = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "Ramil",
      email: "Ramil@gmail.com"
    })
  };

  const handleLogout = () => {
    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.name}</div>
    </div>
  )
};
