import React, { useState } from 'react'
import { Alert, Button, FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Card(props: any) {
  //console.log(props);

  const [visible, setvisible] = useState(false)

  return (
    <View>
      <TouchableOpacity onPress={() => setvisible(!visible)}>
        <Text>{props.informacion.name}</Text>
        <Image style={styles.img} source={{ uri: props.informacion.image }}></Image>
      </TouchableOpacity>
      <Modal
        visible={visible}
        
      >
        <View style={styles.modal}/>
        <View style={styles.modal}>
          <Text style={styles.txt}>{props.informacion.name}</Text>
          <Text style={styles.txt}>{props.informacion.description}</Text>
          <Text style={styles.txt}>{props.informacion.atributos}</Text>
          <Image style={styles.img2} source={{ uri: props.informacion.image }}></Image>
          <Text style={styles.txt}>{props.informacion.name}</Text>

        </View>
        <Button title='Cerrar' onPress={() => setvisible(!visible)}/>

      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({

  img: {
    width: 100,
    height: 100,
    resizeMode: "contain"

  },
  modal:{
    backgroundColor: "#7cdf20f0",
    flex:1
  },
  txt:{
    fontSize: 20,
    textAlign: "center"

  },
  img2: {
    width: 200,
    height: 200,
    alignSelf: "center",
    resizeMode: "contain"


  }
})