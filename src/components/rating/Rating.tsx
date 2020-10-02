import React from 'react'
import { RatingProps } from '../../frontend'

const Rating: React.VFC<RatingProps> = ({ product }) => {
	return (
		<>
			<svg
				fill={product.rating >= 1 ? 'currentColor' : 'none'}
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				className='w-4 h-4 text-indigo-500'
				viewBox='0 0 24 24'>
				<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
			</svg>
			<svg
				fill={product.rating >= 2 ? 'currentColor' : 'none'}
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				className='w-4 h-4 text-indigo-500'
				viewBox='0 0 24 24'>
				<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
			</svg>
			<svg
				fill={product.rating >= 3 ? 'currentColor' : 'none'}
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				className='w-4 h-4 text-indigo-500'
				viewBox='0 0 24 24'>
				<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
			</svg>
			<svg
				fill={product.rating >= 4 ? 'currentColor' : 'none'}
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				className='w-4 h-4 text-indigo-500'
				viewBox='0 0 24 24'>
				<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
			</svg>
			<svg
				fill={product.rating >= 4.5 ? 'currentColor' : 'none'}
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				className='w-4 h-4 text-indigo-500'
				viewBox='0 0 24 24'>
				<path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
			</svg>
		</>
	)
}

export default Rating
