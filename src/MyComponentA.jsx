import React, {useState, createContext} from 'react'
import MyComponentB from './MyComponentB'

export const UserContext = createContext();

const MyComponentA = () => {

  const[user, setUser] = useState("Syed");
    
  return (
    <div className='box'>
        <h1>MyComponentA</h1>
        <h2>{`hello ${user}`}</h2>
        <UserContext.Provider value = {user}>
        <MyComponentB user = {user}/>
        </UserContext.Provider>

    </div>
  )
}

export default MyComponentA