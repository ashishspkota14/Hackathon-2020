import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Colors from '../Constants/Colors';
import {Platform, SafeAreaView, Button, View} from 'react-native';
import ProductsOverviewScreen from '../Screens/shop/ProductOverviewScreen';
import ProductDetailScreen from '../Screens/shop/ProductDetailScreen';
import CartScreen from '../Screens/shop/CartScreen';
import OrdersScreen from '../Screens/shop/OrdersScreen';
import UserProductScreen from '../Screens/user/UserProductScreen';
import EditProductScreen from '../Screens/user/EditProductScreen';
import AuthScreen from '../Screens/user/AuthScreen';
import StartupScreen from '../Screens/StartupScreen';
import { Ionicons } from '@expo/vector-icons';
import {useDispatch} from 'react-redux';
import * as authActions from '../store/actions/auth';
import CollegeScreen from '../Screens/shop/CollegeScreen';

const defaultStackNavOptions ={
    headerStyle:{
        backgroundColor:Platform.OS==='android'?Colors.brightPurple:''
    },
    headerTitleStyle:{
        fontFamily:'raleway-bold'
    },
    headerTintColor:Platform.OS==='android'? Colors.darkWhite:Colors.brightPurple
}

const ProductsNavigator = createStackNavigator({

ProductsOverview:ProductsOverviewScreen,
ProductDetail:ProductDetailScreen,
Cart:CartScreen
},
{
    navigationOptions:{
        drawerIcon: drawerConfig => <Ionicons 
        name={Platform.OS==='android'?'md-cart':'ios-cart'}
        size={23}
        color={drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions:defaultStackNavOptions
});

const OrdersNavigator = createStackNavigator({
    Orders:OrdersScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => <Ionicons 
        name= {Platform.OS==='android'?'md-list':'ios-list'}
        size= {23}
        color= {drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions:defaultStackNavOptions
});

const CollegeNavigator = createStackNavigator({
Exchange:CollegeScreen
}, {
    navigationOptions:{
        drawerIcon: drawerConfig => <Ionicons 
        name='ios-contacts'
        size= {23}
        color= {drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions:defaultStackNavOptions
}

);

const AdminNavigator = createStackNavigator({
    UserProduct: UserProductScreen,
    EditProduct:EditProductScreen
},{
    navigationOptions:{
        drawerIcon: drawerConfig => <Ionicons 
        name={Platform.OS==='android'?'md-create':'ios-create'}
        size={23}
        color={drawerConfig.tintColor}
        />
    },
    defaultNavigationOptions:defaultStackNavOptions
});


const ShopNavigator = createDrawerNavigator({
    Products:ProductsNavigator,
    Orders:OrdersNavigator,
    Admin:AdminNavigator,
    Exchange:CollegeNavigator

},{
    contentOptions:{
        activeTintColor:Colors.brightPurple
    },
    contentComponent: props => {
        const dispatch = useDispatch();
        return(
            <View style ={{flex:1, padding:20}}>
                <SafeAreaView
                forceInset={{ top: 'always', horizontal:'never'}}
                >
                    <DrawerNavigatorItems {...props}/>
                    <Button
                    title='Logout'
                    color={Colors.brightPurple}
                    onPress={()=>{
                    dispatch(authActions.logout());
                   // props.navigation.navigate('Auth');
                    }}
                    />

                </SafeAreaView>
            </View>
        );
    }
});

const AuthNavigator = createStackNavigator({
    Auth: AuthScreen
},{
    defaultNavigationOptions:defaultStackNavOptions
})

const mainNavigator = createSwitchNavigator({
    Startup:StartupScreen,
    Auth: AuthNavigator,
    Shop:ShopNavigator
});

export default createAppContainer(mainNavigator);