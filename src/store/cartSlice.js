import { createSlice, createSelector } from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
  delivery: 15,
  freeDelivery: 200,

}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload.product;
      // to avoid duplication of product in cart
      const cartItem = state.cartItems.find(item => item.product.id === newProduct.id)

      if (cartItem) {
        cartItem.quantity += 1
      } else {
        state.cartItems.push({ product: newProduct, quantity: 1 })
      }
    },
    changeQty: (state, action) => {
      const { productId, amount } = action.payload
      const cartItem = state.cartItems.find(item => item.product.id === productId)
      if (cartItem) {
        cartItem.quantity += amount
      }
      // if quantity is 0, remove item from cart
      state.cartItems = state.cartItems.filter(item => item.quantity !== 0)
    },


  }
})

export const numberOfItems = (state) => state.cart.cartItems.length;

export const itemSubtotal = (state) => state.cart.cartItems.reduce((price, item) => (price + item.product.price * item.quantity), 0)

export const cartState = (state) => state.cart

export const deliveryFees = createSelector(
  cartState,
  itemSubtotal,
  (cart, subtotal) => subtotal < cart.freeDelivery & subtotal != 0 ? cart.delivery : 0
)


export const cartTotal = createSelector(
  itemSubtotal,
  deliveryFees,
  (subtotal, delivery) => subtotal > 0 ? subtotal + delivery : 0
)