import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Switch, Platform } from "react-native";

import Colors from "../constants/Colors";

const FilterSwitch = props => {
    return(
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{true: Colors.primaryColor}}
                thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''}
                value={props.state}
                onValueChange={(value) => props.setState(value)}
            />
        </View>
    )
}

const FiltersScreen = ({ navigation, route }) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = () =>{
        const appliedFilters = {
            isGlutenFree,
            isLactoseFree,
            isVegan,
            isVegetarian
        }

        console.log(appliedFilters);
    };

    useEffect(() =>{
        navigation.setParams({
            //este un pointer catre functie, nu este executata
            save: saveFilters
        })
    }, [saveFilters, route]);

    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch label='Gluten-Free' state={isGlutenFree} setState={setIsGlutenFree}/>
            <FilterSwitch label='Lactose-Free' state={isLactoseFree} setState={setIsLactoseFree}/>
            <FilterSwitch label='Vegan' state={isVegan} setState={setIsVegan}/>
            <FilterSwitch label='Vegetarian' state={isVegetarian} setState={setIsVegetarian}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%'
    }
})

export default FiltersScreen