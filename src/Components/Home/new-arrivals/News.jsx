import React, { useEffect, useState } from 'react';
import Card from './Card'; // `Card` bileşenini büyük harfle içe aktarın
import { ButtonAll, Cardsss, H2 } from './styled';
import GetAllProducts from '../../Services/GetAllProducts';
import ButtonNavigate from '../TopSelling/ButtonNavigate';

function News() {
   
  
    const data=GetAllProducts()//datalari cekiyoruz

    const [selected, setSelected] = useState([]); ///stateimizi hazirliyoruz

    useEffect(() => {
        if (data.length > 0) {
            const selectedProducts = [data[32], data[19], data[26], data[25]];
            setSelected(selectedProducts);
        }
    }, [data]); //data geldiginde icinden belirli urunleri secip state e gonderiyoruz

    return (
        <div style={{display:"flex", flexDirection:"column", borderBottom:"2px solid lightgray"}}>
            <H2>New Arrivals</H2>
            <Cardsss>
            {//state den urunleri mapleyip gosterime sunuyoruz
                selected.map((product) => (
                    <Card key={product.name} product={product} /> 
                ))
            }
            </Cardsss>
            <ButtonNavigate link={'/new-arrivals'}>Show All</ButtonNavigate>
        </div>
    );
}

export default News;
