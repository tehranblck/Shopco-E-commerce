import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from './showDataSlice'; // Redux işlemleri için import edin
import { sortByPrice } from './SortUlits';


export default function NativeSelectDemo() {
  const dispatch = useDispatch();
  

   
  const showData = useSelector(state => state.data.value);

 

//  const sortedData = sortByPrice(showData);
  // dispatch(addData(sortedData));
  


  const [selectedValue, setSelectedValue] = useState('');
  useEffect(() => {
  selectedValue==="price"? dispatch(addData(sortedData))     :null
},[])
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    console.log(selectedValue)
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Sort By
        </InputLabel>
        <NativeSelect
  value={selectedValue} // State tarafından kontrol ediliyor
  onChange={handleChange} // State güncelleniyor
  inputProps={{
    name: 'age',
    id: 'uncontrolled-native',
  }}
>
  <option value={"date"}>Date</option>
  <option value={"price"}>Price</option>
  <option value={"rate"}>Rate</option>
</NativeSelect>

      </FormControl>
    </Box>
  );
}