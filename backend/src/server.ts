import express from 'express'
import products from './data/products'

const app = express()

const PORT = 5000

app.listen(PORT, () => console.log('hello from me'))

app.get('/api/products', (req, res) => res.json(products))

app.get('/api/products/:id', (req, res) => {
	const product = products.filter(
		(x: { _id: string }) => x._id === req.params.id
	)
	res.json(product)
})
