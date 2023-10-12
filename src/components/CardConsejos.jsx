import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CardConsejos = (props) => (
  <View key={props.id} style={styles.card}>
    <Text style={styles.title}>{props.titulo}</Text>
    <Text style={styles.content}>{props.descripcion}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
  },
});

export default CardConsejos;
