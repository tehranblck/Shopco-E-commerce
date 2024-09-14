import React, { useEffect, useState } from 'react';
import { Form, FlexRow, FlexColumn, InputForm, Input, Span, P, Btn, ButtonSubmit, Div, H2 } from './styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../Firebase';
import LoginWithEmail from './LoginWithEmail/LoginWithEmail';
import Register from './Register/Register';
import Google from './Google';

function CreateAccount() {
  
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    if (location.pathname === "/sign-in") {
      setEmail('')
      setPass('')
      setPageName("/sign-in");
    } else if (location.pathname === "/sign-up") {
      setPageName("/sign-up");
      setEmail('')
      setPass('')
    }
  }, [location.pathname]);



 

  return (
    <Div>
      
      <Form className="form">
          <H2>{pageName === "/sign-in" ? "Sign In" : "Register"}</H2>
        <FlexColumn className="flex-column">
          <label>Email</label>
        </FlexColumn>
        <InputForm className="inputForm">
          <svg height="20" viewBox="0 0 32 32" width="20">
            <g id="Layer_3" data-name="Layer 3">
              <path
                d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
              ></path>
            </g>
          </svg>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
             autoComplete="email"
            className="input"
            placeholder="Enter your Email"
          />
        </InputForm>

        <FlexColumn className="flex-column">
          <label>Password</label>
        </FlexColumn>
        <InputForm className="inputForm">
          <svg height="20" viewBox="-64 0 512 512" width="20">
            <path
              d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
            ></path>
            <path
              d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
            ></path>
          </svg>
          <Input
            type="password"
            className="input"
            placeholder="Enter your Password"
            value={pass}
            autoComplete="current-password" 
            onChange={(e) => setPass(e.target.value)}
          />
        </InputForm>

        <FlexRow className="flex-row">
          {pageName === "/sign-in" ?<LoginWithEmail auth={auth} email={email} pass={pass} /> : <Register auth={auth} email={email} pass={pass} />}
        </FlexRow>
        {/* <ButtonSubmit className="button-submit">{pageName === "/sign-in" ? "Sign in" : "Register"}</ButtonSubmit> */}
        <P className="p">
          {pageName === "/sign-in"
            ? "Don't have an account? "
            : "Do you have an account? "}
          <Span
            onClick={() => navigate(pageName === "/sign-in" ? '/sign-up' : '/sign-in')}
            className="span"
          >
            {pageName === "/sign-in" ? "Sign Up" : "Sign in"}
          </Span>
        </P>
        <P className="p line">Or With</P>

        <FlexRow className="flex-row">
          <Google/>
        </FlexRow>
      </Form>
      <ToastContainer />
    </Div>
  );
}

export default CreateAccount;
