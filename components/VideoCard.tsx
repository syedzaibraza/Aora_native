import { useState } from "react";
// import { ResizeMode, Video } from "expo-av";
import { View, Text, TouchableOpacity } from "react-native";

import { icons } from "../constants";
import { Image } from "expo-image";

const VideoCard = ({ title, creator, avatar, thumbnail, video }: any) => {
  const [play, setPlay] = useState(false);

  return (
    <View className="flex flex-col items-center px-4 mb-14">
      <View className="flex flex-row gap-3 items-start">
        <View className="flex justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border border-secondary flex justify-center items-center p-0.5">
            <Image
              source={avatar}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="flex justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="font-semibold text-sm text-white"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-regular"
              numberOfLines={1}
            >
              {creator}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image source={icons.dots} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => setPlay(true)}
        className="w-full h-60 rounded-xl mt-3 relative flex justify-center items-center"
      >
        <Image
          source={{ uri: thumbnail }}
          className="w-full h-full rounded-xl mt-3"
          contentFit="cover"
        />
        <Image
          source={icons.play}
          className="w-20 h-20 absolute"
          contentFit="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default VideoCard;
