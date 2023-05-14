import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import CartListItem from "../components/CartListItem";
// import cartProducts from "../data/cart";
import ShoppingCartTotalFooter from "../components/ShoppingCartTotalFooter"
import ButtonComponent from '../components/ButtonComponent';
import { useSelector } from 'react-redux';



const ProductCartScreen = () => {

  const cartProducts = useSelector(state => state.cart.cartItems)
  return (
    <View>
      <FlatList
        className='px-2'
        data={cartProducts}
        renderItem={({ item }) => (
          <CartListItem cartProduct={item} />
        )}
        key={item => item.product.id}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ShoppingCartTotalFooter}
      />
      <ButtonComponent title={'Checkout'}></ButtonComponent>
    </View>
  )
}

export default ProductCartScreen;

{/* <CartListItem /> */ }