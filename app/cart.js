import React from 'react'
import { View } from 'react-native'
import ProductCartScreen from '../src/screens/ProductCartScreen'
import { Stack } from 'expo-router'

const cart = () => {
  return (
    <View className='flex-1 bg-white'>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: 'Your Cart',
        }}
      />
      <ProductCartScreen />
    </View>
  )
}

export default cart