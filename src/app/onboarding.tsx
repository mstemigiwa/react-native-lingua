import { Image, Pressable, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants/images";
import { colors } from "@/theme";

// The illustration is laid out on a 375×340 stage (the design's iPhone width),
// then scaled to fit smaller or larger screens.
const STAGE_WIDTH = 375;
const STAGE_HEIGHT = 340;
const DESIGN_HEIGHT = 812;

const bubbles = [
  {
    text: "Hello!",
    bubbleClass: "left-[37px] top-[36px] -rotate-6 bg-[#EEF3FF]",
    textClass: "text-text-primary",
    tailClass: "right-5 bg-[#EEF3FF]",
  },
  {
    text: "¡Hola!",
    bubbleClass: "left-[233px] top-[17px] rotate-6 bg-[#F1EEFF]",
    textClass: "text-lingua-deep-purple",
    tailClass: "left-5 bg-[#F1EEFF]",
  },
  {
    text: "你好!",
    bubbleClass: "left-[267px] top-[96px] rotate-6 bg-[#FFF1EC]",
    textClass: "text-[#E5484D]",
    tailClass: "left-5 bg-[#FFF1EC]",
  },
];

export default function Onboarding() {
  const { width, height } = useWindowDimensions();
  const stageScale = Math.min(width / STAGE_WIDTH, height / DESIGN_HEIGHT, 1.15);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      {/* Logo */}
      <View className="mt-3 flex-row items-center justify-center gap-2">
        <Image source={images.mascotLogo} className="size-11" />
        <Text className="font-poppins-semibold text-[28px] leading-9 text-text-primary">
          muolingo
        </Text>
      </View>

      {/* Headline */}
      <View className="mt-10 px-8">
        <Text className="heading-1 leading-10 text-text-primary">
          Your AI language <Text className="text-lingua-deep-purple">teacher</Text>.
        </Text>
        <Text className="mt-2 font-poppins text-[15px] leading-6 text-text-secondary">
          Real conversations, personalized lessons, anytime, anywhere.
        </Text>
      </View>

      {/* Illustration */}
      <View className="flex-1 items-center">
        <View style={{ height: STAGE_HEIGHT * stageScale }}>
          <View
            className="h-[340px] w-[375px]"
            style={{ transform: [{ scale: stageScale }], transformOrigin: "top" }}
          >
            {/* Ground shadow */}
            <View className="absolute left-[85px] top-[312px] h-4 w-[190px] rounded-full bg-black/5" />

            <Image
              source={images.mascotWelcome}
              className="absolute -left-[31px] top-[13px] size-[414px]"
            />

            {bubbles.map((bubble) => (
              <View
                key={bubble.text}
                className={`absolute rounded-2xl px-5 py-2.5 ${bubble.bubbleClass}`}
              >
                <View
                  className={`absolute -bottom-1.5 size-4 rotate-45 rounded-sm ${bubble.tailClass}`}
                />
                <Text className={`font-poppins-medium text-lg ${bubble.textClass}`}>
                  {bubble.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* CTA */}
      <View className="px-6 pb-2.5">
        <Pressable className="h-[62px] flex-row items-center justify-center rounded-[18px] bg-lingua-deep-purple active:opacity-90">
          <Text className="font-poppins-semibold text-[17px] text-white">
            Get Started
          </Text>
          <View className="absolute right-7 size-2.5 rotate-45 border-r-2 border-t-2 border-white" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
