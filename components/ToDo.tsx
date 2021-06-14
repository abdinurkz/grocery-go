import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const ToDo = ({list}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const data = list.map((l) => (
    <View style={styles.row} key={l.id}>
      <Text>{l.name}</Text>
    </View>
  ));
  return (
    <View style={styles.view}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.title}>November 1</Text>
        {
          toggleCheckBox ? (
              <TouchableOpacity style={styles.button} onPress={() => setToggleCheckBox(!toggleCheckBox)}>
                <Text style={styles.buttonText}>
                  -
                </Text>
              </TouchableOpacity>
          ) : (
              <TouchableOpacity style={styles.button}  onPress={() => setToggleCheckBox(!toggleCheckBox)}>
                <Text style={styles.buttonText}>
                  +
                </Text>
              </TouchableOpacity>
          )
        }
      </View>
      {
        toggleCheckBox ? data : null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 16,
    marginTop: 10,
    borderColor: '#ccc',
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 5,
    backgroundColor: 'blueviolet'
  },
  buttonText: {
    color: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default ToDo;
