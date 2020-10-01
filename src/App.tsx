import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Home />
			</main>
			<Footer />
		</>
	)
}

export default App
