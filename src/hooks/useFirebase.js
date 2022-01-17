import { useState, useEffect } from 'react'
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
} from 'firebase/auth'
import initializeFirebaseApp from '../firebase/firebase.init'

initializeFirebaseApp()

const useFirebase = () => {
	const [user, setUser] = useState({})
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(true)

	const auth = getAuth()
	const googleProvider = new GoogleAuthProvider()

	const signInGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				setUser(result.user)
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false))
	}

	const registerUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setUser(result.user)
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false))

		setLoading(false)
	}

	const loginUser = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setUser(result.user)
			})
			.catch((error) => setError(error))
			.finally(() => setLoading(false))
	}

	const logOutUser = () => {
		signOut(auth)
			.then(setUser({}))
			.finally(() => setLoading(false))
	}

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user)
			} else {
				setUser({})
			}

			setLoading(false)
		})
	}, [])

	return {
		user,
		error,
		loading,
		signInGoogle,
		registerUser,
		loginUser,
		logOutUser,
	}
}

export default useFirebase
