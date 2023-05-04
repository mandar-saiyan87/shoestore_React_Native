import React from 'react';
import { View } from 'react-native';
import Products from '../components/Products';
import productsList from '../data/productsList';
const Home = () => {
  return (
    <View className='flex-1 p-2'>
      <Products productsList={productsList} />
    </View>
  )
}

export default Home
