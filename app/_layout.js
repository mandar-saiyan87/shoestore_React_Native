import { Stack, useRouter } from "expo-router";

import { Pressable, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from '../src/store/store'


export default () => {

  

  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  )
}




{/* <Provider store={store}>
  <Stack>
    <Stack.Screen name="index"
      options={{
        headerShadowVisible: false,
        headerTitle: 'Products',
        headerRight: () => (
          <Pressable className='px-3 active:opacity-30 items-center' onPress={() => router.push('cart')}>
            <View className='flex-1 items-center justify-center bg-red-500 rounded-full px-1 -mb-1 self-end'>
              <Text className='text-[10px] font-bold text-white'>1</Text>
            </View>
            <FontAwesome5 name="shopping-cart" size={20} color="gray" />
          </Pressable>
        )
      }}
    />
    <Stack.Screen name="details"
      options={{
        presentation: 'modal',
        animation: 'slide_from_bottom',
        headerShadowVisible: false,
        headerTitle: 'Product Details',
      }}
    />
    <Stack.Screen name="cart"
      options={{
        headerShadowVisible: false,
        headerTitle: 'Your Cart',
      }}
    />
  </Stack>
</Provider> */}