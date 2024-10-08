import * as SecureStore from 'expo-secure-store'; // Secure store pour stocker le token

export async function getValueToken(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return result;
    } else {
        console.log('No values stored under that key.');
        return null;
    }
}

export const saveToken = async (JWTtoken) => {
  if (JWTtoken) {
      // Convertir le token en chaîne si ce n'est pas déjà fait
      const tokenString = typeof JWTtoken === 'string' ? JWTtoken : JSON.stringify(JWTtoken);
      
      await SecureStore.setItemAsync('JWTtokenStore', tokenString);
 
  } else {
      console.log('Le token ne peut pas être vide');
  }
};

export const deleteToken = async () => {
    await SecureStore.deleteItemAsync('JWTtokenStore');
    alert('Token deleted!');
};
