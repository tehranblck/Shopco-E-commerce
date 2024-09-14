import styled from "styled-components";
const Div = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
margin-bottom:20rem;
padding:2rem 6rem 6rem 6rem;`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #1f1f1f;
  padding: 30px;
  width: 450px;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  ::placeholder {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #aaa;
  }

  button {
    align-self: flex-end;
  }
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;

  > label {
    color: #f1f1f1;
    font-weight: 600;
  }
`;

const InputForm = styled.div`
  border: 1.5px solid #333;
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
  background-color: #2b2b2b;

  &:focus-within {
    border: 1.5px solid #2d79f3;
  }
`;

const Input = styled.input`
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;
  background-color: #2b2b2b;
  color: #f1f1f1;

  &:focus {
    outline: none;
  }
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  justify-content: space-between;

  > div > label {
    font-size: 14px;
    color: #f1f1f1;
    font-weight: 400;
  }
`;

const Span = styled.span`
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;
`;

const ButtonSubmit = styled.button`
  margin: 20px 0 10px 0;
  background-color: #2d79f3;
  border: none;
  color: white;
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
`;

const P = styled.p`
  text-align: center;
  color: #f1f1f1;
  font-size: 14px;
  margin: 5px 0;
`;
const H2 = styled.h2`
color:white;
text-align:center;
`
const Btn = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #333;
  background-color: #2b2b2b;
  color: #f1f1f1;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    border: 1px solid #2d79f3;
  }
`;
export{Form,FlexRow,FlexColumn,InputForm,Input,Span,P,Btn,ButtonSubmit,Div,H2}