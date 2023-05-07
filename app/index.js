import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Home from '../src/screens/Home';
import Details from './details';
import Cart from './cart';

const index = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      {/* <Home /> */}
      {/* <Details /> */}
      <Cart />
    </SafeAreaView>
  )
}

export default index
