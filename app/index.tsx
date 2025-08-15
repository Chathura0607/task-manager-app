import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

//rnfe
const Index = () => {
    const router = useRouter()
    
    return (
      <View className="flex-1 w-full justify-center align-items-center">
        <Pressable
          className="bg-blue-500 p-4 rounded"
          onPress={() => router.push("/login")}
        >
          <Text className="text-4xl">Press Me</Text>
        </Pressable>
      </View>
    );
}

export default Index