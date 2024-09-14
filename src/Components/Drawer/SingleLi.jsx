import React from 'react';
import { Image, Li, Name, Price, Size, Xclose } from './styled';
import { IoIosRemoveCircle } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import Decrease from '../Basket/Decrease';
import useBasket from '../Services/useBasket';
import Increase from '../Basket/Increase';

function SingleLi({ item }) {
    const { name, id, Sizes, price, bigPhotoUrl, count } = item;
    const dispatch = useDispatch();
    const basket = useBasket()

    // Sepete öğe ekleme
    const handleAdd = () => {
        Increase(item,dispatch,basket);  // `item` parametresi ile addItem fonksiyonunu çağırın
    };

    // Sepetten öğe çıkarma
    const handleDecrease = () => {
        Decrease(item, dispatch, basket);
    };

    return (
        <Li>
            <Image src={bigPhotoUrl} alt={name} />
            <div>
                <Name>{name}</Name>
                <Size>{Sizes}</Size>
                <Price>{count} X {price}$</Price>
                <IoMdAddCircle onClick={handleAdd} style={{fontSize:"1.4rem", cursor:"pointer"}} />
                <IoIosRemoveCircle onClick={handleDecrease} style={{fontSize:"1.4rem", cursor:"pointer"}} />
            </div>
            
        </Li>
    );
}

export default SingleLi;
