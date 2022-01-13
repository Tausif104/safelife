import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './service-card.css'

const ServiceCard = (props) => {
	const { id, title, image, description } = props.service

	return (
		<Col md={4}>
			<div className='service-card'>
				<Link to={`/services/${id}`}>
					<img className='img-fluid' src={image} alt={title} />
				</Link>
				<div className='service-text p-4'>
					<h4>{title}</h4>
					<p className='text-muted'>
						{description.length > 150
							? description.slice(0, 150) + '...'
							: description}
					</p>
					<Link className='card-btn' to={`/services/${id}`}>
						Read More
					</Link>
				</div>
			</div>
		</Col>
	)
}

export default ServiceCard
