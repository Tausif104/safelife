import { Col } from 'react-bootstrap'
import './doctor-card.css'

const DoctorCard = (props) => {
	const { name, specialist, thumb } = props.doctor
	return (
		<Col md={3} className='text-center'>
			<div className='doctor-card'>
				<div className='doctor-thumbnail mb-4'>
					<img className='w-100 rounded-3' src={thumb} alt={name} />
				</div>
				<div className='doctor-content'>
					<h4 className='mb-1'>{name}</h4>
					<p className='text-muted'>{specialist}</p>
				</div>
			</div>
		</Col>
	)
}

export default DoctorCard
