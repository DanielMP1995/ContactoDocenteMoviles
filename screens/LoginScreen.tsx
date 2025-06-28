import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function LoginScreen({ navigation }: any) {
    return (

        <View style={styles.container}>
            <Text style={ [ styles.txt, {fontSize:80}]}>Login</Text>

            <TouchableOpacity style={styles.btn} onPress={()=> navigation.navigate("Tabs")}>

                <View style={styles.fila}>
                <Text style={styles.txt}>Ir a Calculadora</Text>
                <MaterialCommunityIcons name="login-variant" size={60} color="#000000f0" /> 
                </View>

                <Image style={styles.img} source={require("../assets/imagenes/cal.jpg")}/>

            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: "#25937296",
        flex:1
    },
    txt:{
        color: 'white',
        fontSize:40
    },
    btn:{
        backgroundColor: "gray",
        width: "80%",
        height: 150,
        borderRadius:30,
        alignItems: 'center',
        padding:20

    },
    img:{
        height:200,
        width:"50%"
    },
    fila:{
        flexDirection: 'row-reverse'
    }

})