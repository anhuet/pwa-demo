import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getMessaging, getToken, onMessage } from "firebase/messaging";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBqStBKvfcZTOdhEigzaxNpgQDAErw5Zr4",

  authDomain: "pwa-demo-a7372.firebaseapp.com",

  projectId: "pwa-demo-a7372",

  storageBucket: "pwa-demo-a7372.appspot.com",

  messagingSenderId: "448966555712",

  appId: "1:448966555712:web:2ccd9f9af2f7ff77de47a5",

  measurementId: "G-YXV44TPTB8",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getFBToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey: process.env.REACT_APP_FIREBASE_ACCESS_KEY,
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
