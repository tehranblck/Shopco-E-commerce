import React from "react";
import { useNavigate } from "react-router-dom";
import { ButtonAll } from '../new-arrivals/styled'

const ButtonNavigate = ({ link }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(link)
  };

  return (
    <ButtonAll onClick={handleNavigation}>
      Show All
    </ButtonAll>
  );
};

export default ButtonNavigate;
