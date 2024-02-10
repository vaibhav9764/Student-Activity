import React, { useState } from 'react';
import * as Comp from './Comp';

function SignUpForm() {
  const [signIn, toggle] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle signup request
  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      console.log(data); // Log response from backend
      // Handle success or error responses from backend
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to handle login request
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      console.log(data); // Log response from backend
      // Handle success or error responses from backend
      console.log("Login Succefull");
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="center-container">
        <Comp.Container>
          <Comp.SignUpContainer signinIn={signIn}>
            <Comp.Form>
              <Comp.Title>Create Account</Comp.Title>
              <Comp.Input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
              <Comp.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <Comp.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <Comp.Button onClick={handleSignUp}>Sign Up</Comp.Button>
            </Comp.Form>
          </Comp.SignUpContainer>

          <Comp.SignInContainer signinIn={signIn}>
            <Comp.Form>
              <Comp.Title>Sign in</Comp.Title>
              <Comp.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <Comp.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
              <Comp.Anchor href='#'>Forgot your password?</Comp.Anchor>
              <Comp.Button onClick={handleLogin}>Sign In</Comp.Button>
            </Comp.Form>
          </Comp.SignInContainer>

          <Comp.OverlayContainer signinIn={signIn}>
            <Comp.Overlay signinIn={signIn}>
              <Comp.LeftOverlayPanel signinIn={signIn}>
                <Comp.Title>Welcome Back!</Comp.Title>
                <Comp.Paragraph>
                  
                </Comp.Paragraph>
                <Comp.GhostButton onClick={() => toggle(true)}>
                  Sign In
                </Comp.GhostButton>
              </Comp.LeftOverlayPanel>

              <Comp.RightOverlayPanel signinIn={signIn}>
                <Comp.Title>Hello, Friend!</Comp.Title>
                <Comp.Paragraph>
                
                </Comp.Paragraph>
                <Comp.GhostButton onClick={() => toggle(false)}>
                  Sigin Up
                </Comp.GhostButton>
              </Comp.RightOverlayPanel>
            </Comp.Overlay>
          </Comp.OverlayContainer>
        </Comp.Container>
      </div>
    </div>
  );
}

export default SignUpForm;
