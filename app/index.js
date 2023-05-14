import React from 'react';
import { Stack, useRouter } from 'expo-router'
import { View, Text, Pressable } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import HomeScreen from '../src/screens/HomeScreen'
import { useSelector } from 'react-redux';
import { numberOfItems } from '../src/store/cartSlice';



const index = () => {

  const router = useRouter();

  const cartItems = useSelector(numberOfItems)

  return (
    <View className='flex-1 bg-white'>
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTitle: 'Products',
          headerRight: () => (
            <Pressable className='px-3 active:opacity-30 items-center' onPress={() => router.push('cart')}>
              <View className='flex-1 items-center justify-center bg-red-500 rounded-full px-1 -mb-1 self-end'>
                <Text className='text-[10px] font-bold text-white'>{cartItems}</Text>
              </View>
              <FontAwesome5 name="shopping-cart" size={20} color="gray" />
            </Pressable>
          )
        }}
      />
      <HomeScreen />
    </View>
  )
}

export default index

