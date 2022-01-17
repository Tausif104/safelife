import { Link } from 'react-router-dom'
import { Col, Row, Container } from 'react-bootstrap'
import './banner.css'
import BannerThumb from './banner-thumb.jpg'

const Banner = () => {
	return (
		<section className='banner-section'>
			<Container>
				<Row className='align-items-center'>
					<Col lg={7}>
						<div className='banner-text'>
							<h1>We Care About Medical &amp; Health</h1>
							<p className='mt-3 mb-3 text-muted w-75'>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Eos voluptatem expedita
								praesentium ex temporibus saepe?
							</p>
							<Link to='/register' className='primary-btn'>
								Sign Up
							</Link>
						</div>
					</Col>
					<Col>
						<img className='img-fluid' src={BannerThumb} alt='' />
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Banner
