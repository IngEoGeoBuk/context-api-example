import React, { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile';
import { LoginContext } from './Contexts/LoginContext'

const App = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  return (
    <div>
      <LoginContext.Provider value={{
        username, 
        onUsername: (v: string) => { setUsername(v) }, 
        onShowProfile: (v: boolean) => { setShowProfile(v) }
      }}>
        {showProfile ? 
          <Profile /> :
          <Login />
        }
      </LoginContext.Provider>
    </div>
  )
}

export default App