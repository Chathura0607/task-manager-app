import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { login } from "@/services/authService";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async () => {
    //if(email)
    //if(password)

    if (isLoading) return;
    setIsLoading(true);
    await login(email, password)
      .then((res) => {
        // const res = await register(email, password)
        // success
        router.push("/home");
      })
      .catch((err) => {
        Alert.alert("Registration failed", "Something went wrong");
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <View className="flex-1 w-full justify-center items-center">
      <Text className="text-4xl text-center">Login</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        className="bg-surface border border-gray-300 rounded px-4 py-3 mb-4 text-gray-800"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="bg-surface border border-gray-300 rounded px-4 py-3 mb-4 text-gray-800"
      />
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-green-600 p-4 rounded mt-2"
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" size="large" />
        ) : (
          <Text className="text-center text-2xl text-white">Login</Text>
        )}
      </TouchableOpacity>

      <Pressable className="px-6 py-3" onPress={() => router.back()}>
        <Text className="text-4xl text-center">Don't have an account? Register</Text>
      </Pressable>
    </View>
  );
};

export default Login;
