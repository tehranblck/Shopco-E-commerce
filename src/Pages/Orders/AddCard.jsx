import React, { useState } from 'react';
import { Aside, Btn, ButtonSubmit, Infos, Input, InputSelf, InputSize, OrderSummary, Texts, Total } from './styled';
import calculateTotalPrice from '../../Components/Drawer/TotalPrice';
import useBasket from '../../Components/Services/useBasket';
import { toast } from 'react-toastify';

function AddCard() {
    const [shipping, setShipping] = useState(false);  
    const [code, setCode] = useState('');
    const[isApplied,setIsApplied]=useState(false)
    const [total, setTotal] = useState(0); // total state olarak tanımlandı
    const basketItems = useBasket();
    
    // total'ı state'te tutup ilk render'da hesaplayın
    React.useEffect(() => {
        const calculatedTotal = Number(calculateTotalPrice(basketItems)).toFixed(2);
        setTotal(calculatedTotal);
    }, [basketItems]);

    const ProductsLength = basketItems?.reduce((total, item) => total + item.count, 0);  

    const COUPON_CODE = 'LINKEDIN20';

    const HandleCode = () => {
        if (code === COUPON_CODE) {
            const discountedTotal = (total - (total / 100) * 20).toFixed(2); // Doğru indirim hesaplaması
            setTotal(discountedTotal); // total güncellendi
            toast.success('Applied 20% Discount');
            setIsApplied(true)
        } else {
            toast.warning("wrong code");
        }
    };

    // shipping ile yeni fiyat hesaplaması
    const totalWithShipping = shipping ? (Number(total) + 5).toFixed(2) : total;

    return (
        <Aside>
            <OrderSummary>Order Summary</OrderSummary>
            <Infos>
                <Total>
                    <p>{ProductsLength} Product</p>
                    <p>{total}$</p> {/* Toplam fiyat state'den alındı */}
                </Total>
                <Input>
                    <Texts>Shipping</Texts>
                    <InputSize 
                        value={shipping} 
                        onChange={(e) => setShipping(e.target.value === 'true')}  // Değer boolean olarak set ediliyor
                        name="select" 
                        id=""
                    >
                        <option value="false">Free Shipping</option>
                        <option value="true">Lux Shipping +5$</option>
                    </InputSize>
                </Input>
                <Input >
                    <Texts>Promo Code</Texts>
                    <InputSelf disabled={isApplied}  value={code} onChange={(e) => { setCode(e.target.value) }} type="text" placeholder='ENTER YOUR CODE' />
                    <Btn disabled={isApplied}  onClick={HandleCode}>Apply</Btn>
                </Input>
            </Infos>
            <Total>
                <Texts>Total cost</Texts>
                <p>{totalWithShipping}$</p> {/* Shipping true ise 5$ eklenir */}
            </Total>
            <div>
                <ButtonSubmit>CHECKOUT</ButtonSubmit>
            </div>
        </Aside>
    );
}

export default AddCard;
