import React from "react"
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import DefaultText from '../components/DefaultText'
const MealDetailsScreen = ({navigation, route}) => {
    const { mealId } = route.params;
    const selectedMeal =   MEALS.filter( meal => { meal.id === mealId});

    return(
        <ScrollView>
            <Image />
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <DefaultText>
                    {itemData.item.duration}m
                </DefaultText>
                <DefaultText>
                    {itemData.item.complexity.toUpperCase()}
                </DefaultText>
                <DefaultText>
                    {itemData.item.affordability.toUpperCase()}
                </DefaultText>
            </View>
            <View style={styles.screen}>
                <Text>The MealDetailsScreen  Screen</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 

    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },

    mealRow: {
        flexDirection: 'row'
    },
})

export default MealDetailsScreen