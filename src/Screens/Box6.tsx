import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Box6 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxPurple}></View>
        <View style={styles.boxOrange}></View>
        <View style={styles.boxGreen}></View>
    </View>
  )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#265073',
        //flexDirection:'row',
        //alignContent: 'center',
        //alignItems: 'center'
    } ,
    boxPurple:{
        backgroundColor : '#5856D6',
        width: 410,
        height: 200,
        borderColor: 'white',
        borderWidth: 10,
        alignItems:'flex-start',
        marginTop: 10,
        marginLeft:0
    },
    boxOrange:{
         backgroundColor : '#F0A23B',
         width: 410,
         height: 200,
         borderColor: 'white',
         borderWidth: 10,
         alignItems:'flex-start',
         marginTop: 0,
         marginLeft:0
         
    },
    boxGreen:{
        backgroundColor : 'green',
        width: 410,
        height: 370,
        borderColor: 'white',
        borderWidth: 10,
        alignItems:'flex-start',
        marginLeft:0,
        marginTop:0,
        

    }
})
