import React from 'react'
import { Button } from '../Drawer/styled';
import { useNavigate } from 'react-router-dom';
import { changeDrawer } from './DrawerSlice';
import { useDispatch } from 'react-redux';

function GoToCard() {
    const navigate = useNavigate()
    const dispatch=useDispatch()
  return (
      <Button onClick={() => {
          navigate('/orders');
          dispatch(changeDrawer());
      }} >Go To Card</Button>
  )
}

export default GoToCard