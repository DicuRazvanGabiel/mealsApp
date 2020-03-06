import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from "react-native";

import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

const FavoritesNavigator = () => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            mode: 'modal'
        }}>
            <Stack.Screen name='Favorites!' component={FavoritesScreen} />
            <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
        </Stack.Navigator>
    )
}

export default FavoritesNavigator