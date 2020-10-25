import React,{useState} from 'react';
import {View,Text,Button,StyleSheet,Platform} from 'react-native';
import CartItem from './CartItem';
import Colors from '../../Constants/Colors';
import Card from '../UI/Card';

const OrderItem = props =>{

    const [showDetails,setShowDetails] = useState(false);

return(

<View style={styles.orderItem}>
<View style={styles.summary}>
<Text style={styles.totalAmount}>${props.amount}</Text>
<Text style={styles.date}>{props.date}</Text>
</View>
<Button
title={showDetails ? 'Hide Details': 'Show Details'}
color={Platform.OS==='android'? Colors.brightPurple :Colors.darkWhite}
onPress={()=>{
    setShowDetails(prevState=>!prevState)
}}
/>
{ showDetails && 
(<View style={styles.detailItem} > 
    {props.items.map(cartItem=> (
    <CartItem
    key={cartItem.productId}
    quantity={cartItem.quantity}
    amount={cartItem.sum}
    title={cartItem.productTitle}
    />
    ))} 
     </View>
)}
</View>
);
};

const styles = StyleSheet.create({

orderItem:{
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    elevation:5,
    borderRadius:10,
    backgroundColor:Colors.brightPurple,
    margin:20,
    padding:10,
    alignItems:'center'
},
summary:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:"center",
    width:"100%",
    marginBottom:15
},
totalAmount:{
    fontFamily:'raleway-bold',
    fontSize:16
},
date:{
    fontSize:16,
    fontFamily:'raleway-bold',
    color:Colors.black
},
detailItem:{
    width:'100%',

}

});

export default OrderItem;