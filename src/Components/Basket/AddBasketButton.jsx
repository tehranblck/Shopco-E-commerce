// AddBasketButton.js
import React from "react";
import { toast } from "react-toastify";
import { AddBasketButtonButton } from "../Home/testimonials/styled";
import { GetAuthFromLocalStorage } from "../Services/GetLocalStorageAdd";
import { useNavigate } from "react-router-dom";
import Increase from "./Increase";
import useBasket from "../Services/useBasket";
import { useDispatch } from "react-redux";

const AddBasketButton = ({ item }) => {
  const navigate = useNavigate();
  const user = GetAuthFromLocalStorage();
  const basket = useBasket()
  const dispatch=useDispatch()

  const handleAddToBasket = () => {

    if (user) {
        Increase(item,dispatch,basket);
      toast.success('Added to basket', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false
      });
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <AddBasketButtonButton onClick={handleAddToBasket}>
      Add To Basket
    </AddBasketButtonButton>
  );
};

export default AddBasketButton;
