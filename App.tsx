import React, { FC, useState } from 'react'
import { HomeStackNavigator } from './src/navigation/HomeStackNavigator '
import { NavigationContainer } from '@react-navigation/native'
import { QuotesSearchContext } from './src/context/QuotesSearchContext'

const App: FC = () => {
  const [context, setContext] = useState<string>('')

  return (
    <QuotesSearchContext.Provider value={[context, setContext]}>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </QuotesSearchContext.Provider>
  )
}

export default App
