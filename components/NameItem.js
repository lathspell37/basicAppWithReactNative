import { StyleSheet, View, Text, Pressable } from 'react-native';

function NameItem({ item, onDeleteItem, id }) {
  return (
    
      <View style={styles.container}>
        <Pressable android_ripple={{color: '#dddddd'}} 
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}
        >
          <Text style={styles.text}>{item.text}</Text>
        </Pressable>
      </View>
    
  );
};

export default NameItem;

const styles = StyleSheet.create({
  container: {
    margin: '2%',
    borderRadius: 6,
    backgroundColor: '#5e0acc',    
    color: 'white',
    elevation: 8,
    shadowRadius: 10,
    shadowColor: '#5e0acc',
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: .5
  },
  text: {
    color: 'white',
    padding: '2%',
  },
  pressedItem:{
    opacity: 0.5
  }

});


