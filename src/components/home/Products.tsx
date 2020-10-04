import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IProductDetail, RootState } from '../../frontend'
import Rating from '../rating/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../../actions/productActions'
import Loading from '../loading/Loading'
import ErrorMessage from '../message/ErrorMessage'

const Products = () => {
	const dispatch = useDispatch()

	const productList = useSelector(
		(state: RootState) => state.productList
	)

	const { loading, error, products } = productList

	useEffect(() => {
		dispatch(listProducts())
	}, [dispatch])

	return (
		<div className='flex flex-wrap -m-4'>
			{loading ? (
				<Loading />
			) : error ? (
				<ErrorMessage message={error} />
			) : products ? (
				products.map((product: IProductDetail) => (
					<div
						className='max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10 w-full md:w-1/2 mx-16 lg:mx-10'
						key={product._id}>
						<div className='px-4 py-2'>
							<h1 className='text-gray-900 font-bold text-xl uppercase'>
								{product.name}
							</h1>
							<p className='text-gray-600 text-sm mt-1'>
								Category: {product.category}
							</p>
							<span className='flex items-center mt-2 pt-2 border-t-2 border-solid'>
								<Rating product={product} />
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
							<Link
								to={'/product/' + product._id}
								className='px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded'>
								More Details
							</Link>
						</div>
					</div>
				))
			) : (
				<></>
			)}
		</div>
	)
}

export default Products
