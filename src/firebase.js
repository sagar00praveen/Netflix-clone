import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  getAuth, 
  signOut 
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGmIUrnidkUYEPwzfOsAsgVkF9aG3f8Ck",
  authDomain: "netflix-clone-eeee3.firebaseapp.com",
  projectId: "netflix-clone-eeee3",
  storageBucket: "netflix-clone-eeee3.firebasestorage.app",
  messagingSenderId: "782328234241",
  appId: "1:782328234241:web:d042d5380af5eb5adb9b00"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {   
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};


const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

// Logout function
const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
