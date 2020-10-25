import React from 'react';
import {View,Text,Image,StyleSheet,Button,ScrollView} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import Colors from '../../Constants/Colors';
import * as cartActions from '../../store/actions/cart'; 

const ProductDetailScreen = props =>{
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(
        state=>state.products.availableProducts.find(prod=>prod.id===productId));
        const dispatch = useDispatch();
    return(
       <ScrollView>
           <Image style={styles.image} source={{uri:selectedProduct.imageUrl}} />
          <View style={styles.buttons}>
           <Button color={Colors.brightPurple} title='Add to cart' onPress ={()=>{
               dispatch(cartActions.addToCart(selectedProduct))
           }}/>
           </View>
            <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>  
            <Text style={styles.titleDescrp}>{selectedProduct.description}</Text>
       </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = navData =>{
    return {
        headerTitle:navData.navigation.getParam('productTitle')
    };
};
const styles = StyleSheet.create({

image:{
    height:300,
    width:'100%'
},
price:{
    fontSize:20,
    color:Colors.darkGreen,
    margin:20
},
titleDescrp:{
    fontSize:14,
    textAlign:'center',
    fontFamily:'raleway-bold',
    marginHorizontal:20
},
buttons:{
    marginVertical:10,
    alignItems:'center'
}
});

export default ProductDetailScreen;