import React from "react";
import { View, Text } from "react-native";


const ShoppingCartTotalFooter = () => {
  return (
    <View className='py-4 px-1 border-t-[1px] border-gray-400'>
      <View className='flex-row justify-between mb-1'>
        <Text className='text-base text-gray-500'>Subtotal:</Text>
        <Text className='text-base text-gray-500'>500 US$</Text>
      </View>
      <View className='flex-row justify-between mb-1'>
        <Text className='text-base text-gray-500'>Delivery:</Text>
        <Text className='text-base text-gray-500'>10 US$</Text>
      </View>
      <View className='flex-row justify-between mb-24'>
        <Text className='text-base font-bold'>Total:</Text>
        <Text className='text-base font-bold'>510 US$</Text>
      </View>
    </View>
  )
}

export default ShoppingCartTotalFooter;