import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { changeDrawer } from './DrawerSlice';
import { IoCloseSharp } from "react-icons/io5";
import RemoveBasketButton from '../Basket/RemoveBasket';
import { ToastContainer } from 'react-toastify';
import SingleLi from './SingleLi';
import { BasketText, BottomSide, BottomText, Container123, Display, Head } from './styled';
import calculateTotalPrice from './TotalPrice';
import useBasket from '../Services/useBasket';
import GoToCard from './GoToCard';

export default function DrawerContainer() {
  const dispatch = useDispatch();
  const open = useSelector(state => state.drawer.value);
  const ReduxBasket = useBasket(); // useBasket hook'unu burada çağırıyoruz

  // Sepetin dolu olup olmadığını kontrol et
  const hasItems = ReduxBasket?.length > 0;
  const Total = calculateTotalPrice(ReduxBasket); // Sepet öğelerinden toplam fiyatı hesapla

  // Drawer'ı açma-kapama fonksiyonu
  const handleDrawerToggle = () => {
    dispatch(changeDrawer());
  };
  return (
    <div className="container">
      <Drawer open={open} onClose={handleDrawerToggle} anchor='right'>
        <Box sx={{
          width: 450,
          overflow: "hidden",
          padding: '2rem',
          position: "relative"
        }}>
          {hasItems ? (
            <ul style={{ overflowY: "auto", overflowX: "hidden", maxHeight: "400px", marginTop: "20px" }}>
              <Head>
                <BasketText>Your Basket</BasketText>
                <IoCloseSharp onClick={handleDrawerToggle} style={{ fontSize: "2rem", cursor: "pointer" }} />
              </Head>
              {ReduxBasket.map((item, index) => (
                <SingleLi key={index} item={item} />
              ))}
            </ul>
          ) : (
            <p>Your basket is empty</p>
          )}
          
          <Container123>
            <BottomSide>
              <BottomText>{ReduxBasket?.length} Articles</BottomText>
              <BottomText>{Total}$ Total</BottomText>
            </BottomSide>
            <BottomSide>
              <BottomText>Delivery</BottomText>
              <BottomText>free</BottomText>
            </BottomSide>
            <BottomSide>
              <BottomText style={{ fontWeight: "bold" }}>TOTAL</BottomText>
              <BottomText style={{ fontWeight: "bold" }}>{Total}$</BottomText>
            </BottomSide>
            <Display>
              {hasItems ?<><GoToCard />  <RemoveBasketButton /></> : null}
            </Display>
          </Container123>
        </Box>
      </Drawer>
      <ToastContainer />
    </div>
  );
}
