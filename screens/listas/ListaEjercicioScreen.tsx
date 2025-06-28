import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Cartas from '../../components/Cartas';


export default function ListaEjercicioScreen() {
    const [datos, setdatos] = useState<{ title: string; data: any[] }[]>([]);

    async function leer() {
        const resp = await fetch('https://jritsqmet.github.io/web-api/peliculas3.json');
        const json = await resp.json();
        const transformado = [
            {
                title: 'Películas',
                data: json.peliculas
            }
        ];
        setdatos(transformado);
    }

    useEffect(() => {
        leer()

        console.log(datos);

    }, [])

    return (
        <View>
            <Text>lista Externa</Text>
            <SectionList 
                sections={datos}
                renderItem={({ item }) =>
                    <Cartas informacion={item} />
                }
                SectionSeparatorComponent={({ section: { title } }: any) =>
                    <Text style={{ fontSize: 40 }}>{title}</Text>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 20,
    }
})