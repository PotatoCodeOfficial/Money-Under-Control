import { auth, provider } from "./firebase";
const AUTHENTICATED = "AUTHENTICATED";

const doLogin = () => {
  return auth.signInWithPopup(provider).then(result => {
    localStorage.setItem(AUTHENTICATED, true);
    return result.user;
  });
};

const doLogout = () => {
  return auth.signOut().then(result => {
    localStorage.removeItem(AUTHENTICATED);
    return true;
  });
};

const isLogged = () => {
  return !!localStorage.getItem(AUTHENTICATED);
};

export { doLogout, doLogin, isLogged };
