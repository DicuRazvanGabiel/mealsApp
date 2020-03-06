import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import MealsNavigator from "./MealsNavigator";
import FavoritesNavigator from "./FavoritesNavigator";

import Colors from "../constants/Colors";

const MealsFavTabNavigator = () => {
    const TabNavigator = createBottomTabNavigator();

    return(
        <TabNavigator.Navigator tabBarOptions={{
            activeTintColor: Colors.accentColor
        }}>
            <TabNavigator.Screen name='Meals' component={MealsNavigator} options={{
                tabBarIcon: ({color}) => (
                    <Ionicons name={'ios-restaurant'} size={25} color={color}/>
                )
            }}/>
            <TabNavigator.Screen name='Favorites!' component={FavoritesNavigator} options={{
                tabBarIcon: ({color}) => (
                    <Ionicons name={'ios-star'} size={25} color={color}/>
                )
            }}/>
        </TabNavigator.Navigator>
    )
};

export default MealsFavTabNavigator