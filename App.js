import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';

import { Inter_500Medium, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';

import AppLoading from 'expo-app-loading';

import theme from './src/styles/theme';
import { Input } from './src/components/Input';
import { CardToDo } from './src/components/CardToDo';


export default function App() {

  const [myThings, setMyThings] = useState([]);
  const [txtInput, setTxtInput] = useState('');


  const [fontsValided] = useFonts({
    Inter_500Medium,
    Inter_700Bold,
    Inter_400Regular
  });

  if (!fontsValided) {
    return <AppLoading />
  };



  const handleNewThing = () => {

    const data = {
      id: String(new Date().getTime()),
      title: txtInput
    };

    setMyThings(oldValues => [...oldValues, data]);

    console.log(myThings);

    setTxtInput('');
  };


  const handleRemoveItem = (id) => {

    Alert.alert('Remover item', 'Deseja remover este item da lista?',
      [
        {
          text: 'Não',
          style: 'cancel'
        },

        {
          text: 'Sim',
          onPress: async () => {

            await setMyThings(oldValues => myThings.filter(item => item.id != id));
          }
        }
      ])


  };



  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.icon}>to.do</Text>
        <Text style={styles.txtHeader}>Você tem <Text style={{ fontWeight: 'bold' }}>{myThings.length} tarefas</Text></Text>
      </View>

      <View style={styles.areaInput}>
        <Input onChangeText={text => setTxtInput(text)} send={handleNewThing} value={txtInput} />
      </View>

      <FlatList
        data={myThings}
        renderItem={({ item }) => (
          <CardToDo title={item.title} onRemoveItem={() => handleRemoveItem(item.id)} />
        )}
        showsVerticalScrollIndicator={false}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.back,
    alignItems: 'center',
  },

  header: {
    width: '100%',
    height: 150,
    backgroundColor: theme.colors.purple,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30
  },

  icon: {
    fontFamily: theme.fonts.InterBold,
    fontSize: 30,
    color: theme.colors.white
  },

  txtHeader: {
    fontFamily: theme.fonts.InterRegular,
    fontSize: 14,
    color: theme.colors.white
  },

  areaInput: {
    bottom: '3.5%'
  }


});
