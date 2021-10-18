import * as Font from 'expo-font';
import { DB } from './db';

export const bootstrap = async () => {
   try {
      await Font.loadAsync({
         'open-sans-bold': require('../assets/fonts/open-sans-bold.ttf'),
         'open-sans-regular': require('../assets/fonts/open-sans-regular.ttf')
      })

      await DB.init()
      console.log('DB started...');
   } catch (err) {
      console.log('Error: ', err);
   }
}