// packages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

// utils
import './App.css'
import AuthProvider from './contexts/AuthProvider'

// components
import AboutPage from './Pages/About/AboutPage/AboutPage'
import HomePage from './Pages/Home/HomePage/HomePage'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'
import NotFoundPage from './Pages/NotFound/NotFoundPage/NotFoundPage'
import ContactPage from './Pages/Contact/ContactPage/ContactPage'
import SingleService from './Pages/SingleService/SingleServicePage/SingleService'
import LoginPage from './Pages/Login/LoginPage'
import RegisterPage from './Pages/Register/RegisterPage'
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute'

const App = () => {
	return (
		<div className='App'>
			<AuthProvider>
				<Router>
					<Header></Header>
					<main>
						<Switch>
							<Route path='/' exact>
								<HomePage></HomePage>
							</Route>
							<Route path='/home'>
								<HomePage></HomePage>
							</Route>
							<PrivateRoute path='/about'>
								<AboutPage></AboutPage>
							</PrivateRoute>
							<PrivateRoute path='/contact'>
								<ContactPage></ContactPage>
							</PrivateRoute>
							<PrivateRoute path='/services/:id'>
								<SingleService></SingleService>
							</PrivateRoute>
							<Route path='/login'>
								<LoginPage></LoginPage>
							</Route>
							<Route path='/register'>
								<RegisterPage></RegisterPage>
							</Route>
							<Route path='*'>
								<NotFoundPage></NotFoundPage>
							</Route>
						</Switch>
					</main>
					<Footer></Footer>
				</Router>
			</AuthProvider>
		</div>
	)
}

export default App
