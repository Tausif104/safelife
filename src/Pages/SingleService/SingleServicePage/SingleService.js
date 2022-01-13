import { Col, Container, Row } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'
import useServices from '../../../hooks/useServices'
import PageBanner from '../../Shared/PageBanner/PageBanner'
import Loader from '../../Shared/Loader/Loader'
import './single-service.css'

const SingleService = () => {
	const { services, loading } = useServices()
	const { id } = useParams()

	const service = services.find((service) => service.id === parseInt(id))

	return (
		<>
			<PageBanner title={service?.title}></PageBanner>
			<Container className='my-5'>
				<Row className='justify-content-center'>
					<Col md={3}>
						<ul className='list-group services-list'>
							<li
								className='list-group-item active'
								aria-current='true'
							>
								Services
							</li>
							{services.map((s) => (
								<li key={s.id} className='list-group-item'>
									<NavLink to={`/services/${s.id}`}>
										{s.title}
									</NavLink>
								</li>
							))}
						</ul>
					</Col>
					<Col md={9}>
						{loading ? (
							<Loader />
						) : (
							<>
								<img
									className='img-fluid w-100'
									src={service?.image}
								/>
								<div className='service-desc mt-3'>
									<h3>{service?.title}</h3>
									{service?.description}
								</div>
							</>
						)}
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default SingleService
