import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
// import productsList from "../data/productsList";

const Products = ({ productsList }) => {
  return (
    <FlatList
      data={productsList}
      renderItem={({ item }) => (
        <TouchableOpacity className='w-[50%] p-2 flex-1'>
          <View className='w-full'>
            <Image source={{
              uri: item.image,
            }}
              className='w-full aspect-square'
            />
          </View>
          <Text className='text-center text-base'>{item.name}</Text>
        </TouchableOpacity>
      )}
      numColumns={2}
      key={item => item.id}
    />
  )
}

export default Products
