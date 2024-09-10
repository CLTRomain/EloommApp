import React from "react";
import { getAllDatesInRange } from "react-multi-date-picker";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from "react-native";

function RegisterScreen() {
  const [EmailTexts, onChangeEmail] = React.useState("");
  const [MotDePasseTexts, onChangeMDP] = React.useState("");
  const [SecondMotDePasseTexts, onChangeSecondMDP] = React.useState("");

  const isFormValid = () => {
    return (
      EmailTexts.length > 0 &&
      MotDePasseTexts.length > 0 &&
      SecondMotDePasseTexts.length > 0
    );
  };

  function trytolog() {
    if (EmailTexts.includes("@") && EmailTexts.includes(".")) {
      if (MotDePasseTexts == SecondMotDePasseTexts) {
        //http express.js pour resultat db
      } else {
        Alert.alert("", "Les Deux Mots De Passe Sont Différent !");
      }
    } else {
      Alert.alert("", "l'email n'est pas correct");
    }

    return;
  }

  return (
    <SafeAreaView style={styles.form}>
      <Text style={styles.type}>Email</Text>
      <TextInput
        style={styles.inputText}
        autoCapitalize="none" // Empêche la majuscule automatique
        autoCorrect={false} // Désactive la correction automatique
        onChangeText={onChangeEmail}
        placeholder="Email"
        value={EmailTexts}
      />
      {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
      <Text style={styles.type}>Mot de Passe</Text>

      <TextInput
        style={styles.inputText}
        autoCapitalize="none" // Empêche la majuscule automatique
        autoCorrect={false} // Désactive la correction automatique
        secureTextEntry={true}
        onChangeText={onChangeMDP}
        value={MotDePasseTexts}
        placeholder="Mot De Passe"
      />
      <Text style={styles.type}>Confirmer Mot De Passe</Text>

      <TextInput
        style={styles.inputText}
        autoCapitalize="none" // Empêche la majuscule automatique
        autoCorrect={false} // Désactive la correction automatique
        secureTextEntry={true}
        onChangeText={onChangeSecondMDP}
        placeholder="Mot De Passe"
        value={SecondMotDePasseTexts}
      />

      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: isFormValid() ? "#588B8B" : "#A2AEBB" },
        ]}
        onPress={trytolog}
        disabled={!isFormValid()} // Désactiver le bouton si le formulaire n'est pas valide
      >
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputText: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: "15%",
  },
  type: {
    marginLeft: 18,
    marginBottom: 1,
    fontSize: 16,
  },

  button: {
    backgroundColor: "red",
    padding: 10,
    width: "60%",
    borderRadius: "40%",
    alignItems: "center",
    left: "17%",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
  },
  form: {
    top: "40%",
  },
});

export default RegisterScreen;
