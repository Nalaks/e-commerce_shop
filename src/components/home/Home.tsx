import React from 'react'
import Products from './Products'

const Home: React.FC = () => {
	return (
		<>
			<section className='text-black body-font'>
				<div className='container px-5 py-4 mx-auto'>
					<h1 className='text-4xl tracking-wider'>Latest Products</h1>
					<Products />
				</div>
			</section>
		</>
	)
}

export default Home
