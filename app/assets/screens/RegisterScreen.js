import React ,{useState} from "react";


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
import {saveToken } from '../logic/ManageToken'; 


function RegisterScreen({ navigation }) {

  const [EmailTexts, onChangeEmail] = useState("");
  const [MotDePasseTexts, onChangeMDP] = useState("");
  const [SecondMotDePasseTexts, onChangeSecondMDP] = useState("");


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
        tryToRegister();

      } else {
        Alert.alert("", "Les Deux Mots De Passe Sont Différent !");
      }
    } else {
      Alert.alert("", "l'email n'est pas correct");
    }

    return;
  }

  //Login with credential
  const tryToRegister = async () => {
    try {
      const response = await fetch('http://localhost:8888/v1/register',{
        method: 'POST',
        headers: {         
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify({
           email: EmailTexts,
           password: MotDePasseTexts,
        }),
       
      })
      const data = await response.json();

      if (response.ok) {

        console.log('Response Data:', data); 

        const JWTtoken = data.TokenJWT;
        console.log('Token:', JWTtoken);
          await saveToken(JWTtoken);
          navigation.navigate("Home");


      } else {
        Alert.alert('Error', `Error  ${data.message}`);
        console.log('Response Data:', data); 

      }
    } catch (error) {
      console.log(error.message);
      Alert.alert('Erreur', `Erreur de connexion: ${error.message}`);
    }


};

  return (
    <SafeAreaView style={styles.form}>
         <Text style={styles.type}>FirstName</Text>
      {/* <TextInput
        style={styles.inputText}
        autoCapitalize="none" // Empêche la majuscule automatique
        autoCorrect={false} // Désactive la correction automatique
        onChangeText={onChangeEmail}
        placeholder="Email"
        value={EmailTexts}
      />
         <Text style={styles.type}>LastName</Text>
      <TextInput
        style={styles.inputText}
        autoCapitalize="none" // Empêche la majuscule automatique
        autoCorrect={false} // Désactive la correction automatique
        onChangeText={onChangeEmail}
        placeholder="Email"
        value={EmailTexts}
      /> */}
         {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
      {/* <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      /> */}

         {/* <Text style={styles.type}>Civility</Text>
      <TextInput
        style={styles.inputText}
        onChangeText={onChangeEmail}            // need a change 
        placeholder="Email"
        value={EmailTexts}
      />

<Text style={styles.type}>Phone</Text>
      <TextInput
        style={styles.inputText}
        autoCapitalize="none" // Empêche la majuscule automatique
        autoCorrect={false} // Désactive la correction automatique
        onChangeText={onChangeEmail}
        placeholder="Email"
        value={EmailTexts}
      /> */}

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
