

const moveDot = keyframes`
  0%, 100% {
    top: 10%;
    right: 10%;
  }
  25% {
    top: 10%;
    right: calc(100% - 35px);
  }
  50% {
    top: calc(100% - 30px);
    right: calc(100% - 35px);
  }
  75% {
    top: calc(100% - 30px);
    right: 10%;
  }
`;

export const Outer = styled.div`
pointer-events:none;
  width: 300px;
  height: 250px;
  border-radius: 10px;
  padding: 1px;
  background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
  position: relative;
`;

export const Dot = styled.div`
  width: 5px;
  aspect-ratio: 1;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 0 10px #ffffff;
  border-radius: 100px;
  z-index: 2;
  right: 10%;
  top: 10%;
  animation: ${moveDot} 6s linear infinite;
`;

export const Card = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 9px;
  border: solid 1px #202222;
  background-size: 20px 20px;
  background: radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  color: #fff;
`;

export const Ray = styled.div`
  width: 220px;
  height: 45px;
  border-radius: 100px;
  position: absolute;
  background-color: #c7c7c7;
  opacity: 0.4;
  box-shadow: 0 0 50px #fff;
  filter: blur(10px);
  transform-origin: 10%;
  top: 0%;
  left: 0;
  transform: rotate(40deg);
`;

export const Text = styled.div`
  font-weight: bolder;
  font-size: 4rem;
  background: linear-gradient(45deg, #000000 4%, #fff, #000);
  background-clip: text;
  color: transparent;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  position: absolute;
  background-color: #2c2c2c;
  &.topl {
    top: 10%;
    background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
  }
  &.bottoml {
    bottom: 10%;
  }
  &.leftl {
    left: 10%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }
  &.rightl {
    right: 10%;
    width: 1px;
    height: 100%;
  }
`;
export const BrandsContainer = styled.div`
padding:2rem 6rem 10rem 6rem;
`
export const CardSide = styled.div`
flex-direction: column;
    display: flex;
    width: 100%;
`
export const Cards = styled.div`
    display: flex;
    gap: 5rem;
    justify-content:center;
    padding-bottom:3rem;
    `
export const H2 = styled.h2`
    padding: 2rem;`
    import styled, { keyframes } from "styled-components";

    const animateIn = keyframes`
      0% {
        opacity: 1;
        transform: translateX(-100%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    `;
    
    const animateOut = keyframes`
      0% {
        opacity: 1;
        transform: translateX(0);
      }
      100% {
        opacity: 1;
        transform: translateX(100%);
      }
    `;
    
    export const Container = styled.section`
      display: flex;
      background-color: #232323;
    `;
    
    export const List = styled.ul`
      display: flex;
    width: 100%;
    padding:1rem;
    align-items: center;
    justify-content: space-between;
    `;
    
    export const Item = styled.li`
      padding: 2rem 0rem;
      cursor: pointer;
      position: relative;
      display: flex;
    `;
    
    export const Blur = styled.div`
      display: flex;
      z-index: 1;
      transition: 0.4s all ease-in-out;
      &:hover {
        z-index: 2;
        filter: blur(0);
        transform: translateX(1rem);
      }
    `;
    
    export const ImageWrapper = styled.div`
      pointer-events: none;
      position: absolute;
      overflow: hidden;
      width: 20rem;
      height: 30rem;
      left: 9rem;
      top: -9rem;
    `;
    
    export const Image = styled.div`
      z-index: 1;
      width: 100%;
      opacity: 0;
      left: 0;
      top: 0;
      pointer-events: none;
      position: absolute;
      height: 100%;
      transform: translateX(-100%);
      transition: transform 510ms;
      &.animate-in {
        animation: ${animateIn} 510ms cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
      }
      &.animate-out {
        animation: ${animateOut} 510ms cubic-bezier(0.165, 0.84, 0.44, 1);
      }
    `;
    
    export const DateSpan = styled.span`
      font-size: 1rem;
      color: white;
    `;
    
    export const Heading = styled.h1`
      font-size: 3rem;
      color: white;
    `;
    
export const ImageSingle = styled.img`
max-width:200px;
width:200px;
`