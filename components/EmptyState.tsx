import { router } from "expo-router";
import { View, Text, Image } from "react-native";

import { images } from "../constants";
import Button from "./Button";

const EmptyState = ({ title, subtitle }: any) => {
  return (
    <View className="flex justify-center items-center px-4">
      <Image
        source={images.empty}
        contentFit="contain"
        className="w-[270px] h-[216px]"
      />

      <Text className="text-sm font-medium text-gray-100">{title}</Text>
      <Text className="text-xl text-center font-semibold text-white mt-2">
        {subtitle}
      </Text>

      <Button
        title="Back to Explore"
        handlePress={() => router.push("/home")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
