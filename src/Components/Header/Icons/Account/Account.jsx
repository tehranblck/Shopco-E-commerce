import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { saveUserBasket } from '../../../../Firebase';
import { toast } from 'react-toastify';
import { getAuth, signOut } from "firebase/auth";
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BasicMenu({ name }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const HandleLog = () => {
    const currentUser = JSON.parse(localStorage.getItem('users')); // Kullanıcıyı çıkıştan önce kaydediyoruz
    const data = JSON.parse(localStorage.getItem('baskets'));
  
    handleClose();
  
    if (currentUser) {
      saveUserBasket(currentUser.uid, data) // Çıkış yapmadan önce sepeti kaydediyoruz
        .then(() => {
          signOut(auth) // Sepet kaydedildikten sonra çıkış yapıyoruz
            .then(() => {
              toast.warning("Çıkış yapıldı");
              localStorage.clear();
              window.location.reload();
            })
            .catch((error) => {
              console.error("Çıkış sırasında hata oluştu:", error);
              toast.error("Çıkış yapılamadı.");
            });
        })
        .catch((error) => {
          console.error("Sepet kaydedilirken hata oluştu:", error);
          toast.error("Sepet kaydedilemedi.");
        });
    }
  };

  const handleGo = (link) => () => {
    handleClose();
    if (auth) {
      navigate(link);
    } else {
      navigate('/');
    }
  };

  return (
    <div>
      <Button   
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{fontSize:"0.8rem", display:"flex", alignItems:"center", border:"2px solid lightgray"}}
      >
        {name} <FaAngleDown style={{fontSize:"1.4rem"}}/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleGo('/my-account')}>Profile</MenuItem>
        <MenuItem onClick={handleGo('/orders')}>My Orders</MenuItem>
        <MenuItem onClick={HandleLog}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
