import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
  Show,
} from "react-native";
import DatePicker from "react-native-date-picker";

function RegisterScreen() {
  const [EmailTexts, onChangeEmail] = React.useState("");
  const [MotDePasseTexts, onChangeMDP] = React.useState("");
  const [SecondMotDePasseTexts, onChangeSecondMDP] = React.useState("");
  const [Date, setDate] = React.useState(new Date());

  return (
    <SafeAreaView style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none" // Empêche la majuscule automatique
        autoCorrect={false} // Désactive la correction automatique
        onChangeText={onChangeEmail}
        placeholder="Email"
        value={EmailTexts}
      />
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />

      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={onChangeMDP}
        value={MotDePasseTexts}
        placeholder="Mot De Passe"
      />
      <TouchableOpacity
        style={styles.button}
        //onPress={trytolog} // renvoie vers fonction try to log avec mdp et email
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

export default RegisterScreen;
