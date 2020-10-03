import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db'
import productRoutes from './routes/productRoutes'
import { errorHandler, notFound } from './middleware/error'

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
	console.log(
		`running in ${process.env.NODE_ENV} mode and listening on port ${PORT}`
	)
)

// product route
app.use('/api/products', productRoutes)

// 404 not found
app.use(notFound)

// error handling
app.use(errorHandler)
