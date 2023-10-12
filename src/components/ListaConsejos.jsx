import react from "react";
import { View, Text, FlatList } from "react-native";
import consejos from "../data/consejos";
import CardConsejos from "./CardConsejos";

const ListaConsejos = () => {
  return (
    <FlatList
      data={consejos}
      renderItem={({ item: conse }) => <CardConsejos {...conse}></CardConsejos>}
    ></FlatList>
  );
};

export default ListaConsejos;
