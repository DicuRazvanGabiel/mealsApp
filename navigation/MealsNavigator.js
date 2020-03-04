import React from "react"
import { Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from "../screens/MealDetailsScreen";
import HeaderButton from '../components/HeaderButton';

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
                headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
                mode: 'modal'
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

                <StackNavigator.Screen
                    name="MealDetailsScreen"
                    component={MealDetailsScreen}
                    options={({ route }) => {
                        headerTitle: route.params.mealTitle,
                        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title={"Favorite"} iconName={'ios-star'} onPress={() => {console.log('favorite')}}/>
                        </HeaderButtons>
                    }}
                />
            </StackNavigator.Navigator>
        </NavigationContainer>
    )
}

export default MealsNavigator