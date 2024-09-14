import React, { useEffect } from 'react';
import { Aside, Filter, Filters, Group, Icon, Text, Size, Sizes, Styles, Styler, ButtonFilter } from './styled';
import { FaFilter, FaChevronRight } from 'react-icons/fa';
import FilterFunction from './FilterFunction';
import { useSelector, useDispatch } from 'react-redux';
import { changeSexState } from '../../Components/SexSlice';
import { addData } from '../../Components/showDataSlice';
import { useParams, useLocation } from 'react-router-dom';
import Sort from '../../Components/SortButton';

function AsideComponent() {
    const { sex } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();
    
    // Filtreleme işlemleri için FilterFunction'u çağırın
    const { 
        filterByCategory, 
        selectedCategory, 
        filterBySize, 
        selectedSize, 
        filterByStyle, 
        selectedStyle, 
        ResetFilters, 
        showData 
    } = FilterFunction(sex);

   
    // const showData1 = showData.sort((a, b) => a.price - b.price)
    // URL değiştiğinde filtreleri güncellemek için useEffect kullanın
    useEffect(() => {
        dispatch(changeSexState(sex));
        dispatch(addData(showData));
    }, [sex, showData, dispatch]);

    // Filtrelerin sıfırlanması için useEffect kullanımı
    useEffect(() => {
        // ResetFilters();
        console.log("first")
    }, [location.pathname]);
    
    return (
        <Aside>
            
            <Filters>
                <Filter>Filters</Filter>
                <FaFilter style={{ color: "lightgray" }} />
            </Filters>
            <div className="categories" style={{ borderBottom: "1px solid lightgray" }}>
                <Group onClick={() => { filterByCategory("t-shirt"); }}>
                    <Text className={selectedCategory === "t-shirt" ? "active" : null}>T-shirts</Text>
                    <Icon />
                </Group>
                <Group onClick={() => { filterByCategory("short"); }}>
                    <Text className={selectedCategory === "short" ? "active" : null}>Shorts</Text>
                    <Icon />
                </Group>
                <Group onClick={() => { filterByCategory("shirts"); }}>
                    <Text className={selectedCategory === "shirts" ? "active" : null}>Shirts</Text>
                    <Icon />
                </Group>
                <Group onClick={() => { filterByCategory("hoodies"); }}>
                    <Text className={selectedCategory === "hoodies" ? "active" : null}>Hoodies</Text>
                    <Icon />
                </Group>
                <Group onClick={() => { filterByCategory("jeans"); }} style={{ marginBottom: "10px" }}>
                    <Text className={selectedCategory === "jeans" ? "active" : null}>Jeans</Text>
                    <Icon />
                </Group>
            </div>
            <div className="sizes">
                <Filter style={{ marginTop: "10px" }}>Sizes</Filter>
                <Sizes style={{ marginTop: "10px", borderBottom: "1px solid lightgray" }}>
                    <Size onClick={() => { filterBySize("XS"); }} style={{ backgroundColor: selectedSize === "XS" ? "black" : "lightgray" }}>XSmall</Size>
                    <Size onClick={() => { filterBySize("S"); }} style={{ backgroundColor: selectedSize === "S" ? "black" : "lightgray" }}>Small</Size>
                    <Size onClick={() => { filterBySize("M"); }} style={{ backgroundColor: selectedSize === "M" ? "black" : "lightgray" }}>Medium</Size>
                    <Size onClick={() => { filterBySize("L"); }} style={{ backgroundColor: selectedSize === "L" ? "black" : "lightgray" }}>Large</Size>
                    <Size onClick={() => { filterBySize("XL"); }} style={{ backgroundColor: selectedSize === "XL" ? "black" : "lightgray" }}>XLarge</Size>
                    <Size onClick={() => { filterBySize("XXL"); }} style={{ backgroundColor: selectedSize === "XXL" ? "black" : "lightgray" }}>XXLarge</Size>
                </Sizes>
            </div>
            <div className="dress_style">
                <Filter>Dress Styles</Filter>
                <Styles>
                    <Styler className={selectedStyle === "casual" ? "active" : null} onClick={() => { filterByStyle("casual") }}>Casual <FaChevronRight /></Styler>
                    <Styler className={selectedStyle === "formal" ? "active" : null} onClick={() => { filterByStyle("formal") }}>Formal <FaChevronRight /></Styler>
                    <Styler className={selectedStyle === "party" ? "active" : null} onClick={() => { filterByStyle("party") }}>Party <FaChevronRight /></Styler>
                    <Styler className={selectedStyle === "sport" ? "active" : null} onClick={() => { filterByStyle("sport") }}>Sport <FaChevronRight /></Styler>
                </Styles>
            </div>
            <ButtonFilter onClick={() => { ResetFilters(); }}>Reset filters</ButtonFilter>
        </Aside>
    );
}

export default AsideComponent;
