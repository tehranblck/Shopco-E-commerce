import React from 'react'
import { ScrollingText,Stripe, } from './styled';

function Scrolling() {
    const brands = ["Versace", "Luouis & Vuitton", "Dolce & Gabana","Zara","Versace", "Luouis & Vuitton", "Dolce & Gabana","Zara","Versace", "Luouis & Vuitton", "Dolce & Gabana","Zara","Versace", "Luouis & Vuitton", "Dolce & Gabana","Zara","Versace", "Luouis & Vuitton", "Dolce & Gabana","Zara" ];
  
    return (
        <Stripe>
          <ScrollingText>
            {brands.map((brand, index) => (
              <span key={index} style={{ margin: "0 50px" }}>{brand}</span>
            ))}
          </ScrollingText>
        </Stripe>
      );
  
}

export default Scrolling