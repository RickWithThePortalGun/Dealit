import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import colors from '../config/colors'
import {MaterialCommunityIcons} from "@expo/vector-icons"

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close-thick' color={colors.white} size={25} />
        </View>
        <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can' color={colors.white} size={25} />

</View>
    <Image resizeMode='contain' source={require("../assets/chair.jpg")} style={styles.image}/>
    </View>
  )
}

const styles=StyleSheet.create({
    image:{
        width:"100%",
        height:"100%"
    },
    container:{
        backgroundColor:colors.black,
        flex:1,
        position:"relative"
    },
    closeIcon:{
        position:"absolute",
        top:40,
        left:30
    },
    deleteIcon:{
        position:"absolute",
        top:40,
        right:30
    }
})

export default ViewImageScreen