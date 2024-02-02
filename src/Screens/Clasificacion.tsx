import React, { useState } from 'react'
import {  Button, StyleSheet, Text, View } from 'react-native'

export const Clasificacion = () => {

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    const [pares, setNumPares] = useState<number[]>([])
    const [impares, setNumImpares] = useState<number[]>([])

    const clasificacion =()=>{

        const pares = numeros.filter(num => num % 2 === 0)
        const impares = numeros.filter(num => num % 2 !== 0)
        
        setNumPares(pares);
        setNumImpares(impares);
    }
    const  resetear = () => {
        setNumImpares([]);
        setNumPares([]);
    }
          
  return (
   <View>
    <Text style={styles.title}> Clasificacion de numeros</Text>
    <Button  title='clasificar' onPress={clasificacion}/>
    
    <Text style={styles.num}> Numeros pares: {pares}</Text> 
    <Text style={styles.num}> Numeros impares: {impares}</Text>
    <Button title='Resetear' onPress={resetear} />
   </View>
  )
}
const styles= StyleSheet.create({
    title:{
        fontSize:30,

    },
    num:{
        fontSize:20,
        marginVertical:10

    }
})
