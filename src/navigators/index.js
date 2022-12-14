import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import { MainScreen } from "screens";

import { MAIN } from "constants/route";

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MAIN} component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
