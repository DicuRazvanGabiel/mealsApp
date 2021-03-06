import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from 'expo-font';
import { AppLoading } from "expo";
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import MainNavigator from "./navigation/MainNavigator";

//adding custome fonts
const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  enableScreens();
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
        <MainNavigator />
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
