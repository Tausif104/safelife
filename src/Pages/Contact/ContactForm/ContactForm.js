import { Col, Container, Row } from 'react-bootstrap'
import './contact-form.css'

const ContactForm = () => {
	return (
		<section className='contact-form'>
			<Container>
				<Row className='justify-content-center'>
					<Col md={6}>
						<Row className='g-4'>
							<Col md={6}>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='First Name'
									/>
								</div>
							</Col>
							<Col md={6}>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Last Name'
									/>
								</div>
							</Col>
							<Col md={6}>
								<div className='form-group'>
									<input
										type='email'
										className='form-control'
										placeholder='Email'
									/>
								</div>
							</Col>
							<Col md={6}>
								<div className='form-group'>
									<input
										type='text'
										className='form-control'
										placeholder='Subject'
									/>
								</div>
							</Col>
							<Col md={12}>
								<div className='form-group'>
									<textarea
										className='form-control'
										placeholder='Message'
										cols='30'
										rows='5'
									></textarea>
								</div>
							</Col>
							<Col md={12}>
								<div className='form-group'>
									<button className='primary-btn'>
										Submit
									</button>
								</div>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default ContactForm
