import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback,ImageBackground} from 'react-native';
import Colors from '../../Constants/Colors';
const CategoryGridView = props => {
    let TouchableComp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version>= 21) {
        TouchableComp = TouchableNativeFeedback;
    }
return(
    <View  style ={styles.gridItem}>
    <TouchableComp 
       style={{flex:1}}
        onPress = {props.onSelect}>
<View style ={{...styles.gridContainer, ...{backgroundColor: props.color}}}>   
    <ImageBackground style={styles.background} source={{uri:props.imageUri}}/>
       
         </View>
         <View>
    <Text style={styles.CategoryTitle}>{props.title}</Text>
    </View>
         </TouchableComp>
         </View>
);
};

const styles = StyleSheet.create({
    gridItem:{
        flex:1,  //it can get as much space as it can get
        margin:15,
        height:150,
        borderRadius:10,
        elevation: 5,   // this will help get shadow in android and also the ripple effect
        overflow:Platform.OS === 'android' && Platform.Version >=21 ? 'hidden'
         : 'visible'
             
    },
    gridContainer:{
        flex:1,
        borderRadius : 10,
        shadowColor:'black',
        shadowOpacity: 0.27,
        shadowOffset: {width:0, height:2},
        shadowRadius:10,
        padding: 10,
        justifyContent: 'center',
        alignItems:'center'
        
    },
    CategoryTitle:{
        fontFamily: 'raleway-bold',
        fontSize:20,
        textAlignVertical:'bottom',
        alignItems:'center',
        color:Colors.black
    },
    background:{
      //  opacity: .25,
        justifyContent: 'center',
        alignItems:'center',
        position: 'absolute', 
        top: 4,
        left: 4, 
        right: 4,
        bottom: 4
    }
});

export default CategoryGridView;