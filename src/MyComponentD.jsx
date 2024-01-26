import React, {useContext} from 'react';
import { UserContext } from './MyComponentA';

const MyComponentD = () => {

    const value = useContext(UserContext);

  return (
    <div className='box'>
        <h1>MyComponentD</h1>
        <h2>{`Bye ${value}`}</h2>
    </div>
  )
}

export default MyComponentD