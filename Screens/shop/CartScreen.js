import React, {useState} from 'react';
import {View,Text,FlatList,StyleSheet,Button,ActivityIndicator, Platform} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../../Constants/Colors';
import CartItem from '../../Components/shop/CartItem';
import * as cartActions from '../../store/actions/cart'; 
import *as ordersActions from '../../store/actions/orders';
//import Card from '../../Components/UI/Card';

const CartScreen = props =>{
    const [isLoading, setIsLoading] = useState(false);

const totalCartAmount = useSelector(state=>state.cart.totalAmount);    // .cart name here is from Reducer to get value from cart Reducer
const cartItems = useSelector(state=>{
    const transformedCartItems=[];

    for (const keyHere in state.cart.items){
        transformedCartItems.push({
            productId:keyHere,
            productTitle:state.cart.items[keyHere].productTitle,
            productPrice:state.cart.items[keyHere].productPrice,
            quantity:state.cart.items[keyHere].quantity,
            sum:state.cart.items[keyHere].sum
        });
    }
  return transformedCartItems.sort((a,b)=>
  a.productId > b.productId ? 1:-1
  );
});
const dispatch =useDispatch();

const sendOrderHandler =async ()=>{
    setIsLoading(true);
   await dispatch(ordersActions.addOrder(cartItems,totalCartAmount))
   setIsLoading(false);
}
return(
  
    <View style={styles.screen}>
        <View style={styles.summary}>
            <Text style={styles.summaryText}>Total: 
            <Text style={styles.price}> ${Math.round(totalCartAmount.toFixed(2)* 100)/100 } </Text> </Text> 
            {
            isLoading ?
             <ActivityIndicator size='large' color={Colors.brightPurple}
            /> 
            :
            <Button 
            title='Order Now'
             color={Platform.OS==='ios'?Colors.darkWhite:Colors.brightPurple}
             disabled={cartItems.length!==0 ? false:true}
             onPress={sendOrderHandler}
            /> }
            
        </View>
<FlatList 
data={cartItems}
keyExtractor={item=>item.productId}
renderItem={itemData=> <CartItem 
quantity={itemData.item.quantity}
title={itemData.item.productTitle}
amount={itemData.item.sum.toFixed(2)}
deletable   
onRemove={()=>{
dispatch(cartActions.removeFromCart(itemData.item.productId));
}}
/>}
/>

    </View>
    
);

};

CartScreen.navigationOptions = navData =>{
    return{
        HeaderTitle:'Your Orders'
    }
    
    };

const styles = StyleSheet.create({
screen:{
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    elevation:5,
    borderRadius:10,
    backgroundColor:Colors.brightPurple,
    margin:20
},
summary:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20,
    padding:10
},
summaryText:{
fontFamily:'raleway-bold',
fontSize:18
},
price:{
    color:Colors.darkWhite
}
});

export default CartScreen;