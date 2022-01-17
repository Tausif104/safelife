import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useServices from '../../../hooks/useServices'
import Loader from '../Loader/Loader'
import './footer.css'

const Footer = () => {
	const { services, loading } = useServices()

	return (
		<footer>
			<Container>
				<Row className='justify-content-between'>
					<Col md={3}>
						<div className='footer-box footer-about'>
							<h2>Safelife</h2>
							<p>
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Reprehenderit facilis
								assumenda delectus, autem porro aliquid!
							</p>
						</div>
					</Col>
					<Col md={3}>
						<div className='footer-box footer-menu'>
							<h2>Services</h2>
							<ul>
								{loading ? (
									<Loader />
								) : (
									services.map((service) => (
										<li key={service.id}>
											<Link
												to={`/services/${service.id}`}
											>
												{service.title}
											</Link>
										</li>
									))
								)}
							</ul>
						</div>
					</Col>
					<Col md={3}>
						<div className='footer-box footer-social'>
							<h2>Social</h2>
							<ul>
								<li>
									<a href=''>
										<i className='fab fa-facebook'></i>
									</a>
								</li>
								<li>
									<a href=''>
										<i className='fab fa-twitter'></i>
									</a>
								</li>
								<li>
									<a href=''>
										<i className='fab fa-linkedin-in'></i>
									</a>
								</li>
							</ul>
						</div>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
