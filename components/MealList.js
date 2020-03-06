import React from 'react'
import {FlatList, StyleSheet, View} from "react-native";
import MealItem from "./MealItem";

const MealList = ({listData, navigation}) => {

    const renderItem = (itemData) =>{
        return(
            <MealItem itemData={itemData} onSelect={() => {navigation.navigate('MealDetailsScreen',{
                mealTitle: itemData.item.title,
                mealId: itemData.item.id
            })}}/>
        )
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={listData}
                renderItem={renderItem}
                style={{width: '90%', margin: 5}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default MealList