import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../components/MainScreen";
import PokemonList from "../components/PokemonList";
import PokemonDetails from "../components/PokemonDetails";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{ title: "Main" }}
      />
      <Stack.Screen
        name="PokemonList"
        component={PokemonList}
        options={{ title: "Pokemon List" }}
      />
      <Stack.Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={{ title: "Pokemon Details" }}
      />
    </Stack.Navigator>
  );
}
