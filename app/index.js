import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import Home from '../src/screens/Home';

const index = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <Home />
    </SafeAreaView>
  )
}

export default index
