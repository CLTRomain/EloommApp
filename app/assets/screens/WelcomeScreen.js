import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  TouchableOpacity,
  Button,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      resizeMode="stretch"
      source={require("../WelcomeImage/test.png")}
    >
      <TouchableOpacity
        style={styles.return}
        onPress={() => console.log("Icon clicked!")}
      >
        <Icon
          name="close"
          style={styles.icon}
          onPress={() => navigation.navigate("Home")}
        />
      </TouchableOpacity>

      <SafeAreaView style={styles.LoginRegisterButton}>
        <View style={styles.loginButton}>
          <Button
            onPress={() => navigation.navigate("Login")}
            title="Se connecter"
            color="black"
          />
        </View>

        <View style={styles.registerButton}>
          <Button
            onPress={() => navigation.navigate("Register")}
            title="Créer un compte"
            color="black"
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  LoginRegisterButton: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 50,
    left: "10%",
  },

  loginButton: {
    backgroundColor: "#588B8B",
    borderRadius: 20,
    margin: 12,
    width: "100%",
  },

  registerButton: {
    borderRadius: 20,
    width: "100%",
    backgroundColor: "#D7F9F1",
  },

  return: {
    position: "absolute",
    top: height * 0.07,
    right: width * 0.09,
  },

  icon: {
    fontSize: 25,
    color: "white",
  },
});

export default WelcomeScreen;
