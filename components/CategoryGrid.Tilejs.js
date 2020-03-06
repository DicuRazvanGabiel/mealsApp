import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback} from 'react-native'

import TouchableCmp from "./TouchableCmp";

const CategoryGridTile = ({ navigation, itemData}) => {

    return(
        <View style={styles.gridItem}>
            <TouchableCmp
                style={{flex: 1}}
                onPress={() => navigation.navigate('CategoryMeals', {
                    categoryId: itemData.item.id,
                    categoryName: itemData.item.title
                })}
            >
                <View style={{...styles.container, ...{backgroundColor: itemData.item.color}}}>
                    <Text style={styles.title} numberOflines={2}>{itemData.item.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 5,
    },

    title: {
        fontSize: 20,
        textAlign: 'right',
        fontFamily: 'open-sans'
    }
})

export default CategoryGridTile