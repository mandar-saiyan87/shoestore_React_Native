import React from 'react'
import { View } from 'react-native'
import ProductDetails from '../src/screens/ProductDetailsScreen'
import { Stack } from 'expo-router'

const details = () => {
  return (
    <View className='flex-1 bg-white'>
      <Stack.Screen
        options={{
          presentation: 'modal',
          animation: 'slide_from_bottom',
          headerShadowVisible: false,
          headerTitle: 'Product Details',
        }}
      />
      <ProductDetails />
    </View>
  )
}

export default details
