import { ProductList, ProductDetails } from '../enums'

const productListReducer = (
	state = { products: [] },
	action: { type: ProductList; payload: any }
) => {
	switch (action.type) {
		case ProductList.request:
			return { loading: true, products: [] }
		case ProductList.success:
			return { loading: false, products: action.payload }
		case ProductList.fail:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

const productDetailsReducer = (
	state = { product: { reviews: [] } },
	action: { type: ProductDetails; payload: any }
) => {
	switch (action.type) {
		case ProductDetails.request:
			return { loading: true, ...state }
		case ProductDetails.success:
			return { loading: false, product: action.payload }
		case ProductDetails.fail:
			return { loading: false, error: action.payload }
		default:
			return state
	}
}

export { productListReducer, productDetailsReducer }
