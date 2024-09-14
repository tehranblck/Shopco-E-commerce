import React, { useState, useEffect } from 'react';
import { FaChevronRight } from "react-icons/fa";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Container,  Main, TextCenter, Products } from './styled';
import 'rsuite/dist/rsuite-no-reset.min.css';
import './style.css';
import Card from '../../Components/Home/new-arrivals/Card';
import Pagination from '../Category/Pagination';
import FilterFunction from './FilterFunction';
import LoaderAnimation from '../../Components/LoaderAnimation';
import AsideComponent from './AsideComponent'; 
import { useSelector } from 'react-redux';
import SortButton from '../../Components/SortButton';
import NativeSelectDemo from '../../Components/SortButton';
import DrawerContainer from '../../Components/Drawer/Drawer';

function Category() {
  const [currentData, setCurrentData] = useState([]);
  const location = useLocation();
  const sex = useSelector(state => state.sex.value)
const showData=useSelector(state=>state.data.value)
  
 

  let TextCen;
  if (sex === "woman") {
    TextCen="Woman"
  } else if (sex === "man"){
    TextCen="Man"
  } else {
    TextCen="Shop"
  }
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const timer=setTimeout(() => {
      setVisible(false)
      
    }, 2000);
    return () => clearTimeout(timer); 
  },[currentData])

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  // Veriler yüklendiğinde `currentData`'yı güncelle
  useEffect(() => {
    if (showData && showData.length > 0) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = currentPage * itemsPerPage;
      setCurrentData(showData.slice(startIndex, endIndex));
    } else {
      setCurrentData([]);
    }
  }, [showData, currentPage, itemsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Container>
      <div style={{ padding: "10px" }} className="pages">
      <span style={{ fontFamily: 'satoshi', display: "flex", alignItems: "center" }}>
  Home<FaChevronRight />Shop
  {TextCen !== "Shop" && TextCen ? (
    <>
      <FaChevronRight />
      {TextCen}
    </>
  ) : null}
</span>
      </div>
      <div style={{ display: "flex" }} className="content">
       <AsideComponent/>
        <Main>
          <div style={{ display: "flex", justifyContent: "space-between" }} className="top">
            <TextCenter>{TextCen }</TextCenter>
            <div className="right_bar">
              
              <NativeSelectDemo/>
             
            </div>
          </div>
          <Products>
            {
              currentData.length === 0 ? (
               
              visible? <LoaderAnimation/> :"No matches product"
                
               
              ) : currentData.map((item, index) => (
                <Card key={index} product={item} />
              ))
            }
          </Products>
          <Pagination
            totalPages={showData?  Math.ceil(showData.length / itemsPerPage) :null} // Toplam sayfa sayısını showData üzerinden hesapla
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </Main>
      </div>
      <DrawerContainer/>

    </Container>
  );
}

export default Category;