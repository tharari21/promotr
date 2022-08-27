import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  FlatList
} from "react-native";
import {useState, useEffect} from 'react'
import { StatusBar } from "expo-status-bar";
import * as Location from 'expo-location'

export default function App() {
  const [errorMessage, setErrorMessage] = useState(null)
  const load = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync()
      console.log(status)
      if (status !== 'granted') {
        setErrorMessage('Access to the location is needed to run the app')
        return
      }
      const location = await Location.getCurrentPositionAsync({})

      console.log(location)
      const {longitude, latitude} = location.coords
      alert(`Longitude: ${longitude}\nLatitude: ${latitude}`)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    load()
  }, [])
  
  return (
    <View style={styles.appContainer}>
      <Text>{errorMessage}</Text>
      <StatusBar  style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  goalsContainer: {
    flex: 4
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
    marginRight: 8
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 16,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'

  }
})