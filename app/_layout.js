import { Stack } from "expo-router";
import { Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";

const StackLayout = () => {
  return <Stack
    screenOptions={{
      headerShadowVisible: false,
      headerTitle: 'Filter by size',
      headerTitleStyle: {
        fontWeight: '100',
        fontSize: 16,
      },
      headerTitleAlign: 'left',
      headerLeft: () => (
        <TouchableOpacity className='rotate-90 px-3 mr-2'>
          <Fontisto name="equalizer" size={20} color="black" />
        </TouchableOpacity>
      )
    }}
  >
  </Stack>
}

export default StackLayout;