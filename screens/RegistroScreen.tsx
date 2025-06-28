import { Button, StyleSheet, Text, View, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'

export default function RegistroScreen() {
    const [nombre, setnombre] = useState("")
    const [apellido, setapellido] = useState("")
    const [email, setemail] = useState("")
    const [telefono, settelefono] = useState("")
    const [contra, setcontra] = useState("")
    const [contra2, setcontra2] = useState("")
    const [visible, setvisible] = useState(false)

    function guardar() {
        if (contra === contra2) {
            console.log("Contraseñas correctas");
        } else {
            console.log("Contraseñas diferentes");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Registro</Text>

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setnombre}
            />

            <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={apellido}
                onChangeText={setapellido}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setemail}
            />

            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                value={telefono}
                onChangeText={settelefono}
                keyboardType="phone-pad"
            />

            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry={!visible}
                value={contra}
                onChangeText={setcontra}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmar Contraseña"
                secureTextEntry={!visible}
                value={contra2}
                onChangeText={setcontra2}
            />

            <View style={styles.switchRow}>
                <Switch value={visible} onValueChange={() => setvisible(!visible)} />
                <Text style={styles.switchTexto}>Mostrar contraseña</Text>
            </View>

            <Button
                title="Guardar"
                onPress={guardar}
                color="#88b04b" 
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9fafb', 
    },
    titulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        color: '#3b5a40', 
    },
    input: {
        borderWidth: 1,
        borderColor: '#a3b18a', 
        padding: 8,
        marginBottom: 12,
        borderRadius: 4,
        color: '#3b5a40', 
        backgroundColor: '#e6f0d4', 
    },
    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    switchTexto: {
        marginLeft: 8,
        color: '#6b8e23', 
    },
})
