import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './cta-section.css'

const Cta = () => {
	return (
		<section className='cta-section'>
			<Container>
				<Row className='justify-content-center'>
					<Col md={8} className='text-center'>
						<h2>
							<strong>
								Flexible &amp; Responsive to Changing Need
							</strong>
						</h2>
						<p className='w-75 mx-auto text-muted'>
							If you want to contact us please click on the button
						</p>
						<Link to='/contact' className='primary-btn'>
							Get a Quote
						</Link>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Cta
