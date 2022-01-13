import { Col, Container, Image, Row } from 'react-bootstrap'
import PageBanner from '../../Shared/PageBanner/PageBanner'
import AboutThumb from './about.jpg'

const AboutPage = () => {
	return (
		<>
			<PageBanner title='About Us'></PageBanner>
			<Container className='my-5'>
				<Row className='justify-content-center'>
					<Col md={8}>
						<Image rounded fluid src={AboutThumb} />
						<h4 className='mt-4 mb-3'>About our company</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Temporibus culpa id voluptates atque nemo
							doloremque, laboriosam provident nostrum sed aperiam
							perspiciatis labore sit vel porro tenetur cum ipsa
							nihil placeat quis assumenda delectus eius corrupti?
						</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Voluptates quia beatae suscipit doloribus
							maiores iure quisquam id officia, voluptatibus
							possimus incidunt doloremque iste non unde quasi quo
							hic. Eum, dolorem?
						</p>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default AboutPage
