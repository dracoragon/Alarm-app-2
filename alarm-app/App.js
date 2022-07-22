import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Navigation/TabNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}