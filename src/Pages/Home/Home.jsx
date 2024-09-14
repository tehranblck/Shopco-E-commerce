import React, { useEffect, useState } from 'react';
import Heroside from '../../Components/Home/Heroside/Heroside';
import Scrolling from '../../Components/Home/Scrolling_brands/Scrolling';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { auth, db } from '../../Firebase';
import { setProducts } from '../../Components/productSlice';
import { useSelector, useDispatch } from 'react-redux';
import News from '../../Components/Home/new-arrivals/News';
import TopSelling from '../../Components/Home/TopSelling/TopSelling';
import Categories from '../../Components/Home/categories/Categories';
import 'react-toastify/dist/ReactToastify.css';
import LoaderAnimation from '../../Components/LoaderAnimation';
import { ToastContainer } from 'react-toastify';
import DrawerContainer from '../../Components/Drawer/Drawer';
import GetBasketInLogin from '../../Components/GetBasketInLogin/GetBasket';
import { setBasket } from '../../Components/Basket/basketSlice';
import Testimonials from '../../Components/Home/testimonials/Testimonials';
import ScrollToTop from '../../Components/Services/ScrollToTop';

function Home() {
  const dispatch = useDispatch();
  const ref = collection(db, "products");
  const [data, loading, error] = useCollectionData(ref);

  // Redux store'dan products'ı getiriyoruz
  const products = useSelector(state => state.products);

  // Kullanıcının ilk giriş yapıp yapmadığını kontrol etmek için state
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // Auth context'ten auth objesini alıyoruz
  const currentUser = auth.currentUser;

  // firebaseden gelen dataları setProducts ile reduxa gönderiyoruz.
  useEffect(() => {
    const fetchBasket = async () => {
      if (currentUser && !isUserLoggedIn) {
        const basket = await GetBasketInLogin(); // Asenkron işlemi bekliyoruz
        if (basket?.length > 0) {
          console.log("salam");
          localStorage.setItem('baskets', JSON.stringify(basket)); // Sepeti localStorage'a kaydediyoruz
          dispatch(setBasket(basket)); // Sepeti redux'a kaydediyoruz
          setIsUserLoggedIn(true); // Kullanıcının giriş yaptığını belirtiyoruz
        }
      }
    };

    if (data) {
      dispatch(setProducts(data));
      fetchBasket(); // Asenkron işlemi başlatıyoruz
    }
  }, [data, dispatch, currentUser, isUserLoggedIn]);

  if (loading) {
    return <LoaderAnimation />;
  }

  if (error) {
    console.error(error);
    return <div>Veri yüklenirken hata oluştu</div>;
  }

  return (
    <main style={{overflowY:"hidden"}}>
      <ToastContainer />
      
      <Heroside />
      <Scrolling />
      <News />
      <TopSelling />
      <Categories/>
      <Testimonials />
      <DrawerContainer />
      <ScrollToTop/>
    </main>

  );
}

export default Home;
