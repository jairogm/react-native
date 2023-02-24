import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, Image, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import styles from './styles/App.style';

const PlaceholderImage = require('./assets/background-image.png');

export default function App() {
  const [text, onChangeText] = useState('Text de prueba para el input');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Button
        buttonStyle={{backgroundColor: 'red'}}
          title="Press me"
          backgroundColor="#ff0000"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>
      </View>
    </SafeAreaView>
  );
}

