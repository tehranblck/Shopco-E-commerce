import {  sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Firebase";
import { FormContainer, LogoContainer, Form, FormGroup, Label, Input, SubmitButton, SignupLink, Link, Div } from './styled';
import { useState } from "react";
import { ToastContainer,toast } from "react-toastify";

const ForgotPasswordForm = () => {
const [email,setEmail]=useState()

    sendPasswordResetEmail(auth, email)
        .then(() => {
        console.log("first")
        return toast.success("email sended")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    })

  return (
      <Div>
           <FormContainer style={{backgroundColor:'#1f1f1f'}}>
      <LogoContainer style={{color:"white"}}>
        Forgot Password
      </LogoContainer>

      <Form onSubmit={()=>{sendPasswordResetEmail(auth,email)}}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" id="email" style={{fontFamily:"satoshi",fontSize:"14px",fontWeight:'700'}} name="email" placeholder="Enter your email" required />
        </FormGroup>

        <SubmitButton style={{backgroundColor:"#2d79f3"}} type="submit">Send Email</SubmitButton>
      </Form>

      <SignupLink style={{color:"white"}}>
        Don't have an account?
        <Link href="#" className="signup-link"> Sign up now</Link>
      </SignupLink>
          </FormContainer>
          <ToastContainer/>
   </Div>
  );
};

export default ForgotPasswordForm;

      
