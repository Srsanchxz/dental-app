import react from "react";
import constants from "expo-constants";
import { Text, View, StyleSheet } from "react-native";
import ListaConsejos from "./ListaConsejos";
import CardConsejos from "./CardConsejos";

const Main = () => {
  return (
    <View style={{ marginTop: constants.statusBarHeight, flexGrow: 1 }}>
      <Text style={styles.textoCentrado}>Consejos</Text>
      <ListaConsejos></ListaConsejos>
    </View>
  );
};

const styles = StyleSheet.create({
  textoCentrado: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Main;
