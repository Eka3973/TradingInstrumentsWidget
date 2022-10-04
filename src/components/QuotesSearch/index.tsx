import React, { FC, useCallback, useContext, useState } from 'react'
import TextInput from '../../common/CustomInput'
import styles from './styles'
import { CommonConstants } from '../../constants'
import { colors } from '../../assets/styles/colors'
import { View } from 'react-native'
import { QuotesSearchContext } from '../../context/QuotesSearchContext'
import { QuotesSearchContextType } from '../../context/types'

export const QuotesSearch: FC = () => {
  const [value, setValue] = useState<string>('')
  const [, setContext] =
    useContext<QuotesSearchContextType>(QuotesSearchContext)

  const handleChange = useCallback(
    (newValue: string) => {
      setValue(newValue)
      setContext(newValue.toLowerCase())
    },
    [setContext]
  )

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        handleChange={handleChange}
        placeholder={CommonConstants.search}
        placeholderTextColor={colors.darkBlue}
        styles={styles.inputSearch}
      />
    </View>
  )
}
