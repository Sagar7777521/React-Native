import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
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
        >
          Let's Get Started
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image
          source={require("../assets/images/welcome.png")}
          style={{ width: 350, height: 350, marginBottom: 100 }}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 50,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={{
            ...tw`shadow-md rounded-xl bg-yellow-400 px-15 py-5 text-lg h-20`,
          }}
        >
          <Text
            style={{
              width: 120,
              height: 40,
              borderRadius: 55,
              background: "#F0CE24",
              color: "black",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 50,
        }}
      >
        <Text
          style={{
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              ...tw` px-15 py-5 text-lg h-20 mb-1`,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
