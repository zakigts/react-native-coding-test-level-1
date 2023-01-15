import { FlatList, View, Text } from "react-native";
import axios from "axios";

function PokemonList() {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPokemons();
  }, []);

  const loadPokemons = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`
    );
    setPokemons([...pokemons, ...response.data.results]);
    setLoading(false);
  };

  return (
    <FlatList
      data={pokemons}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PokemonDetails", { name: item.name })
            }
          >
            <Text>View</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.name}
      onEndReached={loadPokemons}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading && <ActivityIndicator size="large" />}
    />
  );
}
