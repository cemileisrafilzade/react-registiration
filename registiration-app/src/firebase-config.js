import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNC2-r9BCTeNNqdkPbnkypjbvXpDBJ4Rs",
  authDomain: "registiration-d0368.firebaseapp.com",
  databaseURL: "https://registiration-d0368-default-rtdb.firebaseio.com",
  projectId: "registiration-d0368",
  storageBucket: "registiration-d0368.appspot.com",
  messagingSenderId: "474513483407",
  appId: "1:474513483407:web:88ebecb2abbb61fcc9b2fa",
  measurementId: "G-VZF7PN5HJH"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
