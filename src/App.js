// packages
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// utils
import './App.css'

// components
import AboutPage from './Pages/About/AboutPage/AboutPage'
import HomePage from './Pages/Home/HomePage/HomePage'
import Footer from './Pages/Shared/Footer/Footer'
import Header from './Pages/Shared/Header/Header'
import NotFoundPage from './Pages/NotFound/NotFoundPage/NotFoundPage'
import ContactPage from './Pages/Contact/ContactPage/ContactPage'
import ServicesPage from './Pages/Services/ServicesPage/ServicesPage'

const App = () => {
	return (
		<div className='App'>
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
						<Route path='/about'>
							<AboutPage></AboutPage>
						</Route>
						<Route path='/contact'>
							<ContactPage></ContactPage>
						</Route>
						<Route path='/services'>
							<ServicesPage></ServicesPage>
						</Route>
						<Route path='*'>
							<NotFoundPage></NotFoundPage>
						</Route>
					</Switch>
				</main>
				<Footer></Footer>
			</Router>
		</div>
	)
}

export default App
