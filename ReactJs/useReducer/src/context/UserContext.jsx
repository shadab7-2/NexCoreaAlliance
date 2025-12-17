import React,{Children, createContext, useState} from 'react';

const UserContext = createContext();

const UserContextProvider = ({Children}) => {
    const [user, setUser] = useState('');
  return (
    <UserContext.Provider value={{user, setUser}}>
      {Children}
    </UserContext.Provider>
  )
}

export {UserContext, UserContextProvider } 
