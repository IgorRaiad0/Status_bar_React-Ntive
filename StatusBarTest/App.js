import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';



export default function App() {

  const [elementos,setElementos]=useState("default")
  const [cor,setCor]=useState("default")
  const [ocultar,setOcultar]=useState(false)
  

  const mudarStatusicones = (corIcones)=>{
    setElementos(corIcones);
  }

   const mudarStatusbarcolor = (corFundo)=>{
    setCor(corFundo);
  }

  const ocultarStatusbar = (ocultar)=>{
    setOcultar(ocultar);
  }



  return (
    <View style={styles.container}>
      <StatusBar barStyle={elementos} backgroundColor={cor} hidden={ocultar}/>
      <Text>Testando alteração dinâmica do componente StatusBar</Text>
      <Text>Precione os botões e veja as alterações na barra de status!</Text>

      <Button color={'red'}
      title='Vermelho'
      onPress={() => mudarStatusbarcolor("red")}
      />

      <Button color={'rgba(40, 126, 230, 0.6)'}
      title='Azul'
      onPress={() => mudarStatusbarcolor("blue")}
      />

      <Button color={'yellow'} 
      title='Amarelo'
      onPress={() => mudarStatusbarcolor("yellow")}
      />

      <Button color='blaclk'
      title='preto'
      onPress={() => mudarStatusbarcolor("black")}
      />

      <Button style={styles.darkIconsBtn}
      title='Icones escuros'
      onPress={() => mudarStatusicones("dark-content")}
      />

      <Button style={styles.ligthIconbtn}
      title='Icones claros'
      onPress={() => mudarStatusicones("ligth-content")}
      />


      <Button 
      title='Ocultar'
      onPress={() => ocultarStatusbar(true)}
      />

      <Button 
      title='Desocultar'
      onPress={() => ocultarStatusbar(false)}
      />


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bbe2e7ff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  redBtn:{
    backgroundColor: 'red',
  }
});
