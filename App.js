import React from 'react';
import List from './components/list';
import InputText from './components/InputText';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const App =()=>{
  return(
    <View>
      <ScrollView>
      <List/>
      <InputText/>
      </ScrollView>
    </View>
  )
}
export default App;