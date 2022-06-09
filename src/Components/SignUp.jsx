import React from 'react'
import { Form, Button, Card } from "react-bootstrap"

function SignUp({email,
  setEmail ,
  password ,
  setPassword ,
  handleLogin ,
  handleSignUp ,
  hasAccount ,
  emailError ,
  passwordError,
  setHasAccount
}) {
  function handleSubmit(e)
  {
      e.preventDefaults();
  }
  return (
   <section className='login'>
     <div className="loginContainer">
       <label >Username</label>
       <input type="email" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
       <p className="errorMsg">{emailError}</p>
       <label >password</label>
       <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
       <p className="errorMsg">{passwordError}</p>
       
       <div className="btnContainer">
         {hasAccount ? (
           <>
           <button onClick={handleLogin}>Sign In</button>
           <p>Don't have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>sign up</span></p>
           </>
         ):
         (
          <>
           <button onClick={handleSignUp}>sign Up</button>
           <p>Have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>sign in</span></p>
           </>
         )
        
        }
       </div>
     </div>
   </section>
  )
}

export default SignUp


{/* <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            
            
          </Form> */}