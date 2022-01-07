import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  Alert,
  Button,
} from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.SafeLayout}>
      <View>
        <Text>This is the text</Text>

        <TouchableNativeFeedback>
          <View style={{ width: 200, height: 200, backgroundColor: "green" }}>
            <Text>jasdkfjkdsjfkd fj</Text>
          </View>
        </TouchableNativeFeedback>
        <Button
          title="Click me"
          onPress={Alert.prompt("Title", "Please inter some", (text) =>
            console.log(text)
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SafeLayout: {
    backgroundColor: "red",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  img: {
    width: "100%",
    height: "90%",
  },
});

export default App;
