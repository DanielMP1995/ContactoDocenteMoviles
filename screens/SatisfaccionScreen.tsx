import { Button, StyleSheet, Text, View, Alert, Switch, TextInput } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'

export default function SatisfaccionScreen() {
  const [contacto, setcontacto] = useState("")
  const [recomendacion, setrecomendacion] = useState("")
  const [valoracion, setvaloracion] = useState("")
  const [visible, setvisible] = useState(false)

  const enviarEncuesta = () => {
    Alert.alert("Encuesta Enviada", "¡Gracias por tu participación!")
    console.log({
      contacto,
      recomendacion,
      valoracion,
      permitirContacto: visible
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Encuesta de Satisfacción</Text>

      <TextInput
        placeholder='Ingresa tu Contacto'
        keyboardType='numeric'
        style={styles.input}
        value={contacto}
        onChangeText={setcontacto}
      />

      <Text style={styles.label}>¿Recomendarías el producto?</Text>
      <RadioButton.Group
        onValueChange={setrecomendacion}
        value={recomendacion}
      >
        <RadioButton.Item label="Sí" value="si" />
        <RadioButton.Item label="No" value="no" />
        <RadioButton.Item label="Quizás" value="quizas" />
      </RadioButton.Group>

      <Text style={styles.label}>Valoración del Producto</Text>
      <TextInput
        placeholder='Ingresa tu razón de valoración'
        style={styles.input}
        value={valoracion}
        onChangeText={setvaloracion}
      />

      <View style={styles.switchRow}>
        <Switch
          value={visible}
          onValueChange={() => setvisible(!visible)}
        />
        <Text style={styles.switchLabel}>Permitir contacto para seguimiento</Text>
      </View>

      <Button
        title='Enviar Encuesta'
        onPress={enviarEncuesta}
        color="#88b04b"
      />
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
  label: {
    marginBottom: 8,
    color: '#3b5a40',
    fontSize: 16,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    marginLeft: 10,
    color: '#6b8e23',
  },
})
