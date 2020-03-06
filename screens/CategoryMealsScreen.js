import React from "react"

import MealList from "../components/MealList";
import { MEALS } from '../data/dummy-data'

const CategoriyMealsScreen = ({navigation, route}) => {
    const { categoryId } = route.params;
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(categoryId) >= 0 );

    return(
        <MealList listData={displayedMeals} navigation={navigation}/>
    )
}


export default CategoriyMealsScreen