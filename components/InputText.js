import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

class InputText extends React.Component{
 
    handledEmail = (text) =>{
        this.setState({
            email: text
        })
      }
      handledPassword = (text) =>{
       this.setState({
           password: text
       })
      }
      handledSubmit = (email,password) =>{
       alert('email: ' + email + 'password: ' + password)
      }
    render(){
        return(
            <View>
                <TextInput style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderColorText='#9a73ef'
                autoCapitalize = "none"
                onChangeText={this.handledEmail}
                 >
                </TextInput>
                 <TextInput style={styles.input} 
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderColorText='#9a73ef'
                autoCapitalize = "none"
                onChangeText={this.handledPassword}
                >
                </TextInput>

                <TouchableOpacity style={styles.submitButton}
                    onPress= {()=> this.handledSubmit(this.state.email, this.state.password)}
                >
                    <Text style={styles.SubmitButtonTextColor}> Submit</Text>

                </TouchableOpacity>
                
         </View>
        )
    }
}
export default InputText;

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