import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Routs } from '../routs/routs'
import { RouteProp } from '@react-navigation/native'
import { IQuotesDetails } from '../components/Home/interfaces'

export type StackNavigatorParam = {
  Home: undefined
  Details: IQuotesDetails[]
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  StackNavigatorParam,
  Routs.details
>

export type DetailsScreenRouteProp = RouteProp<StackNavigatorParam, 'Details'>
