import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import { NavigationContainer } from '@react-navigation/native';

import MealsFavTabNavigator from "./navigation/MealsFavTabNavigator";
/*
* expo install react-native-screens
* import { enableScreens } from 'react-native-screens';
* enableScreens();
* */

//adding custome fonts
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    //display splash screen until the fonts are loaded
    return(
        <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
        />
    )
  }

  return (
      <NavigationContainer>
        <MealsFavTabNavigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
