import React, {useEffect, useState} from 'react';
import LoginPage from './LoginPage';
import AuthorizedApp from './AuthorizedApp';
import './App.css';

function App() {
  const [user, setUser] = useState(null)

function onLogin(){
  fetch('/me').then((r)=> {
    if (r.ok){
      r.json().then((data)=> {
        setUser(data)
      })
    }
  })
}

function handleLogout(){
  fetch('/logout', {
    method: "DELETE"
  }).then(setUser(null))
}

useEffect(()=> {
  fetch('/me').then((r)=> {
    if(r.ok){
      r.json().then((data)=> {
        setUser(data)
      })
    }
  })
},[])

  return (
    <div className="App">
       {user ? 
     <AuthorizedApp user={user} handleLogout={handleLogout}/>
     :
     <LoginPage onLogin={onLogin}/>
     }
    </div>
  );
}

export default App;
