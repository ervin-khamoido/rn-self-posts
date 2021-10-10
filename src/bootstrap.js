import * as Font from 'expo-font';

export async function bootstrap() {
   await Font.loadAsync({
      'open-sans-bold': require('../assets/fonts/open-sans-bold.ttf'),
      'open-sans-regular': require('../assets/fonts/open-sans-regular.ttf')
   })
}