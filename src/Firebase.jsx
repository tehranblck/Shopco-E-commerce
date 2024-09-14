import { initializeApp } from "firebase/app";
import { getAuth, updateProfile } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import { getDatabase, ref, set, get ,remove} from "firebase/database";
import { clearCart } from "./Components/Basket/basketSlice";



// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDf-PJm-F0Wp851pAsINlYuPrN_JwyLea4",
  authDomain: "shopco-bee9e.firebaseapp.com",
  projectId: "shopco-bee9e",
  storageBucket: "shopco-bee9e.appspot.com",
  messagingSenderId: "904865064421",
  appId: "1:904865064421:web:494fae372632f843febb0c"
};

// Initialize Firebase app
export const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);  // Initialize storage with app

// Storage Upload function
export async function Upload(file, currentUser, setLoading) {
  const fileRef = storageRef(storage, `profile_pictures/${currentUser.uid}.png`);
  setLoading(true);
  try {
    await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);
    await updateProfile(currentUser, { photoURL });
    toast.success("File uploaded successfully");
    return photoURL;
  } catch (error) {
    toast.error("File upload failed");
    console.error(error);
    return null;
  } finally {
    setLoading(false);
  }
}
//Database process



export const saveUserBasket = async (userId, basketItems) => {
  try {
    const db = getDatabase();
    const basketRef = ref(db, `baskets/`+userId); // Kullanıcının UID'sine göre sepeti kaydediyoruz
    await set(basketRef, {
      items: basketItems, // Sepet içeriği
      timestamp: Date.now() // Kaydedilen zaman
    });
    
    // toast.success("Sepet başarıyla kaydedildi!");
  } catch (error) {
    // toast.error("Sepet kaydedilemedi.");
    console.error("Database error:", error);
  }
};

export const getUserBasket = async (userId) => {
  try {
    const db = getDatabase();
    const basketRef = ref(db, `baskets/` + userId);
    const snapshot = await get(basketRef);
    
    if (snapshot.exists()) {
      const data = snapshot.val();
      return data.items;
    } else {
      return [];
    }
  } catch (error) {
    toast.error("Sepet alınamadı.");
    console.error("Database error:", error);
    return [];
  }
};



export const ClearUserBasket = async (userId,dispatch) => {
  try {
     
     const db = getDatabase()
     const basketRef = ref(db, 'baskets/'+userId)
     await remove(basketRef)
     localStorage.removeItem('baskets')
     dispatch(clearCart())
     toast.success("Basket Removed",{ position: "bottom-right"})
   } catch (error) {
    toast.error(error+'basket remove failed')
   }
 }