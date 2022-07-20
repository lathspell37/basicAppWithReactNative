import { useState } from 'react';
import { StyleSheet, View, Button, Pressable, TextInput, FlatList, Text, TouchableOpacity } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import NameItem from './components/NameItem';
import NameInput from './components/NameInput';

export default function App() {
  const [nameList, setNameList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddNameHandler(){
    setModalVisible(true);  
  }

  function endAddNameHandler(){
    setModalVisible(false); 
  }

  function addNameHandler(enteredNameText) {
    setNameList(currentNameList => [
      ...nameList,
      { text: enteredNameText, id: Math.random().toString() }
    ]);
    endAddNameHandler();
  };
  const renderItem = ({ item, onDeleteItem }) => {
    return (
      <NameItem item={item} 
      onDeleteItem={deleteNameHandler}
      id={item.id}/>
    )
  }
function deleteNameHandler(id){
  setNameList(currentNameList => {
    return currentNameList.filter((name) => name.id !== id);
  })};

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title='Add New Name' color="#5e0acc"
        onPress={startAddNameHandler}/>
        <NameInput visible={modalVisible} onAddName={addNameHandler} onCancel={endAddNameHandler}/>
        <View style={styles.textContainer}>
          <FlatList
            data={nameList}
            renderItem={renderItem}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor:'#1e085a'
  },
  textContainer: {
    flex: 4
  },


});
