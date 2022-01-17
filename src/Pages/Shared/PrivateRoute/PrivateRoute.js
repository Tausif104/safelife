import { Route, Redirect } from 'react-router-dom'
import useAuth from '../../../contexts/useAuth'
import Loader from '../Loader/Loader'

const PrivateRoute = ({ children, ...rest }) => {
	const { user, loading } = useAuth()

	if (loading) {
		return <Loader />
	}

	return (
		<Route
			{...rest}
			render={({ location }) =>
				user.email ? (
					children
				) : (
					<Redirect
						to={{ pathname: '/login', state: { from: location } }}
					/>
				)
			}
		/>
	)
}

export default PrivateRoute
