import React from 'react'
import CardUs from './CardUs'
import { BrandsContainer, Cards, CardSide, H2 } from './styled';
import Brand from './Brand';
import DrawerContainer from '../../Components/Drawer/Drawer';

function Brands() {
    const data = [
        {
            sales: "5k+",
            type: "Sales"
        },
        {
            sales: "4.5k+",
            type: "Happy customers"
        },
        {
            sales: "10k+",
            type: "Products"
        }
    ];
  return (
      <BrandsContainer>
         <H2>About SHOP.CO</H2>
          <CardSide>
          
              <Cards>
                  
              {
                  data.map((item, index) => (
                      <CardUs key={index} item={item} />
                  ))
              }
             </Cards>
          </CardSide>
          <div className="BrandSide">
              <H2>Partner Brands</H2>
              <Brand/>
          </div>
          
          <DrawerContainer/>
    </BrandsContainer>
  )
}

export default Brands