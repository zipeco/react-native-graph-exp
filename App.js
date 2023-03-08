import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Line from "./src/screens/Line";
import Circle from "./src/screens/Circle";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TabLine" component={StackLine} />
        <Tab.Screen name="TabCircle" component={Circle} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TabLine" component={StackLine} />
      <Tab.Screen name="TabCircle" component={Circle} />
    </Tab.Navigator>
  );
};

const StackLine = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Line" component={Line} />
    </Stack.Navigator>
  );
};

const StackCircle = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Circle" component={Circle} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
