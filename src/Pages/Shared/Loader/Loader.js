import './loader.css'

const Loader = () => {
	return (
		<div className='loader-wrapper'>
			<div className='d-flex justify-content-center my-5'>
				<div className='spinner-border text-success' role='status'>
					<span className='visually-hidden'>Loading...</span>
				</div>
			</div>
		</div>
	)
}

export default Loader
