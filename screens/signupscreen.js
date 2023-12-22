import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

export default function Signupscreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <View className="flex-row justify-center my-4">
        <Text
          style={{
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 40,
          }}
        ></Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require("../assets/images/signup.png")}
          style={{ width: 300, height: 200, marginBottom: 50, marginLeft: 50 }}
        />
      </View>


    </SafeAreaView>
  );
}
