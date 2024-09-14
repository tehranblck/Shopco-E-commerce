import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CustomTabPanel from './CustomTabPanel';
import { useSelector } from 'react-redux';
import SingleLi from '../../Components/Drawer/SingleLi';
import CustomTabPanelNormal from './CustomTabPanelNormal';

function TabsComponent() {
    const basket = useSelector(state => state.basket.items);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // LocalStorage'dan sepet verilerini al
    const LocalStorageData = JSON.parse(localStorage.getItem('baskets')) || [];

    // `basket` dizisi varsa kullan, yoksa `LocalStorageData` kullan
    const Basket = basket.length > 0 ? basket : LocalStorageData;

    return (
        <Box sx={{ width: '100%', paddingLeft: '2rem' }}>
            <Box sx={{ marginBottom:"10px", borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Active Orders" />
                    <Tab label="Completed Orders" />
                    <Tab label="Pending" />
                </Tabs>
            </Box>
            <CustomTabPanel  value={value} index={0}>
          {LocalStorageData.length > 0 ? LocalStorageData.map((item, index) => (
                  <SingleLi key={index} item={item}/>
                )): "No orders found"}
            </CustomTabPanel>
            <CustomTabPanelNormal  value={value} index={1}>
                Not Completed Orders
            </CustomTabPanelNormal>
            <CustomTabPanelNormal value={value} index={2}>
                Pending
            </CustomTabPanelNormal>
        </Box>
    );
}

export default TabsComponent;
