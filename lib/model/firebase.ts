// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  User,
  getAuth,
  signInWithPopup,
  FacebookAuthProvider
} from 'firebase/auth'
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId:process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_Id
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const facebookProvider = new FacebookAuthProvider()

 const signinWithGoogle = async (): Promise<{
  accessToken: string
  user: User
}> => {
  const auth = getAuth()
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        resolve({
          accessToken: credential?.accessToken || '',
          user: result.user
        })
      })
      .catch(err => {
        const errorCode = err.code
        const errorMessage = err.message
        console.log(errorCode, errorMessage)
        reject({ errorCode, errorMessage })
      })
  })
}
 const signinWithFB = async (): Promise<{
  accessToken: string
  user: User
}> => {
  const auth = getAuth()
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        const credential = FacebookAuthProvider.credentialFromResult(result)
        resolve({
          accessToken: credential?.accessToken || '',
          user: result.user
        })
      })
      .catch(err => {
        const errorCode = err.code
        const errorMessage = err.message
        console.log(errorCode, errorMessage)
        reject({ errorCode, errorMessage })
      })
  })
}

export { auth,signinWithGoogle,signinWithFB };


