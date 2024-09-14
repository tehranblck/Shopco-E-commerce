import { updateProfile as firebaseUpdateProfile } from "firebase/auth";
import { auth } from "../../Firebase";
import { GetLocalStorage } from "../Services/GetLocalStorageAdd";

const updateUserProfile = (displayName, photoURLL) => {
    console.log(photoURLL)
    firebaseUpdateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURLL
    }).then(() => {
        console.log("Profile updated!");
   
        
        // LocalStorage'dan kullanıcı verisini al ve varsa işle
        let user = GetLocalStorage()
        console.log(user)
        
        
        if (user) {
            user.photoURL = photoURLL;
          
        }
        
        // Gerekirse sayfayı yenileyin
        // window.location.reload();
        
    }).catch((error) => {
        console.error("An error occurred: ", error);
    });
};

export default updateUserProfile;
