import React from 'react'
import { Aside, H2, Padding, Span } from './styled'
import { FaChevronRight } from 'react-icons/fa'
import { Group, Text } from '../../Pages/Category/styled'
import { CgProfile } from "react-icons/cg";
import { BsBasket3 } from 'react-icons/bs';
import './aside.css'
import { useLocation, useNavigate } from 'react-router-dom';

function AsideProfile() {
    const navigate = useNavigate();
    const location = useLocation().pathname;
    const loc = location === '/orders';

    const Nav = (link) => {
        navigate(link);
    };

    return (
      <Aside>
          <H2>My Account</H2>
          
            <Padding>
                <Span>Home<FaChevronRight />My Account</Span>
          </Padding>
          <Group style={{justifyContent:"left", gap:"10px", alignItems:"center", paddingLeft:"10px"}} >
              <CgProfile />
              <Text onClick={() => Nav('/my-account')} className={!loc ? "activee" : ""}>Edit Profile</Text>
          </Group>
          <Group style={{justifyContent:"left", gap:"10px", alignItems:"center", paddingLeft:"10px"}} >
              <BsBasket3 />
              <Text onClick={() => Nav('/orders')} className={loc ? "activee" : ""}>Manage Orders</Text>
          </Group>
      </Aside>
    )
}

export default AsideProfile;
