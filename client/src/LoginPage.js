import React, { useState } from 'react';

const LoginPage = ({onLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName ] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    function handleLogin(e){
        e.preventDefault();
        fetch("/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                email: loginEmail,
                password: loginPassword
            }),
        })
            .then((r)=> r.json())
            .then((data)=> onLogin(data))
        
    }


    function handleSignup(e){
        e.preventDefault();
      
        fetch('/signup', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                email, 
                password, 
                passsword_confirmation: passwordConfirmation,
                firstName, 
                lastName,
            }),
        })
            .then((r)=> r.json())
            .then((data)=> onLogin(data))
    }




    return(
        <>
         <div className="login">
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="text"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    /><br/>
                    <label htmlFor="password">Password: </label>
                    <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    /><br/>
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className="signup">
        <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="firstname">First Name:</label>
                    <input
                    type="text"
                    name="firstname"
                    value={firstName}
                    onChange={(e)=> setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input
                    type="text"
                    name="lastname"
                    value={lastName}
                    onChange={(e)=> setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm Password:</label>
                    <input
                    type="password"
                    name="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                </div>
                <button type="submit">Sign Up</button>
                </form>
            </div>
           </> 
    )
}


export default LoginPage;