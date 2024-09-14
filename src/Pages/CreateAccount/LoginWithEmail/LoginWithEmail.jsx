import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { authSlice, changeAuth } from '../../../Config/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ButtonSubmit } from '../styled';
import ScrollToTop from '../../../Components/Services/ScrollToTop';

const LoginWithEmail = ({ auth, email, pass }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();

    if (!email.includes("@")) {
      return toast.error("Lütfen geçerli bir email adresi girin.");
    }

    if (pass.length < 6) {
      return toast.error("Şifre en az 6 karakter olmalıdır.");
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      if (userCredential) {
        dispatch(changeAuth(userCredential.user));
        const userData = {
          uid: userCredential.user.uid,
          email: userCredential.user.email,
          displayName: userCredential.user.displayName,
          token: userCredential.user.accessToken,
          providerData: userCredential.user.providerData,
          photoURL: userCredential.user.photoURL,
        };
        localStorage.setItem('users', JSON.stringify(userData));
        toast.warning("Giriş başarılı!");
        navigate('/');
        window.location.reload();
      }
    } catch (error) {
      toast.error(`Hata: ${error.message}`);
    }
  };

  return (
    <>
      <ButtonSubmit onClick={handleSignIn} type="submit">Giriş Yap</ButtonSubmit>
      <ScrollToTop/>
   </>
      
  );
};

export default LoginWithEmail;
