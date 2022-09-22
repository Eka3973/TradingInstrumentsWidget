import type {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {Routs} from '../routs/routs'
import {RouteProp} from '@react-navigation/native'

export type StackNavigatorParam = {
  Home: undefined
  Details: {
    name: string
    id: string
  }
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackNavigatorParam,
  Routs.details
>

export type DetailsScreenRouteProp = RouteProp<StackNavigatorParam, 'Details'>
