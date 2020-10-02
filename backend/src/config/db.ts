import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const db = await mongoose.connect(process.env.Mongo_URI || '', {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true
		})
		console.log(`Mongo connected ${db.connection.host}`)
	} catch (err) {
		console.error(err.message)
		process.exit(1)
	}
}

export default connectDB
