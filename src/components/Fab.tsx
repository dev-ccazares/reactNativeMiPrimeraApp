import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, position, onPress}: Props) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={[styles.fab, position == 'br' ? styles.fabR : styles.fabL]}
        onPress={onPress}>
        <Text style={styles.fabText}>{title}</Text>
      </TouchableOpacity>
    );
  };
  const android = () => {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple('#ABB2B9 ', false, 40)}
        onPress={onPress}>
        <View
          style={[styles.fab, position == 'br' ? styles.fabR : styles.fabL]}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  };
  return (
    <View
      style={[
        styles.fabLocation,
        position == 'br' ? styles.fabLocationR : styles.fabLocationL,
      ]}>
      {Platform.OS === 'ios' ? ios() : android()}
    </View>
  );
};
const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  fabLocationR: {
    right: 25,
  },
  fabLocationL: {
    left: 25,
  },
  fab: {
    width: 80,
    height: 80,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabR: {
    backgroundColor: '#5856D6',
  },
  fabL: {
    backgroundColor: '#E74C3C',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
