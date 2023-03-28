import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {

  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');

  const [botao1, setBotao1] = useState(true);
  const [texto, setTexto] = useState('REMOVER TEXTO');

  const apertou = () => {
    setBotao1(!botao1);


    if (botao1 == false) {
      setTexto('REMOVER TEXTO')
    } else if (botao1 == true) {
      setTexto('REMOVEU')
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Digite um nome: </Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Ex: Gustavo"
          onChangeText={(textoDigitado) => setName(textoDigitado)}
        />

        <Text>Digite a idade: </Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder="Ex: 58"
          onChangeText={(idadeDigitada) => setIdade(idadeDigitada)}
        />

        <View style={styles.subview}>
          {
            botao1 ? <Text> Nome: {name} | Idade: {idade}</Text> : <Text> </Text>
          }
        </View>
        <View>
          <Button title={texto} onPress={apertou} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },

  subview: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
