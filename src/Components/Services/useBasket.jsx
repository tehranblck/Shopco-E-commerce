import { useSelector } from "react-redux";

const useBasket = () => {
   const data = useSelector((state) => state.basket.items)
   return data;
}

export default useBasket;
