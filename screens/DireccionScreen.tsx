import { Button, StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function DireccionScreen() {
  const [calle, setcalle] = useState("")
  const [numexterior, setnumexterior] = useState(0)
  const [cuidad, setcuidad] = useState("")
  const [referencias, setreferencias] = useState("")

  const [datos, setdatos] = useState({
    calle: "", numexterior: 0, cuidad: "", referencias: ""
  })

  function validez() {
    if (!calle || !numexterior || !cuidad) {
      console.error("Todos los datos son obligatorios")
    }
    setdatos({ calle, numexterior, cuidad, referencias })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Dirección</Text>

      <TextInput
        placeholder='Calle principal'
        style={styles.input}
        onChangeText={setcalle}
        value={calle}
      />

      <TextInput
        placeholder='Número exterior'
        style={styles.input}
        keyboardType='numeric'
        onChangeText={(texto) => setnumexterior(+texto)}
        value={numexterior ? numexterior.toString() : ''}
      />

      <TextInput
        placeholder='Ciudad'
        style={styles.input}
        onChangeText={setcuidad}
        value={cuidad}
      />

      <TextInput
        placeholder='Referencias (opcional)'
        style={styles.input}
        onChangeText={setreferencias}
        value={referencias}
      />

      <Text style={styles.advertencia}>
        Recuerda que todos los campos menos las referencias son obligatorios.
      </Text>

      <Button title='Guardar ' onPress={validez} color="#88b04b" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b5a40',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#a3b18a',
    backgroundColor: '#e6f0d4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    color: '#3b5a40',
  },
  advertencia: {
    marginBottom: 15,
    fontSize: 14,
    textAlign: 'center',
    color: '#6b8e23',
  },
})
