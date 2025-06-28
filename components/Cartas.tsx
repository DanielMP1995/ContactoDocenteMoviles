import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function Cartas(props: any) {
    const [modal, setmodal] = useState(false);

    return (
        <View>
            <TouchableOpacity onPress={() => setmodal(!modal)}>
                <Text>{props.informacion.titulo}</Text>
                <Image style={styles.img} source={{ uri: props.informacion.imagen }} />
            </TouchableOpacity>

            <Modal visible={modal} transparent animationType="fade">
                <View style={styles.modal}>
                    <View style={styles.modal}>
                        <Text style={styles.txt}>{props.informacion.titulo}</Text>
                        <Text style={styles.txt}>{props.informacion.director}</Text>
                        <Text style={styles.txt}>{props.informacion.genero}</Text>
                        <Text style={styles.txt}>{props.informacion.descripcion}</Text>
                        <Image style={styles.img2} source={{ uri: props.informacion.imagen }} />
                        <TouchableOpacity onPress={() => setmodal(!modal)}>
                            <Text style={styles.txt}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 100,
        resizeMode: 'contain',
    },
    modal: {
        backgroundColor: '#7cdf20f0',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    txt: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 5,
    },
    img2: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
});
