import React from 'react';
import {View,Text,ImageBackground, StyleSheet,Platform,TouchableOpacity,TouchableHighlight,TouchableNativeFeedback} from 'react-native';
import Colors from '../../Constants/Colors';
//import Card from '../UI/Card';

const ProductItem = props => {
  
    
    return(
        <TouchableHighlight onPress={props.onSelect} 
        style={{backgroundColor:Colors.darkWhite}} 
        underlayColor={Colors.darkWhite}>
        <View style={styles.product}>
            <View style={styles.imageContainer}>
            <ImageBackground style={styles.image} source={{uri:props.image}}/>
            </View>
            <View style={styles.details}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>${props.price.toFixed(2)}</Text>  
            </View>
            <View style={styles.buttons}>
            {props.children}
            </View>
        </View>
        </TouchableHighlight>
        );

};

const styles = StyleSheet.create({
product:{
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    elevation:5,
    borderRadius:10,
    backgroundColor:Colors.brightPurple,
    height:300,
    margin:20,
},
imageContainer:{
    width:'100%',
    height:'60%',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    overflow:'hidden'
},
image:{
    width:'100%',
    height:'100%',
},
title:{
    fontSize:18,
    fontFamily:'raleway-bold',
    color:Colors.darkWhite
},
price:{
    fontSize:15,
    color:Colors.darkWhite
},
buttons:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'flex-end',
    height:'23%',
    paddingHorizontal:10,
    paddingVertical:Platform.OS==='android'? 10:0
},
details:{
  alignItems:'center',
    height:'17%',
    padding:10
}

});

export default ProductItem;

 // let TouchableComp =TouchableNativeFeedback;
    //if (Platform.OS==='android'&& Platform.Version >=21 ) {
     //    TouchableComp= TouchableNativeFeedback;
  //  }
    //else if(Platform.OS==='ios') {
      //  TouchableComp=TouchableOpacity;
   // }   
   //Here using useForeground not helping with background color


   //<Button color={Platform.OS==='android'?Colors.brightPurple:Colors.darkWhite} title='View Details' onPress={props.onViewDetail}/>
 //  <Button color={Platform.OS==='android'?Colors.brightPurple:Colors.darkWhite} title='Add To Cart' onPress={props.onAddToCart}/>