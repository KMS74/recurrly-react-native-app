import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-bold font-sans-extrabold">Home</Text>

      <Link
        href="/onboarding"
        className="text-xl font-bold font-sans-bold text-white mt-4 rounded-lg bg-primary px-4 py-2"
      >
        Go to Onboarding
      </Link>

      <Link
        href="/(auth)/sign-up"
        className="text-xl font-bold font-sans-bold text-white mt-4 rounded-lg bg-primary px-4 py-2"
      >
        Go to Sign Up
      </Link>

      <Link
        href="/(tabs)/subscriptions"
        className="text-xl font-bold font-sans-bold text-white mt-4 rounded-lg bg-primary px-4 py-2"
      >
        Go to Subscriptions
      </Link>
    </SafeAreaView>
  );
}
