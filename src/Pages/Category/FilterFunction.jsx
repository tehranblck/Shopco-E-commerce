import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoaderAnimation from '../../Components/LoaderAnimation';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../Firebase';
import { setProducts } from '../../Components/productSlice';

const FilterFunction = (sex) => {
  const dispatch = useDispatch();
  const ref = collection(db, "products");
  const [data, loading, error] = useCollectionData(ref);
  
  const [showData, setShowData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null); 
  const [selectedSize, setSelectedSize] = useState(null); 
  const [selectedStyle, setSelectedStyle] = useState(null); 
  
  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  const products = useSelector(state => state.products.value);

  useEffect(() => {
    if (products.length > 0) {
      const filteredBySex = sex ? products.filter(product => product.sex === sex) : products;
      setShowData(filteredBySex);
    }
  }, [products, sex]);

  const applyFilters = () => {
    let filteredProducts = [...products]; // Tüm ürünlerden başla
    if (sex) {
      filteredProducts = filteredProducts.filter(product => product.sex === sex);
    }
    if (selectedSize) {
      filteredProducts = filteredProducts.filter(item => item.Sizes.includes(selectedSize));
    }
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(item => item.category === selectedCategory);
    }
    if (selectedStyle) {
      filteredProducts = filteredProducts.filter(item => item.tags.includes(selectedStyle));
    }
    setShowData(filteredProducts);
    filteredProducts.map((item)=>{item.Sizes})
  };

  const filterByCategory = (category) => {
    setSelectedCategory(prev => prev === category ? null : category);
  };

  const filterBySize = (size) => {
    setSelectedSize(prev => prev === size ? null : size);
  };

  const filterByStyle = (style) => {
    setSelectedStyle(prev => prev === style ? null : style);
  };
  
  const ResetFilters = () => {
    setSelectedCategory(null);
    setSelectedSize(null);
    setSelectedStyle(null);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, selectedSize, selectedStyle, sex]);

  if (loading) {
    return <LoaderAnimation />;
  }

  if (error) {
    console.error(error);
    return <div>Veri yüklenirken hata oluştu</div>;
  }

  return { 
    showData, 
    filterByCategory, 
    selectedCategory, 
    filterBySize,
    selectedSize,
    filterByStyle,
    selectedStyle,
    ResetFilters,
  };
}

export default FilterFunction;
