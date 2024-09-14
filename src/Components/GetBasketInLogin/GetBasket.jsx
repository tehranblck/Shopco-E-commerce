import { getAuth } from "firebase/auth";
import { getUserBasket } from "../../Firebase";
import auth from "../../Config/auth";
const GetBasketInLogin = async (auth) => {
    const uid = JSON.parse(localStorage.getItem('users')).uid
    try {
       
        const basket = await getUserBasket(uid);  // Asenkron işlemi await ile yakalıyoruz
        
        return basket;
    } catch (error) {
        console.error("Basket retrieval failed", error);
        return null;
    }
}

export default GetBasketInLogin;
