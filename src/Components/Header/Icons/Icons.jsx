import React, { useEffect } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { Btn, IconsContainer, ImgPrev } from './styled';
import BasicMenu from './Account/Account';
import { useNavigate } from 'react-router-dom';
import { GetAuthFromLocalStorage } from '../../Services/GetLocalStorageAdd';
import { useDispatch, useSelector } from 'react-redux';
import { changeDrawer } from '../../Drawer/DrawerSlice';
import Badge from '@mui/material/Badge';
import { setBasket } from '../../Basket/basketSlice';
import useBasket from '../../Services/useBasket';

function Icons() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = GetAuthFromLocalStorage();

  // Get basket data from localStorage or from a service
  const basket = useBasket(); // Assume this function returns the basket array

  useEffect(() => {
    // Set the basket data in Redux state on component mount
    dispatch(setBasket(basket));
  }, [dispatch, basket]);

  if (!user) {
    return (
      <IconsContainer>
        <FiShoppingCart onClick={() => navigate('/orders')} style={{ fontSize: "1.3rem", cursor: "pointer" }} />
        <VscAccount onClick={() => navigate('/sign-in')} style={{ fontSize: "1.3rem", cursor: "pointer" }} />
        <Btn onClick={() => navigate('/sign-in')}>Sign/Register</Btn>
      </IconsContainer>
    );
  }

  const name = user.displayName || user.email;

  return (
    <IconsContainer>
      <Badge badgeContent={basket?.length || 0} color="primary">
        <FiShoppingCart onClick={() => dispatch(changeDrawer())} style={{ fontSize: "1.3rem", cursor: "pointer" }} />
      </Badge>

      {user.photoURL ? (
        <ImgPrev onClick={() => navigate('/my-account')} src={user.photoURL} alt="User Avatar" />
      ) : (
        <VscAccount onClick={() => navigate('/my-account')} style={{ fontSize: "1.3rem", cursor: "pointer" }} />
      )}
      <BasicMenu name={name} />
    </IconsContainer>
  );
}

export default Icons;
