import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const ContadorScreen = () => {
  const [cont, setcont] = useState(10);
  const aumentar = () => {
    setcont(cont + 1);
  };
  const disminuir = () => {
    setcont(cont - 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {cont}</Text>
      <Fab title="+1" position="br" onPress={aumentar}></Fab>
      <Fab title="-1" position="bl" onPress={disminuir}></Fab>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
  fabLocationR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
