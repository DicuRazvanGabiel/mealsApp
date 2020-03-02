import React from "react"
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';

import Colors from '../constants/Colors'

const MealsNavigator = () => {
    const StackNavigator = createStackNavigator();

    return(
        <NavigationContainer>
            <StackNavigator.Navigator screenOptions={{
                title: 'Meals Categories',
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
            }}>
                <StackNavigator.Screen 
                    name="Categories" 
                    component={CategoriesScreen} 
                />
                <StackNavigator.Screen 
                    name="CategoryMeals" 
                    component={CategoryMealsScreen}
                    options={({ route }) => ({ title: route.params.categoryName })}
                />
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default MealsNavigator