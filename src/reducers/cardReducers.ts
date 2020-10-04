import { CartItem } from '../enums'

const cartReducer = (
	state = { cartItems: [] },
	action: { type: CartItem; payload: any }
) => {
	switch (action.type) {
		case CartItem.add:
			const item = action.payload
			const existItem = state.cartItems.find(
				(x: any) => x.product === item.product
			)

			if (existItem) {
				return {
					...state,
					cartItems: state.cartItems.map((x: any) =>
						x.product === existItem.product ? item : x
					)
				}
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, item]
				}
			}
		default:
			return state
	}
}
