import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";
// import cartProducts from "../data/cart";

const CartListItem = ({ cartProduct }) => {


  return (
    <View className='flex-row mb-3'>

      <View className='w-[40%] p-2'>
        <Image
          source={{ uri: cartProduct.product.image }}
          className='w-full aspect-square'
        />
      </View>

      <View className='justify-evenly px-3'>
        <View>
          <Text className='font-medium text-base tracking-wide'>{cartProduct.product.name}</Text>
          <Text>Size: {cartProduct.size}</Text>
        </View>


        <View className='flex-row gap-2 items-center'>
          <Feather name="minus-circle"
            size={24}
            color="gray" />
          <Text className='font-bold text-gray-500'>{cartProduct.quantity}</Text>
          <Feather name="plus-circle"
            size={24}
            color="gray" />
        </View>
      </View>

      <View className='flex-1 items-center justify-center'>
        <Text className='font-medium text-xs'>${cartProduct.product.price}</Text>
      </View>

    </View>

  )
}

export default CartListItem

