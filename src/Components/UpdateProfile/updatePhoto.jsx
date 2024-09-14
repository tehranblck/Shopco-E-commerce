import { useEffect, useState } from "react";
import { auth, Upload } from "../../Firebase";
import { useAuth } from '../../Pages/CreateAccount/GetAuth/useAuth'
import { ButtonSetPhoto, ButtonUpload, ContainerPhoto, Div, Image, SetPhoto } from "../AsideMyAccount.jsx/styled";
import { ToastContainer } from "react-toastify";
import { GetAuthFromLocalStorage } from "../Services/GetLocalStorageAdd";

const UpdatePhoto = () => {
    const currentUser = useAuth();
    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [photoURL, setPhotoURL] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb51ZwKCKqU4ZrB9cfaUNclbeRiC-V-KZsfQ&s');

    useEffect(() => {
        if (currentUser && currentUser.photoURL) {
            setPhotoURL(currentUser.photoURL);
        }
    }, [currentUser]);

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setPhoto(e.target.files[0]);
        }
    };

    const handleClick = async () => {
        if (photo) {
            const newPhotoURL = await Upload(photo, currentUser, setLoading);
            if (newPhotoURL) {
                let users = GetAuthFromLocalStorage();
                if (users) {
                    users.photoURL = newPhotoURL;
                    localStorage.setItem('users', JSON.stringify(users));
                    setPhotoURL(newPhotoURL); // UI'yi güncelle
                }
                window.location.reload(); // Sayfayı yenile
            }
        }
    };

    const handleButtonClick = () => {
        document.getElementById("fileInput").click();
    };

    return (
        <ContainerPhoto>
            <SetPhoto>
                <Image src={photoURL} alt="User profile" />
                <Div>
                    <input style={{ display: "none" }} onChange={handleChange} id="fileInput" type="file" accept="image/*" />
                    <ButtonSetPhoto onClick={handleButtonClick} disabled={loading}>Set photo</ButtonSetPhoto>
                </Div>
                <ButtonUpload onClick={handleClick} disabled={loading}>Upload</ButtonUpload>
                <ToastContainer />
            </SetPhoto>
        </ContainerPhoto>
    );
};

export default UpdatePhoto;




