import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center gap-6 bg-white">
      <Text className="heading-1 text-center color-lingua-purple">
        Welcome to Nativewind!
      </Text>

      <Link href="/onboarding" asChild>
        <Pressable className="rounded-2xl bg-lingua-deep-purple px-6 py-3">
          <Text className="heading-4 text-white">Open onboarding</Text>
        </Pressable>
      </Link>
    </View>
  );
}
