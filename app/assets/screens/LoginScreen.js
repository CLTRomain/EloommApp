import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

function LoginScreen() {
  const [EmailText, onChangeEmail] = React.useState("");
  const [MotDePasseText, onChangeMDP] = React.useState("");

  const trytolog = () => {
    // Ici, vous pouvez ajouter votre logique pour traiter les valeurs
    // Par exemple, vous pouvez afficher une alerte avec les valeurs pour tester
    Alert.alert(
      "Login Attempt",
      `Email: ${EmailText}\nMot de Passe: ${MotDePasseText}`
    );
    // Vous pouvez aussi envoyer ces données à votre serveur ou les traiter autrement
  };

  return (
    <SafeAreaView style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none" // Empêche la majuscule automatique
        autoCorrect={false} // Désactive la correction automatique
        onChangeText={onChangeEmail}
        placeholder="Email"
        value={EmailText}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={onChangeMDP}
        value={MotDePasseText}
        placeholder="Mot De Passe"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={trytolog} // renvoie vers fonction try to log avec mdp et email
      >
        <Text>Se connecter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "60%",
    borderRadius: "40%",
    alignItems: "center",
    left: "17%",
    justifyContent: "center",
  },
  form: {
    top: "40%",
  },
});

export default LoginScreen;
