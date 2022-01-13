import { Col, Container, Row } from 'react-bootstrap'
import ServiceCard from '../ServiceCard/ServiceCard'
import Loader from '../../Shared/Loader/Loader'
import useServices from '../../../hooks/useServices'
import './services.css'

const Services = () => {
	const { services, loading } = useServices()
	return (
		<section className='service-section'>
			<Container>
				<Row className='mb-4'>
					<Col>
						<div className='section-title text-center'>
							<h2>
								<strong>
									Benefit For Physical <br /> Mental and
									Virtual Care
								</strong>
							</h2>
							<p className='mb-0 text-muted'>
								Popular Medical Services
							</p>
						</div>
					</Col>
				</Row>
				<Row className='g-4'>
					{loading ? (
						<Loader />
					) : (
						services.map((service) => (
							<ServiceCard key={service.id} service={service} />
						))
					)}
				</Row>
			</Container>
		</section>
	)
}

export default Services
