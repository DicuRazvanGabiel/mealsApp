import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import {Platform} from "react-native";
import Colors from "../constants/Colors";

import MealsFavTabNavigator from "./MealsFavTabNavigator";
import FiltersScreen from "../screens/FiltersScreen";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MainNavigator = () => {
    const Drawer = createDrawerNavigator();
    const Stack = createStackNavigator();

    const StackNavigator = () => {
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
                <Stack.Screen
                    name="Filter Meals"
                    component={FiltersScreen}
                    options={({navigation, route}) => ({
                      headerLeft: () => (
                          <HeaderButtons HeaderButtonComponent={HeaderButton}>
                              <Item title={"Menu"} iconName={'ios-menu'} onPress={() => { navigation.openDrawer() }}/>
                          </HeaderButtons>
                      ),
                      headerRight: () => (
                          <HeaderButtons HeaderButtonComponent={HeaderButton}>
                              <Item title={"Save"} iconName={'ios-save'} onPress={() =>  { console.log('da') }}/>
                          </HeaderButtons>
                      )
                  })}
                />
            </Stack.Navigator>
        )
    };

    return(
        <Drawer.Navigator drawerContentOptions={{
            activeTintColor: Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }}>
            <Drawer.Screen name="Meals" component={MealsFavTabNavigator} />
            <Drawer.Screen name="Filters" component={StackNavigator} />
        </Drawer.Navigator>
    )
}

export default MainNavigator