import { Text, View } from "react-native";
import styles from "../config/styles";
import NoticiasScreen from "./NoticiasScreen";

export default function HomeScreen() {
  return (
    <View styles={styles.container}>
      <NoticiasScreen/>
    </View>
  );
}
