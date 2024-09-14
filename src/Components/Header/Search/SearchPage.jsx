import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Itemss, SearchContainerr, SearchedResultText } from './styled';
import Card from '../../Home/new-arrivals/Card';
import SearchAllProducts from '../../Services/SearchAllProducts';
import { GetData } from './Getdata'; // yeni hook'u import et
import LoaderAnimation from '../../LoaderAnimation';
import DrawerContainer from '../../Drawer/Drawer';
import GetAllProducts from '../../Services/GetAllProducts';

function SearchPage() {
  const location = useLocation();
  const { pathname, search } = location;
  const [page, setPage] = useState('');

  useEffect(() => {
    if (pathname === '/new-arrivals') {
      setPage('news');
    } else if (pathname === '/top-sellings') {
      setPage('tops');
    } else {
      setPage('search');
    }
  }, [pathname]);

  const [dataToShow, setDataToShow] = useState([]);
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('query');
  const products = useSelector(state => state.products.value); // Redux store'dan ürünleri çek
  const data=JSON.parse(localStorage.getItem('productList'))

  const { data: firestoreProducts, loading, error } = GetData();

  useEffect(() => {
    let filteredProducts = [];

    if (products && products.length > 0 && searchQuery) {
      filteredProducts = SearchAllProducts(products, searchQuery);
    } if(firestoreProducts && searchQuery) {
      filteredProducts = SearchAllProducts(firestoreProducts, searchQuery);
    } if (page === 'news'&& data) {
      filteredProducts=data.reverse()
    } if (page === 'tops' && data) {
      filteredProducts = data.sort((a, b) => a.desc - b.desc);

    }

    setDataToShow(filteredProducts);
  }, [searchQuery, products, firestoreProducts,pathname]); // searchQuery, products, firestoreProducts değiştiğinde çalışır

  if (loading) return <div>{<LoaderAnimation />}</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <SearchContainerr>
      <SearchedResultText>
        {page === 'search' ? (
          `Search results for: ${searchQuery}`
        ) : page === 'news' ? (
          <h2>New Arrivals</h2>
        ) : (
          <h2>Top Sellings</h2>
        )}
      </SearchedResultText>
      <Itemss>
        {dataToShow.length > 0 ? (
          dataToShow.map((item, index) => (
            <Card key={index} product={item} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </Itemss>
      <DrawerContainer />
    </SearchContainerr>
  );
}

export default SearchPage;
