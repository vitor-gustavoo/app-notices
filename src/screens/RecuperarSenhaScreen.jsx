import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useState } from "react";
import styles from "../config/styles";
import { Image } from "expo-image";

export default function RecuperarSenhaScreen() {
  const [email, setEmail] = useState("");

  // Criar a função de recuperar senha
  // fonte: https://firebase.google.com/docs/auth/web/email-link-auth?hl=pt-br

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../assets/icon.png")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
        <Text variant="headlineLarge" style={styles.selfCenter}>
          Recupere sua senha
        </Text>
        <Text variant="bodySmall" style={styles.selfCenter}>
          Entre com seus dados
        </Text>

        <TextInput
          label="Email"
          mode="outlined"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Button
          mode="outlined"
          // style="margin-top: 10px;" html
          style={{
            // em react-native
            marginTop: 10,
            maxWidth: 260,
            alignSelf: "flex-end",
          }}
        >
          Recuperar
        </Button>
      </View>
    </View>
  );
}
