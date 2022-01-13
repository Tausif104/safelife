import { useEffect, useState } from 'react'

const useServices = () => {
	const [services, setServices] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		fetch('../services.json')
			.then((res) => res.json())
			.then((data) => [setServices(data), setLoading(false)])
	}, [])

	return {
		services,
		loading,
	}
}

export default useServices
