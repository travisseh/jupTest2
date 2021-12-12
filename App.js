import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Jupiter, TOKEN_LIST_URL } from '@jup-ag/core'
console.log('Jupiter: ', Jupiter);

// async function testJup() {
//   const url =
// 			'https://solana--mainnet.datahub.figment.io/apikey/5d2d7ea54a347197ccc56fd24ecc2ac5';
//   const connection = new Connection(url);
//   const key = new PublicKey('GfaY1fZfTF9WRqtdXhno9FS8Wn71fbj8qZawnGak5DLs')
//   const jupiter = await Jupiter.load({
//     connection,
//     cluster: 'mainnet-beta',
//     // user: key,
//   })
//   console.log('jupiter: ', jupiter);
// }

// useEffect(() => {
//   testJup()
// },[])

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
