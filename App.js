import React from 'react';
import List from './components/list';
import Images from './components/Image';
import InputText from './components/InputText';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const App = () => {
  return(
    <View>
      <ScrollView>
        <List/>
        <InputText/>
        <Images/>
      </ScrollView>
    </View>
  )
}
export default App; 

