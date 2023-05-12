import React from 'react';
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { useRouter } from 'expo-router';
import { useDispatch } from 'react-redux';
import { productSlice } from '../store/ProductSlice';

const Products = ({ productsList }) => {

  const router = useRouter()

  const dispatch = useDispatch()

  return (
    <FlatList
      data={productsList}
      renderItem={({ item }) => (
        <Pressable
          className='w-[50%] p-2 flex-1 active:opacity-40'
          onPress={() => {
            dispatch(productSlice.actions.setSelectProduct(item.id))
            router.push('details')
          }}>
          <View className='w-full'>
            <Image source={{
              uri: item.image,
            }}
              className='w-full aspect-square'
            />
          </View>
          <Text className='text-center text-base'>{item.name}</Text>
        </Pressable>
      )}
      numColumns={2}
      key={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

export default Products
