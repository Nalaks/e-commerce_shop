export interface IProductDetail {
	_id: string
	name: string
	image: string
	description: string
	brand: string
	category: string
	price: number
	numReviews: number
	rating: number
	countInStock: number
}

export interface RatingProps {
	product: IProductDetail
}

export interface ErrorProps {
	message: string
}

export interface Params {
	id: string
}

export interface RootState {
	productList: any
	productDetails: any
}
