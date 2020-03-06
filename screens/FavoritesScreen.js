import React from "react"
import { View, Text, StyleSheet, Button } from "react-native";

const FavoritesScreen = ({navigation}) => {

    return(
        <View style={styles.screen}>
            <Text>The FavoritesScreen Screen</Text>
            <Button title={'go to meal details'} onPress={() => {navigation.navigate('MealDetailsScreen', {
                mealId: 'c1'
            })}} />
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

export default FavoritesScreen