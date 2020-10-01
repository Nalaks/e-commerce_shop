import React from 'react'
import products from '../../products'

const Products = () => {
	return (
		<div className='flex flex-wrap -m-4'>
			{products.map((product) => (
				<div className='max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 w-screen md:w-1/3  md:mx-10'>
					<div className='px-4 py-2'>
						<h1 className='text-gray-900 font-bold text-xl uppercase'>
							{product.name}
						</h1>
						<p className='text-gray-600 text-sm mt-1'>
							<span className='border-r-2 border-solid pr-2 mr-2'>
								Category: {product.category}
							</span>
							Brand: {product.brand}
						</p>
						<span className='flex items-center mt-2 border-t-2 border-solid'>
							<svg
								fill={product.rating > 1 ? 'currentColor' : 'none'}
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-4 h-4 text-indigo-500'
								viewBox='0 0 24 24'>
								<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
							</svg>
							<svg
								fill={product.rating > 2 ? 'currentColor' : 'none'}
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-4 h-4 text-indigo-500'
								viewBox='0 0 24 24'>
								<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
							</svg>
							<svg
								fill={product.rating > 3 ? 'currentColor' : 'none'}
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-4 h-4 text-indigo-500'
								viewBox='0 0 24 24'>
								<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
							</svg>
							<svg
								fill={product.rating > 4 ? 'currentColor' : 'none'}
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-4 h-4 text-indigo-500'
								viewBox='0 0 24 24'>
								<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
							</svg>
							<svg
								fill={product.rating > 4.5 ? 'currentColor' : 'none'}
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-4 h-4 text-indigo-500'
								viewBox='0 0 24 24'>
								<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
							</svg>
							<span className='text-gray-600 ml-3'>
								{product.numReviews} Reviews
							</span>
						</span>
					</div>
					<img
						className='h-56 w-full object-cover mt-2'
						src={product.image}
						alt={product.name}
					/>
					<div className='flex items-center justify-between px-4 py-2 bg-gray-900'>
						<h1 className='text-gray-200 font-bold text-xl'>
							${product.price}
						</h1>
						<button className='px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded'>
							Add to card
						</button>
					</div>
				</div>
			))}
		</div>
	)
}

export default Products
