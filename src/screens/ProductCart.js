import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import CartListItem from "../components/CartListItem";
import cartProducts from "../data/cart";
import ShoppingCartTotalFooter from "../components/ShoppingCartTotalFooter"


const ProductCart = () => {
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
      <Pressable className='fixed bottom-[10%] w-[75%] self-center bg-black py-3 rounded-full active:bg-slate-800'>
        <Text className='text-center text-lg text-white tracking-wider'>Checkout</Text>
      </Pressable>
    </View>
  )
}

export default ProductCart

{/* <CartListItem /> */ }