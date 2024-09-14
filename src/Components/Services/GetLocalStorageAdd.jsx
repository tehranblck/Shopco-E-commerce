import auth from "../../Config/auth";

export const GetAuthFromLocalStorage = () => {
  if (auth) {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : null; // Boşsa null döndür.
  }
  return null; // auth tanımlı değilse null döndür.
};