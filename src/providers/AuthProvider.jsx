import { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config'
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'

export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider()

  //   social login google
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  //creating user
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  //   signing in user with email and password
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  //   logout
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }
  //   adding a monitor for auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      console.log('Current User', currentUser)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  //   sending context info
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
