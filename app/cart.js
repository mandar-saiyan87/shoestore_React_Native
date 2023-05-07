import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import ProductCart from '../src/screens/ProductCart'

const Cart = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ProductCart />
    </SafeAreaView>
  )
}

export default Cart