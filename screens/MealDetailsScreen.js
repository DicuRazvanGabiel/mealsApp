import React from "react"
import { View, Text, StyleSheet } from "react-native";

const MealDetailsScreen = () => {

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