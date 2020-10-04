import express from 'express'
import Product from '../models/productModel'
import asyncHandler from 'express-async-handler'

const router = express.Router()

// fetch all products | GET /api/products | public route
router.get(
	'/',
	asyncHandler(async (req, res) => {
		const products = await Product.find({})
		// throw new Error('some error that is very long and complicated')
		res.json(products)
	})
)

// fetch single product | GET /api/products/:id | public route
router.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const product = await Product.findById(req.params.id)

		if (product) {
			res.json(product)
		} else {
			res.status(404)
			throw new Error('Product not found')
		}
	})
)

export default router
