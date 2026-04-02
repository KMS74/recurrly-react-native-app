import { Link } from "expo-router";
import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignUp = () => {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text>sign-up</Text>
      <Link href="/(auth)/sign-in">Sign In</Link>
      <Link href="/settings">Settings</Link>
    </SafeAreaView>
  );
};

export default SignUp;
