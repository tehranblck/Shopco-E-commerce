import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiSolidShow } from "react-icons/bi";
import SearchAllProducts from '../../Services/SearchAllProducts';
import Previews from './Previews';
import { setSearched } from './SearchSlice';
import GetAllProducts from '../../Services/GetAllProducts';
import { InputWrapper, Input, IconButton, SvgIcon } from './styled';

function Search() {
  const data = GetAllProducts();
  const [search, setSearch] = useState(""); // Arama input değeri
  const [filteredItems, setFilteredItems] = useState([]); // Filtrelenmiş ürünler
  const [showPreviews, setShowPreviews] = useState(false); // Previews gösterilip gösterilmeyeceği
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef(null); // Input referansı oluşturuluyor
  const containerRef = useRef(null); // Arama container referansı oluşturuluyor

  // Handle key down event
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Enter tuşunun default davranışını engelle
      
      setShowPreviews(false);
      dispatch(setSearched(filteredItems));

      // Input odaklanmasını kaldırmak için blur() metodu çağırılır
      if (inputRef.current) {
        inputRef.current.blur();
      }

      // Arama sonuçları sayfasına yönlendirme
      navigate(`/search-results?query=${search}`);
      setSearch('');
    }
  };

  // Handle click event
  const handleClick = () => {
    setShowPreviews(false);
    dispatch(setSearched(filteredItems));

    // Input odaklanmasını kaldırmak için blur() metodu çağırılır
    if (inputRef.current) {
      inputRef.current.blur();
    }

    // Arama sonuçları sayfasına yönlendirme
    navigate(`/search-results?query=${search}`);
    setSearch('');
  };

  // Handle clicks outside of the search component
  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setShowPreviews(false);
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const FilteredData = SearchAllProducts(data, search);
    setFilteredItems(FilteredData);
  }, [search, data]);

  const previews = filteredItems.slice(0, 5);

  return (
    <InputWrapper ref={containerRef}>
      <IconButton onClick={handleClick}> 
        <SvgIcon xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path 
            strokeLinejoin="round" 
            strokeLinecap="round" 
            strokeWidth="1.5" 
            stroke="#fff" 
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" 
          />
          <path 
            strokeLinejoin="round" 
            strokeLinecap="round" 
            strokeWidth="1.5" 
            stroke="#fff" 
            d="M22 22L20 20" 
          />
        </SvgIcon>
      </IconButton>
      <Input 
        ref={inputRef} // Input referansını belirleyin
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        onFocus={() => setShowPreviews(true)} 
        onKeyDown={handleKeyDown} 
        autoComplete="off" 
        placeholder="Search for products..." 
        name="text" 
        type="text" 
      />
      {showPreviews && search && (
        <div className="previews">
          {previews.length > 0 ? previews.map((item, index) => (
            <Previews key={index} product={item} /> 
          )) : "No matches Found"}

          {filteredItems.length > 5 && (
            <button onMouseDown={handleClick} className="warning">
              Show All Matched products <BiSolidShow style={{fontSize:"1.5rem"}}/>
            </button>
          )}
        </div>
      )}
    </InputWrapper>
  );
}

export default Search;
