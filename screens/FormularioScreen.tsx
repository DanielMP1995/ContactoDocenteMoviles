import { Button, StyleSheet, Switch, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-paper'

const FormularioScreen = () => {
    const [usuario, setusuario] = useState("")
    const [edad, setedad] = useState(0)
    const [datos, setdatos] = useState({ usuario: "", edad: 0 })
    const [visible, setvisible] = useState(false)

    function guardar() {
        if (usuario.trim() === "") {
            console.error("Datos en blanco")
        }
        setdatos({
            usuario: usuario.trim(),
            edad: edad
        })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Formulario</Text>

            <TextInput
                placeholder='Ingresar usuario'
                style={styles.input}
                value={usuario}
                onChangeText={setusuario}
            />

            <TextInput
                placeholder='Ingresar edad'
                style={styles.input}
                value={edad.toString()}
                keyboardType="numeric"
                onChangeText={(texto) => setedad(+texto)}
            />

            <Button title='Guardar' onPress={guardar} color="#88b04b" />

            <Divider style={styles.divider} />

            <View style={styles.switchRow}>
                <Switch value={visible} onValueChange={() => setvisible(!visible)} />
                <Text style={styles.switchTexto}>Mostrar datos</Text>
            </View>

            <Divider style={styles.divider} />

            {visible ? (
                <View>
                    <Text style={styles.txt}>Usuario: {datos.usuario}</Text>
                    <Text style={styles.txt}>Edad: {datos.edad}</Text>
                </View>
            ) : (
                <Text style={styles.txt}>Alerta de Spoiler</Text>
            )}
        </View>
    )
}

export default FormularioScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
        padding: 20,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 26,
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
        fontSize: 16,
        borderRadius: 5,
        marginBottom: 15,
    },
    txt: {
        fontSize: 18,
        color: '#3b5a40',
        marginTop: 10,
    },
    divider: {
        marginVertical: 15,
        backgroundColor: '#a3b18a',
    },
    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switchTexto: {
        marginLeft: 8,
        color: '#6b8e23',
        fontSize: 16,
    },
})
