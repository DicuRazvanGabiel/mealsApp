import React from "react"

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = ({navigation}) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')

    return(
        <MealList navigation={navigation} listData={favMeals}/>
    )
}

export default FavoritesScreen