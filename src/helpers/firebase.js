const firebase = require("firebase/app");
require("firebase/auth");
const axios = require("axios")

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();

let userLoaded = false;

// This method exists to do not use firebase.auth().onAuthStateChanged directly
// Plus simplify the user getting on from an event to a Promise
// Code comes from: https://github.com/firebase/firebase-js-sdk/issues/462#issuecomment-425479634
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    if (userLoaded) {
      resolve(auth.currentUser);
    }
    const unsubscribe = auth.onAuthStateChanged(user => {
      userLoaded = true;
      axios.interceptors.request.use((config) => {

        user.getIdToken().then(token => {
          config.headers = {
            Authorization: 'Bearer ' + token
          }
        })
        console.log(config)
        return config;
      }, (error) => {
        // Do something with request error
        return Promise.reject(error);
      });
      unsubscribe();
      resolve(user);
    }, reject);
  });
};

module.exports = {
  firebase,
  provider,
  auth,
  getCurrentUser
};
