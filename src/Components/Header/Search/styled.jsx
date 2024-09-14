import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px; /* İstediğiniz genişlik */
`;

export const SearchIcon = styled.div`
  position: absolute;
  top: 50%;
  z-index:999;
  left: 10px;
  transform: translateY(-50%);
  color:gray;
  font-size: 20px;
  pointer-events: none; 
`;

export const InputMajor = styled.input`
  width: 100%;
  padding: 10px 10px 10px 40px; /* İkon için solda boşluk bırakın */
  border: none;
  border-radius: 20px;
  font-size: 16px;
  background-color:rgba(235, 235, 235, 0.53);
  outline:none;
  &:focus {
    outline: none;
    background-color:rgba(235, 235, 235, 1);
  }
`;
export const SearchedResultText = styled.h4`
text-align: center;
    padding: 1rem;
    font-family: 'satoshi';
    font-size: 1rem;`

export const Itemss = styled.div`
        border-top: 1px solid black;
    padding: 1rem 6rem 6rem 6rem;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap: 1rem;
    `


    export const InputWrapper = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      position: relative;
    `;
    
    export const Input = styled.input`
      border-style: none;
      height: 50px;
      width: 50px;
      padding: 10px;
      outline: none;
      border-radius: 50%;
      transition: .5s ease-in-out;
      background-color: black;
      box-shadow: 0px 0px 3px #f3f3f3;
      padding-right: 40px;
      color: black;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      font-size: 17px;
    
      &::placeholder {
        color: #8f8f8f;
      }
    
      &:focus {
        box-shadow: none;
        width: 250px;
        border-radius: 0px;
        background-color: transparent;
        border-bottom: 3px solid black;
        transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
      }
    `;
    
    export const IconButton = styled.button`
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0;
      cursor: pointer;
      width: 50px;
      height: 50px;
      outline: none;
      border-style: none;
      border-radius: 50%;
      background-color: transparent;
      transition: .2s linear;
    
      &:focus ~ ${Input} {
        box-shadow: none;
        width: 250px;
        border-radius: 0px;
        background-color: transparent;
        border-bottom: 3px solid black;
        transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
      }
    `;
    
    export const SvgIcon = styled.svg`
      width: 25px;
      height: 25px;
      fill: none;
    `;
    
    export const SearchContainerr = styled.div`
    min-width:100vh;
    `