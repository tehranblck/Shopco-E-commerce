import React, { useEffect, useState } from 'react'
import { Cardtt, Flex, Imgs, Name, Rate } from './styled'
import { FaStarHalfAlt1 } from './styled';
import { FaStar1 } from './styled';
import { useNavigate,useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AddBasketButton from '../../Basket/AddBasketButton';

function Card({ product }) {
  const navigate = useNavigate()
  const [isSearchPage, setIsSearchPage] = useState(false)
  
  // useEffect(() => {
  //   const location = useLocation();
  //   const path = location.pathname;
  //   setIsSearchPage(
  //     path !== '/shop/:sex' &&
  //     path !== '/shop/:sex/:id' &&
  //     path !== '/shop/:category'
  //   );
  // }, [location]);
   const { name, bigPhotoUrl, price,rate,id } = product
   const renderStars = (rate) => {
    const stars = [];
    const fullStars = Math.floor(rate); // Tam ulduzlar
    const hasHalfStar = rate % 1 !== 0; // Yarım ulduz var mı?

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar1 key={i} />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt1 key="half" />);
    }

    return stars;
  };
  const sex=useSelector(state=>state.sex.value)

  return (
    <Cardtt $isSearchPage={isSearchPage}   /*onClick={() => navigate(`/shop/${sex}/${product.name}`)}*/>
      <Imgs src={bigPhotoUrl} alt={name} />
      <Flex>
      <Name>{name}</Name>
      <div style={{display:"flex"}}>{renderStars(rate)} <Rate> {rate }/5</Rate></div> 
      <p>{price} $</p> 
      <AddBasketButton item={product} />
      </Flex>
    </Cardtt>
  );
}

export default Card;