import React, { FC, useEffect } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'
import Button from '../../common/CustomButton'
import { IPagination } from './interfaces'

export const Pagination: FC<IPagination> = ({ paginationParams }) => {
  const { prevPage, totalPages, nextPage, page, setPage } = paginationParams
  const isDisabledBtnRight = totalPages === page || !totalPages
  const isDisabledBtnLeft = page === 1 || !totalPages

  useEffect(() => {
    if (page > totalPages) {
      setPage(1)
    }
  }, [page, totalPages, setPage])

  return (
    <View style={styles.container}>
      <Button
        buttonStyles={[styles.buttonLeft, styles.button]}
        disabled={isDisabledBtnLeft}
        onPress={prevPage}
        buttonDisabledStyle={
          isDisabledBtnLeft ? styles.buttonDisabledStyle : null
        }
      />
      <Text style={styles.ranges}>
        {totalPages ? `${page} of ${totalPages}` : 'not found'}
      </Text>
      <Button
        buttonStyles={[styles.buttonRight, styles.button]}
        disabled={isDisabledBtnRight}
        buttonDisabledStyle={
          isDisabledBtnRight ? styles.buttonDisabledStyle : null
        }
        onPress={nextPage}
      />
    </View>
  )
}
