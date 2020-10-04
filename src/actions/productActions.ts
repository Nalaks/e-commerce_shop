import { ProductDetails } from './../enums'
import axios from 'axios'
import { ProductList } from '../enums'

const listProducts = () => async (
	dispatch: (arg0: { type: ProductList; payload?: any }) => void
) => {
	try {
		dispatch({ type: ProductList.request })
		const { data } = await axios.get('api/products')
		dispatch({ type: ProductList.success, payload: data })
	} catch (err) {
		dispatch({
			type: ProductList.fail,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message
		})
	}
}

const listProductDetails = (id: string) => async (
	dispatch: (arg0: { type: ProductDetails; payload?: any }) => void
) => {
	try {
		dispatch({ type: ProductDetails.request })
		const { data } = await axios.get(`/api/products/${id}`)
		dispatch({ type: ProductDetails.success, payload: data })
	} catch (err) {
		dispatch({
			type: ProductDetails.fail,
			payload:
				err.response && err.response.data.message
					? err.response.data.message
					: err.message
		})
	}
}

export { listProducts, listProductDetails }
