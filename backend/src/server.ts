import express from 'express'
import dotenv from 'dotenv'
import products from './data/products'
import connectDB from './config/db'

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
	console.log(
		`running in ${process.env.NODE_ENV} mode and listening on port ${PORT}`
	)
)

app.get('/api/products', (req, res) => res.json(products))

app.get('/api/products/:id', (req, res) => {
	const product = products.filter(
		(x: { _id: string }) => x._id === req.params.id
	)
	res.json(product)
})
