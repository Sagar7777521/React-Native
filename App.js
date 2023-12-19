import { View, Text, Image } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function app() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum" }}>
      <View
        style={{ width: 200, height: 200, backgroundColor: "lightblue" }}
      ></View>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "lightgreen",
          padding: 60,
        }}
      ></View>
      <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300, padding: 60 }}
      ></Image>
    </View>
  );
}
