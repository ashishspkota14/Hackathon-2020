import React,{useState, useEffect} from 'react';
import {FlatList,TouchableHighlight,View,ActivityIndicator,StyleSheet,Text} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../../Components/UI/headerButton';
import OrderItem from '../../Components/shop/OrderItem';
import * as ordersActions from '../../store/actions/orders';
import Colors from '../../Constants/Colors';

const OrdersScreen = props =>{
     
   const [isLoading, setIsLoading] = useState(false); 
    const orders = useSelector(state=>state.orders.orders);  // first orders is accessing reducer from combinedReducer while 2nd is a state orders from reducer
    const dispatch = useDispatch();
     useEffect(()=>{
         setIsLoading(true)
        dispatch(ordersActions.fetchOrders()).then(()=>{
            setIsLoading(false);
        })  //.catch(){} here if wamt to use
     },[dispatch]);

  if  (isLoading) {
      return (
          <View style={styles.centered}>
              <ActivityIndicator
              size='large'
              color={Colors.brightPurple}
              />
          </View>
      )
  }
  if (orders.length===0){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text> NO products yet Order some !</Text>
        </View>
    );
}


    return (
    <FlatList
    data={orders}
    keyExtractor={item=>item.id}
    renderItem={itemData=><OrderItem
    amount={itemData.item.totalAmount.toFixed(2)}
    date={itemData.item.readableDate}
    items={itemData.item.items}
    />}
    />

    );
};

OrdersScreen.navigationOptions = navData =>{
return{
    HeaderTitle:'Your Orders',
    headerLeft:()=>(
        <TouchableHighlight>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
         title='menu'
         iconName='ios-menu'
         onPress={()=>{navData.navigation.toggleDrawer()}}
         />
            </HeaderButtons>
        </TouchableHighlight>
    ) 

}

};

const styles = StyleSheet.create({
    centered:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default OrdersScreen;