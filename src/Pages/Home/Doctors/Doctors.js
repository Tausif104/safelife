import { Col, Container, Row } from 'react-bootstrap'
import useDoctors from '../../../hooks/useDoctors'
import Loader from '../../Shared/Loader/Loader'
import DoctorCard from '../DoctorCard/DoctorCard'
import './doctors.css'

const Doctors = () => {
	const { doctors, loading } = useDoctors()

	return (
		<section className='doctors-section'>
			<Container>
				<Row className='mb-4'>
					<Col md='12'>
						<div className='section-title text-center'>
							<h2>
								<strong>Meet Our Experience Doctors</strong>
							</h2>
							<p className='text-muted'>Professional Doctors</p>
						</div>
					</Col>
				</Row>
				<Row className='g-5'>
					{loading ? (
						<Loader />
					) : (
						doctors.map((doctor) => (
							<DoctorCard key={doctor.id} doctor={doctor} />
						))
					)}
				</Row>
			</Container>
		</section>
	)
}

export default Doctors
