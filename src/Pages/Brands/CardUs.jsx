import React from 'react'
import { Outer,Dot,Card,Ray,Text,Line } from './styled';

function CardUs({ item }) {
    const {sales,type}=item
    return (
        <Outer>
          <Dot />
          <Card>
            <Ray />
                <Text>{sales }</Text>
            <div>{type}</div>
            <Line className="topl" />
            <Line className="leftl" />
            <Line className="bottoml" />
            <Line className="rightl" />
          </Card>
        </Outer>
      );
}

export default CardUs