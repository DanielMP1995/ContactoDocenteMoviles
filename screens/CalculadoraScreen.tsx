import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function CalculadoraScreen() {
    const [numero1, setnumero1] = useState(0)
    const [numero2, setnumero2] = useState(0)

    useEffect(() => {
        if (numero1 <= -5 || numero1 >= 10) {
            setnumero1(0)
        }
        if (numero2 <= -5 || numero2 >= 10) {
            setnumero2(0)
        }
    }, [numero1, numero2])

    function menos() {
        setnumero1(numero1 - 1)
    }

    function limpiar() {
        setnumero1(0)
        setnumero2(0)
    }

    function suma() {
        let suma = numero1 + numero2
        Alert.alert("Suma", "La suma es " + suma, [
            {
                text: "Borrar",
                onPress: () => limpiar()
            },
            {
                text: "Continuar"
            }
        ])
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculadora</Text>

            <View style={styles.fila}>
                <Button title="-" onPress={menos} color="#a3b18a" />
                <Text style={styles.numero}>{numero1}</Text>
                <Button title="+" onPress={() => setnumero1(numero1 + 1)} color="#a3b18a" />
            </View>

            <View style={styles.fila}>
                <Button title="-" onPress={() => setnumero2(numero2 - 1)} color="#6b8e23" />
                <Text style={styles.numero}>{numero2}</Text>
                <Button title="+" onPress={() => setnumero2(numero2 + 1)} color="#6b8e23" />
            </View>

            <View style={styles.linea} />

            <Button title="Sumar" onPress={suma} color="#88b04b" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafb',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3b5a40',
        marginBottom: 30,
    },
    fila: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    numero: {
        fontSize: 40,
        marginHorizontal: 20,
        color: '#3b5a40',
    },
    linea: {
        height: 1,
        width: "60%",
        backgroundColor: '#a3b18a',
        marginVertical: 25,
    },
})
