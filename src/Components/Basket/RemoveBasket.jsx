import React from 'react';
import { ClearUserBasket } from '../../Firebase';
import { useDispatch } from 'react-redux';
import { Button, RemoveButton } from '../Drawer/styled';
import { clearCart } from '../Basket/basketSlice';  // Redux eylemini ekleyin

function RemoveBasketButton() {
    const dispatch = useDispatch();

    // `userId`'yi `localStorage` yerine güvenilir bir kaynaktan almak daha iyidir
    const userId = JSON.parse(localStorage.getItem('users'))?.uid;

    const Clear = async () => {
        try {
            if (userId) {
                await ClearUserBasket(userId,dispatch);  // Eğer `ClearUserBasket` asenkron ise `await` kullanın
                dispatch(clearCart());  // Redux state'ini sıfırlama
                localStorage.removeItem('baskets');  // Sepeti localStorage'dan temizleme
            } else {
                console.error("User ID not found");
            }
        } catch (error) {
            console.error("Error clearing user basket:", error);
        }
    };

    return (
        <RemoveButton onClick={Clear}>Remove All</RemoveButton>
    );
}

export default RemoveBasketButton;
