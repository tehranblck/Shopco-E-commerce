import { setBasket } from "./basketSlice"; 

const Decrease = (item, dispatch, basket) => {
    // Önce sepetin kopyasını alıyoruz
    let updatedBasket = [...basket];

    // İlgili item'i sepette bul
    const existingItemIndex = updatedBasket.findIndex(basketItem => basketItem.id === item.id);

    if (existingItemIndex !== -1) {
        const existingItem = updatedBasket[existingItemIndex];
        
        if (existingItem.count > 1) {
            // Eğer ürün sepette varsa ve sayısı 1'den büyükse, kopyasını oluşturup sayıyı azalt
            const updatedItem = { ...existingItem, count: existingItem.count - 1 };
            updatedBasket[existingItemIndex] = updatedItem;
        } else {
            // Eğer ürünün sayısı 1 ise, ürünü sepetten kaldır
            updatedBasket = updatedBasket.filter(basketItem => basketItem.id !== item.id);
        }
    }

    // Güncel sepeti localStorage'e kaydet

    // Redux state'i güncellemek için dispatch kullanıyoruz
    dispatch(setBasket(updatedBasket));
};

export default Decrease;
