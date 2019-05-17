import React, {Component} from 'react';
import { Image, StyleSheet } from 'react-native';

class Images extends React.Component {
render(){
   return(
           <Image style={styles.imageStyle} source ={ require('../assets/myPhoto.jpg')}/>
   ) 
}
}
export default Images;

const styles = StyleSheet.create({
    imageStyle:{
        height:250,
        width:250,
        marginLeft:50
    }
}) 