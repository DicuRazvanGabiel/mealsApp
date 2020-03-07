import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Platform} from "react-native";

import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavoritesNavigator = () => {
    const Stack = createStackNavigator();

    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
            },
            headerTitleStyle: {
                fontFamily: 'open-sans-bold'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
            mode: 'modal'
        }}>
            <Stack.Screen name='Your Favorites' component={FavoritesScreen} 
                options={({navigation}) => ({
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={HeaderButton}>
                            <Item title={"Menu"} iconName={'ios-menu'} onPress={() => { navigation.openDrawer() }}/>
                        </HeaderButtons>
                    )
                })}
            />
            <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} options={({route}) => {
                return ({
                    headerTitle: route.params.mealTitle,
                })
            }
            }/>
        </Stack.Navigator>
    )
}

export default FavoritesNavigator