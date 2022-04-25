import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,KeyboardAvoidingView} from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import { store } from "./store";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "./screens/MapScreen";

const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
         <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS==="ios"?-64:0}>
         <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={
            {  
              headerShown:false
            }
          } />
          <Stack.Screen name="MapScreen" component={MapScreen}  options={
            {  
              headerShown:false
            }
          }/>
          {/* <Stack.Screen name="MapScreen" component={EatSc}/> */}
          </Stack.Navigator>
         </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
