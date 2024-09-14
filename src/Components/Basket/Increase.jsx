import { setBasket } from "./basketSlice"; 

const Increase = (item, dispatch, basket) => {
    // Önce sepetin kopyasını alıyoruz
    let updatedBasket = [...basket];

    // İlgili item'i sepette bul
    const existingItemIndex = updatedBasket.findIndex(basketItem => basketItem.id === item.id);

    if (existingItemIndex !== -1) {
        // Eğer ürün sepette varsa, kopyasını oluşturup sayıyı artır
        const updatedItem = { ...updatedBasket[existingItemIndex], count: updatedBasket[existingItemIndex].count + 1 };
        updatedBasket[existingItemIndex] = updatedItem;
    } else {
        // Eğer ürün sepette yoksa, yeni bir ürün olarak sepete ekle
        updatedBasket.push({
            ...item,
            count: 1,
        });
    }

    // Güncel sepeti localStorage'e kaydet
    localStorage.setItem('baskets', JSON.stringify(updatedBasket));

    // Redux state'i güncellemek için dispatch kullanıyoruz
    dispatch(setBasket(updatedBasket));
};

export default Increase;
