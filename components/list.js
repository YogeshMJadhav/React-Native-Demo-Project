import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
   
class List extends Component {
   state = {
      names: [
         {
            id: 0,
            name: 'Akshay',
         },
         {
            id: 1,
            name: 'Trush',
         },
         {
            id: 2,
            name: 'Pravin',
         },
         {
            id: 3,
            name: 'BobiBhai',
         },{
            id: 4,
            name: 'Aniket',
         },
         {
            id: 5,
            name: 'Abhijeet',
         },
         {
            id: 6,
            name: 'Mukund',
         },
         {
            id: 7,
            name: 'BobiBhai',
         },{
            id: 8,
            name: 'Ron',
         },
         {
            id: 9,
            name: 'Dan',
         },
         {
            id: 10,
            name: 'Shaw',
         },
         {
            id: 11,
            name: 'Bhai',
         }
      ]
   }
   alertItemName = (item) => {
      alert( "Hello "+item.name+ ",How are you...")
   }
   

   render() {
      return (
         <View>
            
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.name}
                     </Text>
                  </TouchableOpacity>
               ))
            }
            </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 20,
      backgroundColor: '#d9f9b1',
      alignItems: 'center',
   },
   text: {
      color: '#4f603c'
   },
   input:{
       margin: 15,
       height: 50,
       borderColor:'#7a42f4',
       borderWidth: 1

   },
   submitButton:{
       backgroundColor:'#7a42f4',
       height:50,
       padding: 10,
       margin: 15,
   },
   SubmitButtonTextColor:{
       color: 'white'
   }
})