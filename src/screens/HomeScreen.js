import React from 'react';
import { View } from 'react-native';
import Products from '../components/Products';
import { useSelector} from 'react-redux';



const HomeScreen = () => {

  const productsList = useSelector(state => state.products.products)

  return (
    <View className='flex-1 p-2'>
      <Products productsList={productsList}/>
    </View>
  )
}

export default HomeScreen
