import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Box1 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        backgroundColor: '#265073',
      },

    boxPurple:{
        backgroundColor : '#5856D6',
        width: 100,
        height: 100,
        borderColor: 'white',
        borderWidth: 10,
        alignItems:'flex-start',
        marginLeft:310
    },
    boxOrange:{
        backgroundColor : '#F0A23B',
        width: 100,
        height: 590,
        borderColor: 'white',
        borderWidth: 10,
        alignItems:'flex-start',
        marginLeft:310
    },
    boxGreen:{
        backgroundColor : 'green',
        width: 100,
        height: 100,
        borderColor: 'white',
        borderWidth: 10,
        alignItems:'flex-start',
        marginLeft:310

    }
})
