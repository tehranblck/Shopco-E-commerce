import React from 'react'
import AsideProfile from '../../Components/AsideMyAccount.jsx/AsideProfile';
import { NotReachable, OrdersContainer } from './styled';
import TabsComponent from './Tabs';
import DrawerContainer from '../../Components/Drawer/Drawer';


function Orders() {
  const user=JSON.parse(localStorage.getItem('users'))
  return (
    user ? (
      <OrdersContainer>
        <AsideProfile />
        <TabsComponent />
        <DrawerContainer />
      </OrdersContainer>
    ) : (
      <NotReachable> Please Login first</NotReachable>
    )
  );
} 
export default Orders