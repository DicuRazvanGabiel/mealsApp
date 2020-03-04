import React from "react"
import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealDetailsScreen = ({navigation, route}) => {
    const { mealId } = route.params;
    const selectedMeal =   MEALS.filter( meal => { meal.id === mealId});

    return(
        <View style={styles.screen}>
            <Text>The MealDetailsScreen  Screen</Text>
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

export default MealDetailsScreen