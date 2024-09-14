import React from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ButtonSubmit } from '../styled';

const Register = ({ auth, email, pass }) => {
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (!email.includes("@")) {
      return toast.error("Lütfen geçerli bir email adresi girin.");
    }

    if (pass.length < 6) {
      return toast.error("Şifre en az 6 karakter olmalıdır.");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      if (userCredential) {
        toast.success("Kayıt başarılı!");
        navigate('/sign-in');
      }
    } catch (error) {
      toast.error(`Hata: ${error.message}`);
    }
  };

  return (
      <ButtonSubmit onClick={handleSignUp} type="submit">Kayıt Ol</ButtonSubmit>
  );
};

export default Register;
