import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Item ,Container} from './styled';

function Soc_icons() {
  return (
      <Container>
          <Item><FaXTwitter /></Item>
          <Item><FiFacebook /></Item>
          <Item><FaInstagram /></Item>
          <Item><FiGithub/></Item>
    </Container>
  )
}

export default Soc_icons