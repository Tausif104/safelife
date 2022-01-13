import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './page-banner.css'

const PageBanner = ({ title }) => {
	return (
		<section className='page-banner'>
			<Container>
				<Row>
					<Col className='text-center'>
						<h1>{title}</h1>
						<div className='breadcrumb-text text-center'>
							<Link to='/'>Home</Link>
							<span className='divider'>|</span>
							<span>{title}</span>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default PageBanner
