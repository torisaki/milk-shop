import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 30,
      alignItems: 'center'
    },
  });

const PriceTable = ({price, title}) => {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{price} VNĐ</Text>
    </View>
  )
}

export default PriceTable