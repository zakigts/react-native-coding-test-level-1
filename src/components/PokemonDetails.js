import { View, Text, Image, TouchableOpacity } from "react-native";
import axios from "axios";

function PokemonDetails({ navigation }) {
  const [pokemon, setPokemon] = useState(null);
  const name = navigation.getParam("name");

  useEffect(() => {
    loadPokemon();
  }, []);

  const loadPokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    setPokemon(response.data);
  };

  if (!pokemon) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View>
      <Text>{pokemon.name}</Text>
      <Image source={{ uri: pokemon.sprites.front_default }} />
      <Text>{pokemon.weight}kg</Text>
      <Text>{pokemon.height}m</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
