import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta( props : any ) {

    console.log(props.informacion.images.main);

    function mostrarMas( data: any){
        
        //Para movil
        //Alert.alert("Mas Informacion", data.name.first + "trabaja como" + data.occupation)
        //Para web
        alert(data.name.first+" trabaja como " + data.occupation)

    }

    return (

        <TouchableOpacity onPress={()=>mostrarMas( props.informacion)} style={styles.btn}>
            <Image source={{uri: props.informacion.images.main}} style={styles.img} />
            <View>
            <Text style={styles.txt}>{props.informacion.name.first} {props.informacion.name.last}  </Text>
            <Text>{props.informacion.species}</Text>
            <Text>{props.informacion.gender}</Text>
        </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    img:{
        height: 200,
        width:100,
        resizeMode: "contain"

    },
    txt:{
        fontSize: 20,
        textAlign: "right",
        alignSelf:"center"
    },
    btn:{
        backgroundColor: "gray",
        margin:5,
        borderRadius: 20,
        alignItems: "flex-start",
        flexDirection: "row"

    }
})