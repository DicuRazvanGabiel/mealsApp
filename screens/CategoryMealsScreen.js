import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native";

import MealItem from "../components/MealItem";

import { MEALS } from '../data/dummy-data'

const CategoriyMealsScreen = ({navigation, route}) => {
    const { categoryId } = route.params;
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(categoryId) >= 0 );

    const renderItem = (itemData) =>{
        return(
            <MealItem itemData={itemData} onSelect={() => {navigation.navigate('MealDetailsScreen',{
                mealTitle: itemData.item.title,
                mealId: itemData.item.id
            })}}/>
        )
    }

    return(
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                renderItem={renderItem}
                style={{width: '90%', margin: 5}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriyMealsScreen