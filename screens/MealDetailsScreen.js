import React from "react"
import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import DefaultText from '../components/DefaultText'

const ListItem = props => {
    return(
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    )
}

const MealDetailsScreen = ({navigation, route}) => {
    const { mealId } = route.params;
    const selectedMeal =  MEALS.filter( meal => meal.id === mealId)[0];

    return(
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        
            <View style={styles.detail}>
                <DefaultText>
                    {selectedMeal.duration}m
                </DefaultText>
                <DefaultText>
                    {selectedMeal.complexity.toUpperCase()}
                </DefaultText>
                <DefaultText>
                    {selectedMeal.affordability.toUpperCase()}
                </DefaultText>
            </View>

            <Text style={styles.title}>Incredients</Text>
            {selectedMeal.ingredients.map(ingredient => {
                return(
                    <ListItem key={ingredient}>
                        {ingredient}
                    </ListItem>
                )
            })}

            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step => {
                return(
                    <ListItem key={step}>
                        {step}
                    </ListItem>
                )
            })}

            <View style={{height: 100}}>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },

    image: {
        height: 200,
        width: '100%'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },

    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    },
})

export default MealDetailsScreen