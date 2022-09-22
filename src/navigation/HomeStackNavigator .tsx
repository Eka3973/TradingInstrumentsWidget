import React, {FC} from 'react'
import {Routs} from '../routs/routs'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Home} from '../components/Home'
import {Details} from '../components/Details'
import {StackNavigatorParamList} from './types'

const Stack = createNativeStackNavigator<StackNavigatorParamList>()

export const HomeStackNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routs.home} component={Home} />
      <Stack.Screen name={Routs.details} component={Details} />
    </Stack.Navigator>
  )
}
