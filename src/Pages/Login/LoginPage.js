import PageBanner from '../Shared/PageBanner/PageBanner'
import useAuth from '../../contexts/useAuth'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import './loginpage.css'
import { Link } from 'react-router-dom'

const LoginPage = () => {
	const { user, error, signInGoogle, loginUser } = useAuth()
	const handleLoginUser = () => {
		const loginEmail = document.getElementById('login-email').value
		const loginPass = document.getElementById('login-password').value
		loginUser(loginEmail, loginPass)
	}
	return (
		<>
			<PageBanner title='Login' />
			<section className='login-form-section'>
				<Container>
					<Row className='justify-content-center'>
						<Col md={4}>
							{error && (
								<Alert className='text-center' variant='danger'>
									{error.message}
								</Alert>
							)}
						</Col>
					</Row>
					<Row className='justify-content-center'>
						{user.email ? (
							<Col md={6}>
								<Alert
									className='text-center'
									variant='success'
								>
									You are logged in as <u>{user.email}</u>
								</Alert>
								<p className='text-center'>
									Go to{' '}
									<Link className='primary-color' to='/home'>
										Home
									</Link>
								</p>
							</Col>
						) : (
							<Col md={4}>
								<h4 className='mb-4'>Sign In</h4>
								<div className='form-group mb-5'>
									<input
										id='login-email'
										type='email'
										className='form-control mb-3'
										placeholder='Email'
									/>
									<input
										id='login-password'
										type='password'
										className='form-control mb-3'
										placeholder='Password'
									/>
									<input
										onClick={handleLoginUser}
										type='submit'
										className='primary-btn'
										value='Login'
									/>
								</div>
								<button
									className='primary-btn w-100'
									onClick={signInGoogle}
								>
									<i className='fab fa-google'></i>
								</button>
								<p className='text-muted text-center mt-4'>
									Do not have an account?{' '}
									<Link
										className='primary-color'
										to='/register'
									>
										Register
									</Link>
								</p>
							</Col>
						)}
					</Row>
				</Container>
			</section>
		</>
	)
}

export default LoginPage
