import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import ProductDetail from './components/product-detail/ProductDetail'

const App = () => {
	return (
		<Router>
			<Header />
			<main>
				<Route path='/' component={Home} exact />
				<Route path='/product/:id' component={ProductDetail} />
			</main>
			<Footer />
		</Router>
	)
}

export default App
