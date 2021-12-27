import React, {useState} from 'react'

import './Login.css';
import Checkbox from '@material-ui/core/Checkbox';

export default function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  


  return (
    <div className='login'> 
        <form className='login__form'>
            <h1>Login</h1>
            <h3>Login to your account</h3>
            <p>Thank you for get back to Lottery Display., lets access our the
                best recommendation for you.</p>
              <p>________________________________________________________________________</p>
            <input 
            type="text" 
            name="Username"
            placeholder="Email or Phone Number"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            type="password" 
            name="Password"
            placeholder="Password"
            value= {password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <Checkbox
            name="checkedB"
            color="primary"
          />
            <button type="submit" className='submit__button'>
                Login
            </button>
        </form>
    </div>
);
}



