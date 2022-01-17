import { useEffect, useState } from 'react'

const useDoctors = () => {
	const [doctors, setDoctors] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('../doctors.json')
			.then((res) => res.json())
			.then((data) => [setDoctors(data), setLoading(false)])
	}, [])

	return {
		doctors,
		loading,
	}
}

export default useDoctors
