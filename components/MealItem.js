import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from "react-native";

import DefaultText from '../components/DefaultText'
import TouchableCmp from "./TouchableCmp";

const MealItem = ({itemData, onSelect}) => {

    return (
        <View style={styles.mealItem}>
            <TouchableCmp onPress={onSelect}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: itemData.item.imageUrl}} style={styles.bgImage}>
                            <View style={styles.titleConmtainer}>
                                <Text style={styles.title} numberOfLines={1}>
                                    {itemData.item.title}
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
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
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#e9e9e9',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 15,
    },

    mealHeader: {
        height: '85%'
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

    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },

    titleConmtainer:{
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },

    title: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'open-sans-bold'
    }

})

export default MealItem