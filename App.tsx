import React, {FC} from 'react'
import {HomeStackNavigator} from './src/navigation/HomeStackNavigator '
import {NavigationContainer} from '@react-navigation/native'

const App: FC = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  )
}

export default App
