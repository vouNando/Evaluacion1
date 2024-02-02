import React from 'react'
import { SafeAreaView } from 'react-native'
import { Clasificacion } from './src/Screens/Clasificacion'
import { Box1 } from './src/Screens/Box1'
import { Box2 } from './src/Screens/Box2'
import { Box3 } from './src/Screens/Box3'
import { Box4 } from './src/Screens/Box4'
import { Box5 } from './src/Screens/Box5'
import { Box6 } from './src/Screens/Box6'

export const App = () => {
  return (
   <SafeAreaView style={{flex:1}}>
     {/* <Clasificacion/>  */}
     {/* <Box1/>  */}
     {/* <Box2/>  */}
     {/* <Box3/>  */}
     {/* <Box4/>  */}
   {/* <Box5/>  */}
     <Box6/> 
   </SafeAreaView>
  )
}
export default App;
