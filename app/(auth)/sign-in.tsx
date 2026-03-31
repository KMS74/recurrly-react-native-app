import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>sign-in</Text>
      <Link href="/">Home</Link>
    </SafeAreaView>
  );
};

export default SignIn;
