import { onAuthStateChanged,getAuth } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../../../Firebase"


export const useAuth = () => {//Custom hook 
    const [currentUser, setCurrentUser] = useState()
    useEffect(() => {
        onAuthStateChanged(auth, user => setCurrentUser(user))
    }, [])
    return currentUser
}