import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

export default function IMCScreen() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    function calcular() {
        if (!peso || !altura) {
            Alert.alert("Error", "Por favor ingresa peso y altura válidos.");
            return;
        }

        let IMC = peso / (altura * altura);

        if (IMC <= 18.49) {
            Alert.alert("Resultado", "Peso Bajo");
        } else if (IMC >= 18.5 && IMC <= 24.99) {
            Alert.alert("Resultado", "Peso Normal");
        } else if (IMC >= 25 && IMC <= 29.99) {
            Alert.alert("Resultado", "Sobrepeso");
        } else if (IMC >= 30 && IMC <= 34.99) {
            Alert.alert("Resultado", "Obesidad Leve");
        } else {
            Alert.alert("Resultado", "Obesidad Grave o más");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculadora de IMC</Text>

            <TextInput
                placeholder='Ingresa  altura (ej: 1.70)'
                keyboardType='numeric'
                onChangeText={(texto) => setAltura(+texto)}
                style={styles.input}
            />

            <TextInput
                placeholder='Ingresa  peso (ej: 70)'
                keyboardType='numeric'
                onChangeText={(texto) => setPeso(+texto)}
                style={styles.input}
            />

            <Button title='Calcular IMC' onPress={calcular} color="#88b04b" />
        </View>
    );
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
        fontSize: 16,
        color: '#3b5a40',
    },
});
