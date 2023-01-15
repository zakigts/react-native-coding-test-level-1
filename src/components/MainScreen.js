import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MainScreen() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("PokemonList")}>
      <Text>View Catalog</Text>
    </TouchableOpacity>
  );
}
