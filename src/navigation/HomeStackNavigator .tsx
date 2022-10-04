import React, { FC } from 'react'
import { Routs } from '../routs/routs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../components/Home'
import { Details } from '../components/Details'
import { StackNavigatorParam } from './types'
import { QuotesSearch } from '../components/QuotesSearch'

const Stack = createNativeStackNavigator<StackNavigatorParam>()

export const HomeStackNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routs.home}
        component={Home}
        options={{
          headerLeft: () => <QuotesSearch />,
          headerTitle: ''
        }}
      />
      <Stack.Screen name={Routs.details} component={Details} />
    </Stack.Navigator>
  )
}
