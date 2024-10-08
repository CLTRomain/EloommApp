import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";



import {saveToken } from '../logic/ManageToken'; 









function LoginScreen({ navigation }) {
  const [emailText, setEmailText] = useState("");
  const [motDePasseText, setMotDePasseText] = useState("");

  const isFormValid = () => {
    return (
      emailText.length > 0 &&
      motDePasseText.length > 0 

    );
  };

  function trytolog() {
    if (emailText.includes("@") && emailText.includes(".")) {
      tryToLogin();



     
    } else {
      Alert.alert("", "l'email n'est pas correct");
    }

    return;
  }

 
    //Login with credential
    const tryToLogin = async () => {
      try {

        //const JWTtoken = getValueToken('JWTtokenStore');

      // console.log('Token:', JWTtoken);

        const response = await fetch('http://localhost:8888/v1/login',{
          method: 'POST',
          headers: {         
            'Content-Type': 'application/json',
            //'Authorization': {JWTtoken},
          },
          
          body: JSON.stringify({
             email: emailText,
             password: motDePasseText,
          }),
         
        })
        const data = await response.json();

        if (response.ok) {
          console.log('Response Data:', data); 
          //deleteToken("JWTtokenStore")
          console.log('Token:', JWTtoken);
          const JWTtoken = data.TokenJWT;
          await saveToken(JWTtoken);
          navigation.navigate("Home");

       

          
          //getValueToken('JWTtokenStore')

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
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmailText}
        placeholder="Email"
        value={emailText}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={setMotDePasseText}
        value={motDePasseText}
        placeholder="Mot De Passe"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={trytolog}
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
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  apiMessage: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
