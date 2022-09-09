import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_400Regular_Italic
} from "@expo-google-fonts/roboto";
import AppLoading from 'expo-app-loading';
export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_400Regular_Italic
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }else {
    return (
      <View style={styles.container}>
        <Text style={{ fontFamily: "Roboto_400Regular_Italic"}}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
