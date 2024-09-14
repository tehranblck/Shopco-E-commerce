// TotalPrice.js
const calculateTotalPrice = (basket) => {
    const total = basket.reduce((acc, item) => acc + (item.count * item.price), 0);
    return total.toFixed(2); 
  };
  
  export default calculateTotalPrice;
  