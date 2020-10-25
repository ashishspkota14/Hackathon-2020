import React,{useState} from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
//import ShopNavigator from './navigation/ShopNavigator';
import NavigationContainer from './navigation/NavigationContainer';
import *as Font from 'expo-font';
import {AppLoading} from 'expo';
import cartReducer from './store/reducers/cart';
import productsReducer from './store/reducers/products';
import ordersReducer from './store/reducers/orders';
import authReducer from './store/reducers/auth';
import ReduxThunk from 'redux-thunk';

const rootReducer =combineReducers({
products:productsReducer,
cart: cartReducer,
orders:ordersReducer,
auth: authReducer
});

const store =createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {   //fetching costum fonts for my app using Async
  return Font.loadAsync({
    'raleway-blackItalic' : require('./assets/fonts/Raleway-BlackItalic.ttf'),
    'raleway-bold' : require('./assets/fonts/Raleway-Bold.ttf'),
    'raleway-regular' : require('./assets/fonts/Raleway-Regular.ttf'),
    'raleway-thin' : require('./assets/fonts/Raleway-Thin.ttf')
  });
}; 


export default function App() {
const [fontLoaded, setFontLoaded] = useState(false); //initially it's false because app hasn't been loaded 
if (!fontLoaded) 
{
  return(
  <AppLoading 
  startAsync = {fetchFonts} 
  onFinish = {() => setFontLoaded(true) }
  /> //if assets(fonts here) is not loaded we display loading screen and load assets for app
  );  
 
} 
  return (
    <Provider store={store}>
   <NavigationContainer/>
    </Provider>
  );
}
