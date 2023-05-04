import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import ProductDetails from '../src/screens/ProductDetails'

const Details = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ProductDetails />
    </SafeAreaView>
  )
}

export default Details
