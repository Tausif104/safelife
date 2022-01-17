import { useState } from 'react'
import PageBanner from '../Shared/PageBanner/PageBanner'
import useAuth from '../../contexts/useAuth'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import './registerpage.css'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
	const [passConfirm, setPassConfirm] = useState('')
	const { user, error, signInGoogle, registerUser } = useAuth()

	const handleRegisterUser = () => {
		const email = document.getElementById('register-email').value
		const password = document.getElementById('register-password').value
		const confirmPassword = document.getElementById(
			'register-confirm-password'
		).value
		if (password === confirmPassword) {
			registerUser(email, password)
		} else {
			setPassConfirm('Passwords are not matched')
		}
	}

	return (
		<>
			<PageBanner title='Register' />
			<section className='register-form-section'>
				<Container>
					{passConfirm && (
						<Row className='justify-content-center'>
							<Col md={4}>
								<Alert className='text-center' variant='danger'>
									{passConfirm}
								</Alert>
							</Col>
						</Row>
					)}
					{error && (
						<Row className='justify-content-center'>
							<Col md={4}>
								<Alert className='text-center' variant='danger'>
									{error.message}
								</Alert>
							</Col>
						</Row>
					)}
					<Row className='justify-content-center'>
						{user.email ? (
							<Col md={6}>
								<Alert
									className='text-center'
									variant='success'
								>
									You are registered &amp; logged in as{' '}
									<u>{user.email}</u>
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
								<h4 className='mb-4'>Sign Up</h4>
								<div className='form-group mb-5'>
									<input
										id='register-email'
										type='email'
										className='form-control mb-3'
										placeholder='Email'
										required
									/>
									<input
										id='register-password'
										type='password'
										className='form-control mb-3'
										placeholder='Password'
										required
									/>
									<input
										id='register-confirm-password'
										type='password'
										className='form-control mb-3'
										placeholder='Confirm Password'
										required
									/>
									<input
										onClick={handleRegisterUser}
										type='submit'
										className='primary-btn'
										value='Register'
									/>
								</div>
								<button
									className='primary-btn w-100'
									onClick={signInGoogle}
								>
									<i className='fab fa-google'></i>
								</button>
								<p className='text-muted text-center mt-4'>
									Already have an account?{' '}
									<Link className='primary-color' to='/login'>
										Login
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

export default RegisterPage
