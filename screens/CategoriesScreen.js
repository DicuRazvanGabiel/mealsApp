import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, FlatList} from "react-native";

import CategoryGridTile from "../components/CategoryGrid.Tilejs";

import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = ({ navigation }) => {

    const renderGridItem = (itemData) => {

        return(
            <CategoryGridTile itemData={itemData} navigation={navigation}/>
        )
    }

    return(
            <FlatList 
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}                
            />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },


})

export default CategoriesScreen