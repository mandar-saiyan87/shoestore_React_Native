import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { itemSubtotal } from "../store/cartSlice";
import { deliveryFees } from "../store/cartSlice";
import { cartTotal } from "../store/cartSlice";


const ShoppingCartTotalFooter = () => {

  const cartSubTotal = useSelector(itemSubtotal)

  const delivery = useSelector(deliveryFees)

  const cartTotalAmount = useSelector(cartTotal)


  return (
    <View className='py-4 px-1 border-t-[1px] border-gray-400'>
      <View className='flex-row justify-between mb-1'>
        <Text className='text-base text-gray-500'>Subtotal:</Text>
        <Text className='text-base text-gray-500'>{cartSubTotal} US$</Text>
      </View>
      <View className='flex-row justify-between mb-1'>
        <Text className='text-base text-gray-500'>Delivery:</Text>
        <Text className='text-base text-gray-500'>{delivery} US$</Text>
      </View>
      <View className='flex-row justify-between mb-24'>
        <Text className='text-base font-bold'>Total:</Text>
        <Text className='text-base font-bold'>{cartTotalAmount} US$</Text>
      </View>
    </View>
  )
}

export default ShoppingCartTotalFooter;