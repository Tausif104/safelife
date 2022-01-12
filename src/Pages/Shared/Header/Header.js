import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
	return (
		<header>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Link to='/' className='navbar-brand'>
						Safelife
					</Link>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav className='ms-auto my-2 my-lg-0 align-items-center'>
							<div className='menu-list'>
								<NavLink to='/home'>Home</NavLink>
								<NavLink to='/about'>About</NavLink>
								<NavLink to='/contact'>Contact</NavLink>
								<NavLink to='/services'>Services</NavLink>
							</div>
							<div className='header-buttons'>
								<NavLink className='primary-btn' to='/login'>
									Login
								</NavLink>
								<NavLink
									className='bordered-btn ms-3'
									to='/Register'
								>
									Register
								</NavLink>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default Header
