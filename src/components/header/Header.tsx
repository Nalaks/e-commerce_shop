import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
	const [toggle, setToggle] = useState('hidden')
	return (
		<nav className='flex items-center justify-between flex-wrap bg-white p-4 mb-4 shadow-md sticky top-0 z-10'>
			<div className='flex items-center flex-no-shrink text-black mr-6'>
				<span className='font-semibold text-2xl tracking-tight'>
					<i className='fab fa-shopware m-3 mr-5 text-2xl text-black w-4 h-4'></i>
					ShopStar
				</span>
			</div>
			<span className='w-80% md:w-1/3 h-10 md:ml-32 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex'>
				<input
					type='search'
					name='serch'
					placeholder='Search'
					className='flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none'
				/>
				<i className='fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4'></i>
			</span>
			<div className='block lg:hidden'>
				<button
					className='flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white'
					onClick={() => setToggle(toggle === '' ? 'hidden' : '')}>
					<svg
						className='h-3 w-3'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'>
						<title>Menu</title>
						<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
					</svg>
				</button>
			</div>
			<div
				className={
					'w-full block flex-grow lg:flex lg:items-center lg:w-auto ' +
					toggle
				}>
				<div className='text-sm lg:flex-grow'></div>
				<div>
					<div className='text-sm lg:flex-grow'>
						<a className='block mt-4 lg:inline-block lg:mt-0 mr-8 text-lg'>
							Home
						</a>
						<a className='block mt-4 lg:inline-block lg:mt-0 mr-8 text-lg'>
							<i className='fas fa-shopping-cart m-3 mr-2 text-lg text-gray-700 w-4 h-4'></i>
							Cart
						</a>
						<a
							href='#'
							className='block mt-4 lg:inline-block lg:mt-0 mr-8 text-lg'>
							<span>
								<i className='fas fa-user m-3 mr-2 text-lg text-gray-700 w-4 h-4'></i>
								Sign In
							</span>
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Header
