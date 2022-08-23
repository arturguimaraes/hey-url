import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export default function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyC8W5iMW29oUKnpfYcbOHPzvGRNuP1IyNg",
    authDomain: "heyurl-11bf3.firebaseapp.com",
    databaseURL: "https://heyurl-11bf3-default-rtdb.firebaseio.com",
    projectId: "heyurl-11bf3",
    storageBucket: "heyurl-11bf3.appspot.com",
    messagingSenderId: "551182269227",
    appId: "1:551182269227:web:2415038e20c2adf691e36e",
  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}
