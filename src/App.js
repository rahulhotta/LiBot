import About from './Components/About';
import Home from './Components/Home';
import Books from './Components/Books';
import NavBar from './Components/NavBar';
import SignUp from "./Components/SignUp"
import './App.css';
import { Routes, Route,Navigate } from "react-router-dom";
import "./Styles/App.scss" ;
import fire from './fire';
import { getAuth, onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from "firebase/auth";
import React, {useState, useEffect} from 'react'
function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

let firebaseAuth = getAuth();
const clearInputs = () => {
  setEmail('');
  setPassword('');
}

const clearErrors = () => {
  setEmailError("");
  setPasswordError("");
}

const handleLogin = () => {
  clearErrors();
  signInWithEmailAndPassword(firebaseAuth, email, password)
      .catch(err => {
        // switch(err.code)
        // {
        //   case "auth/invalid-email": 
        //   case "auth/user-disabled":
        //   case "auth/user-not-found":
        //     setEmailError(err.message);
        //     break;
        //   case "auth/wrong-password":
        //     setPasswordError(err.message);
        //     break;
        // }
        switch(err.code)
        {
          case "auth/invalid-email": setEmailError("Please Enter Email");
          case "auth/user-disabled":  setEmailError("User disabled");
          case "auth/user-not-found": setEmailError("user not found");
            
            break;
          case "auth/wrong-password":
            setPasswordError("wrong password");
            break;
        }
      })
}

const handleSignUp = () => {
  clearErrors();
  createUserWithEmailAndPassword(firebaseAuth,email, password)
      .catch(err => {
        // switch(err.code)
        // {
        //   case "auth/email-already-in-use":
        //   case "auth/invalid-email":
        //     setEmailError(err.message);
        //     break;
        //   case "auth/weak-password":
        //     setPasswordError(err.message);
        //     break;
        // }
        switch(err.code)
        {
          case "auth/email-already-in-use": setEmailError("Email already in use");
          case "auth/invalid-email":  setEmailError("Please Enter correct email");
            
            break;
          case "auth/weak-password":
            setPasswordError("Weak password");
            break;
        }
      })
}
  
const handleLogOut = () => {
  signOut(firebaseAuth);
}

const authListener = () => {
  onAuthStateChanged(firebaseAuth,(user) => {
    if(user)
    {
      clearInputs();
      setUser(user);
    }
    else{
      setUser('');
    }
  })
}

useEffect(()=> {
  authListener();
}, []);

  return (
    <div className="App">
      {user ? (<><NavBar handleLogOut={handleLogOut}/>
      
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/books" element={<Books />} />
        <Route  path="/*" element={<Navigate to="/home" />} />
      </Routes>
      </>) :
      (<SignUp
        email = {email}
        setEmail = {setEmail}
        password = {password}
        setPassword = {setPassword}
        handleLogin = {handleLogin}
        handleSignUp = {handleSignUp}
        hasAccount = {hasAccount}
        emailError = {emailError}
        passwordError = {passwordError}
        setHasAccount = {setHasAccount}
      
      />)}
      
    </div>  
  );
}

export default App;
