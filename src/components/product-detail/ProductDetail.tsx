import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Params, RootState } from '../../frontend'
import Rating from '../rating/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../../actions/productActions'
import ErrorMessage from '../message/ErrorMessage'
import Loading from '../loading/Loading'

const ProductDetail = () => {
	const { id } = useParams<Params>()

	const dispatch = useDispatch()

	const productDetails = useSelector(
		(state: RootState) => state.productDetails
	)

	const { loading, error, product } = productDetails

	useEffect(() => {
		dispatch(listProductDetails(id))
	}, [dispatch])

	return (
		<section className='flex text-gray-700 body-font overflow-hidden mt-10'>
			{loading ? (
				<Loading />
			) : error ? (
				<ErrorMessage message={error} />
			) : product ? (
				<div className='container px-5 py-8 mx-auto'>
					<div className='lg:w-4/5 mx-auto flex flex-wrap'>
						<img
							alt={product.name}
							className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded'
							src={product.image}
						/>
						<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
							<h2 className='text-sm title-font text-gray-500 tracking-widest'>
								{product.brand}
							</h2>
							<h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
								{product.name}
							</h1>
							<div className='flex mb-4'>
								<span className='flex items-center'>
									<Rating product={product} />
									<span className='text-gray-600 ml-3'>
										{product.numReviews} Reviews
									</span>
								</span>
								<span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200'>
									<a className='text-gray-500'>
										<svg
											fill='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='W-5 h-5'
											viewBox='0 0 24 24'>
											<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
										</svg>
									</a>
									<a className='ml-2 text-gray-500'>
										<svg
											fill='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'>
											<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
										</svg>
									</a>
									<a className='ml-2 text-gray-500'>
										<svg
											fill='currentColor'
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'>
											<path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
										</svg>
									</a>
								</span>
							</div>
							<p className='leading-relaxed'>{product.description}</p>
							<div className='flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5'>
								<div className='flex'>
									<span className='mr-3'>Status: </span>
									<span>
										{product.countInStock > 0
											? 'In Stock'
											: 'Out Of Stock'}
									</span>
								</div>
								<div className='flex ml-8 items-center'>
									<span className='mr-3'>Qty:</span>
									<div className='relative'>
										<select className='rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-indigo-500 text-base pl-3 pr-10'>
											<option>1</option>
											<option>2</option>
											<option>3</option>
										</select>
										<span className='absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center'>
											<svg
												fill='none'
												stroke='currentColor'
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												className='w-4 h-4'
												viewBox='0 0 24 24'>
												<path d='M6 9l6 6 6-6'></path>
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className='flex'>
								<span className='title-font font-medium text-2xl text-gray-900'>
									${product.price}
								</span>
								<button
									className={
										'flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none rounded-full ' +
										(product.countInStock === 0
											? 'cursor-not-allowed hover:bg-gray-400'
											: 'hover:bg-indigo-600')
									}>
									Add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</section>
	)
}

export default ProductDetail
