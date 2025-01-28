import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getStorage } from "firebase/storage";


const config = {
    apiKey: "AIzaSyD4O86kpXJFGPN9_YjUeRyGLMhr1x1Fcv4",
    authDomain: "myapp-fa629.firebaseapp.com",
    projectId: "myapp-fa629",
    storageBucket: "myapp-fa629.firebasestorage.app",
    messagingSenderId: "34445698324",
    appId: "1:34445698324:web:449313234431bc99d9ce01",
    measurementId: "G-H3FYT89EJR"
}

const app = initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

export function getCurrentUser() {
    const auth = getAuth();
    return auth.currentUser
}

export async function loginUser(username: string, password: string) {

    const email = `${username}@avalyn.com`
    const auth = getAuth();

    try{
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
        return true
    } catch(error) {
        console.log(error)
        return false
    }
}

export async function registerUser(username: string, password: string) {
    const email = `${username}@avalyn.com`;
    const auth = getAuth();
  
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }

}
