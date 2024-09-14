import React, { useState,useEffect } from 'react'
import { ButtonAll,  Cardsss, Divider, H2 } from '../new-arrivals/styled';
import { useSelector } from 'react-redux';
import Card from '../new-arrivals/Card';
import { Container } from '../testimonials/styled';
import GetAllProducts from '../../Services/GetAllProducts';
import ButtonNavigate from './ButtonNavigate';


function TopSelling() {
    const data=GetAllProducts() //datalari cekiyoruz
     const [selected, setSelected] = useState([]);//gosterilecek urunler icin state tanimliyoruz
 
     useEffect(() => {
         if (data.length > 0) {
             const selectedProducts = [data[9], data[8], data[23], data[5]];
             setSelected(selectedProducts);
         }
     }, [data]); //data geldiginde icinden belirli urunleri secip state e gonderiyoruz
  return (
      <div style={{display:"flex",flexDirection:"column",borderBottom:"1px solid lightgray"}}>
          
          <H2>Top Selling</H2>
          <Cardsss>
            {
                selected.map((product) => (
                    <Card key={product.name} product={product} /> 
                ))
            }
            </Cardsss>
          <ButtonNavigate link={'/top-sellings'} />
          
          
    </div>
  )
}

export default TopSelling