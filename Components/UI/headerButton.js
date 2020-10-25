import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons'; 
import Colors from '../../Constants/Colors';
import {Platform} from 'react-native';

const CustomHeaderButton = props =>{
return (
    <HeaderButton {...props} 
    IconComponent={Ionicons} 
    iconSize={23} 
    color={Platform.OS=== 'ios'? Colors.brightPurple :Colors.darkWhite}/>
);
};

export default CustomHeaderButton;