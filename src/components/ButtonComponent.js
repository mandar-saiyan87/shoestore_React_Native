import { View, Text, Pressable } from 'react-native'
import React from 'react'



const ButtonComponent = ({ title, action }) => {


  return (
    <Pressable
      className='fixed bottom-[10%] w-[75%] self-center bg-black py-3 rounded-full active:bg-slate-800'
      onPress={() => action()}
    >
      <Text className='text-center text-lg text-white tracking-wider'>{title}</Text>
    </Pressable>
  )
}

export default ButtonComponent;