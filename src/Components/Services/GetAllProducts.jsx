import React from 'react'
import { useSelector } from 'react-redux'

function GetAllProducts() {
    const data = useSelector(state => state.products).value;
    return data
}

export default GetAllProducts