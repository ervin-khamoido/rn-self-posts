import React, { useEffect, useState } from 'react';
import {AppLoading} from 'react-native';
import { bootstrap } from './src/bootstrap';
import {AppNavigation} from './src/navigation/AppNavigation';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    <AppLoading
      startAsync={bootstrap}
      onFinish={() => setIsReady(true)} 
      onError={err => console.log(err)} 
    />
  }

  return <AppNavigation />;
}
