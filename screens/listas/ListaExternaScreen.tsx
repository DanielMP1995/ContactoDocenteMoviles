import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';

export default function ListaExternaScreen() {

  const [datos, setdatos] = useState([])


  async function leer() {

    const resp = await fetch('https://jritsqmet.github.io/web-api/assets/data/api2/sections/crash-s.json');
    const json = await resp.json();
    setdatos(json);

  }

  useEffect(() => {
    leer()
    console.log(datos);

  }, [])


  return (
    <View>
      <Text>ListaExternaScreen</Text>
      <SectionList
        sections={datos}
        renderItem={({ item }) =>
          <Card informacion={item}></Card>
        }

        renderSectionHeader={({section:{title}}: any)=>
        <Text style={{fontSize:40}}>{title}</Text>
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  txt:{
    fontSize: 20
  }
})