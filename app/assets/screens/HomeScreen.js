import React from "react";
import Icon from 'react-native-vector-icons/Ionicons'; // Use your preferred icon set

import { View, SafeAreaView,Text, StyleSheet,TouchableOpacity } from "react-native";
import { getValueToken,saveToken,deleteToken } from '../logic/ManageToken'; 




function HomeScreen() {

  const JWTtoken = getValueToken('JWTtokenStore'); 

// fetch('http://localhost:8888/v1/articles/getallproducts', {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application',
//     'Authorization': `Bearer ${JWTtoken}`,
//   }
// })
// .then(response => {
//   if (!response.ok) {
//     throw new Error('Network response was not ok ' + response.statusText);
//   }
//   return response.json(); // Traitez la réponse JSON
// })
// .then(data => {
//   console.log(data); // Faites quelque chose avec les données récupérées
// })
// .catch(error => {
//   console.error('There has been a problem with your fetch operation:', error);
// });




  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.location}>
        <Text>Location</Text>

      </View>
        
      <View style={styles.content}>
        <Text>Home</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="search" size={24} color="#fff" />
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Icon name="person" size={24} color="#fff" />
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'aliceblue',
  },

  location: {
      left: 10,
      position: 'absolute',
      top: 70,
      backgroundColor : 'red',
      padding: 20,
  },

  
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    height: 85,
    backgroundColor: '#bbc8f0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
  },
});



export default HomeScreen;
