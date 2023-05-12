import React from 'react';
import { View, Text, Image, ScrollView, FlatList, Pressable } from 'react-native';
import productsList from '../data/productsList';
import ButtonComponent from '../components/ButtonComponent';
import { useSelector } from 'react-redux';

const ProductDetails = () => {

  // const product = productsList[0]

  const product = useSelector(state => state.products.selectProduct)


  return (
    <View>
      <ScrollView>
        {/* image Carousel */}
        < FlatList
          data={product.images}
          renderItem={({ item }) => (
            <View className='w-screen px-3'>
              <Image source={{ uri: item }} resizeMode='cover' className='w-full aspect-square' />
            </View>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          nestedScrollEnabled={true}
        />
        <View className='px-3'>
          {/* Title */}
          <Text className='my-3 font-medium text-[34px] tracking-wider'>{product.name}</Text>
          {/* price */}
          <Text className='mb-3 font-medium text-base tracking-wider'>${product.price}</Text>
          {/* description */}
          <Text className='mb-20 text-gray-600 leading-7 font-light tracking-wide'>{product.description}</Text>

          {/* Add to cart button */}

        </View>
        {/* navigation icon */}
      </ScrollView >
      <ButtonComponent title={'Add to cart'}></ButtonComponent>
    </View >
  )
}

export default ProductDetails;

// < Pressable className = 'fixed bottom-[10%] w-[75%] bg-black py-3 rounded-full self-center' >
//   <Text className='text-center text-lg text-white tracking-wider'>Add to cart</Text>
//     </ Pressable >
