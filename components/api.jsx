import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { v4 } from "uuid";


const firebaseConfig = {
  apiKey: "AIzaSyCMSaJNt8_PMruWLaUncGYqg0lFlO67CC8",
  authDomain: "cidowavebrokers.firebaseapp.com",
  projectId: "cidowavebrokers",
  storageBucket: "cidowavebrokers.firebasestorage.app",
  messagingSenderId: "865280434730",
  appId: "1:865280434730:web:48d9916b6f4e32d4ced953",
  measurementId: "G-E6VYVNN1L4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const imageDb = getStorage(app)

const vesselsCollectionRef = collection(db,"vessels")


export {imageDb}

export async function getVessels() {
    const querySnapshot = await getDocs(vesselsCollectionRef)
    const dataArr = querySnapshot.docs.map(doc=>({
        ...doc.data(),
        id: doc.id
    }))
    console.log(dataArr)
    return(dataArr)
}