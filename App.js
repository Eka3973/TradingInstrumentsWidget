import React from 'react'
import {MailComponent} from './src/MailComponent'
import {NavigationContainer} from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer initialRouteName="Main">
      <MailComponent />
    </NavigationContainer>
  )
}

export default App
