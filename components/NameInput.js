import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, Modal, Image } from 'react-native';


function NameInput(props){
    const [enteredNameText, setEnteredNameText] = useState('');
    function NameInputHandler(enteredNameText){
        setEnteredNameText(enteredNameText);
    }

    function addNameHandler(){
        

        if (enteredNameText == ''){
            Alert.alert(
                "Warning!",
                "Warning!",
                [{
                    text:"Ok",
                    onPress: () => console.log("Ok Pressed"),                
                }]
            );
        }
        else{
            props.onAddName(enteredNameText);
            setEnteredNameText('');
        }

        
    }

    return(
      <Modal visible={props.visible}  animationType="slide">
        <View style={styles.inputContainer}>
          <Image source={require('../assets/images/pngegg.png')} style={styles.image}/>
          <TextInput style={styles.textInput} placeholder='Enter Any Name' onChangeText={setEnteredNameText} value={enteredNameText} />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <TouchableOpacity
                style={
                  {
                    backgroundColor: '#b180f0',
                    padding: '3%',
                    borderRadius: 10
                  }
                }
                onPress={addNameHandler}
              >
                <Text style={styles.text}>TAP HERE!</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                  style={
                    {
                      backgroundColor: '#f31282',
                      padding: '3%',
                      borderRadius: 10
                    }
                  }
                  onPress={props.onCancel}                  
                >
                  <Text style={styles.text}>CANCEL</Text>
                </TouchableOpacity>  
            </View>
            
          </View>

        </View>
      </Modal>
    )

};

export default NameInput;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding: 16,
        backgroundColor:'#311b6b'        
      },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
        margin: 6
      },
      buttonContainer:{
        flexDirection: 'row',
        marginTop: 16
      },
      button:{
        width: '40%',
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        color: 'white',
        padding: '2%'
      },
      image:{
        width: 150,
        height: 150,
        resizeMode: 'contain',
        margin: 5
        
        
      }
})