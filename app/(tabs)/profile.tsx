import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import { Image } from "expo-image";
// @ts-ignore:next-line
import avatarImage from "../../assets/images/JSM.png";
import { EmptyState, InfoBox, VideoCard } from "@/components";

const Profile = () => {
  const posts: any[] = [
    {
      $id: "1",
      title:
        "Businessman Work with Laptop Computer in Office Manager Solving Problem",
      thumbnail:
        "https://static-cse.canva.com/blob/1598134/1600w-wK95f3XNRaM.jpg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      creator: {
        username: "jsmastery",
        avatar: avatarImage,
      },
    },
    {
      $id: "2",
      title:
        "Businessman Work with Laptop Computer in Office Manager Solving Problem",
      thumbnail:
        "https://static-cse.canva.com/blob/1598130/1600w-K9NTgBT1uG8.jpg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      creator: {
        username: "jsmastery",
        avatar: avatarImage,
      },
    },
  ];
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this profile"
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full flex justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity className="flex w-full items-end mb-10">
              <Image
                source={icons.logout}
                contentFit="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-xl flex justify-center items-center">
              <Image
                source={images.JSM}
                className="w-[90%] h-[90%] rounded-lg"
                contentFit="cover"
              />
            </View>

            <InfoBox
              title="John Smith"
              containerStyles="mt-5"
              titleStyles="text-lg"
            />

            <View className="mt-2 flex flex-row">
              <InfoBox
                title="10"
                subtitle="Posts"
                titleStyles="text-xl"
                containerStyles="mr-10"
              />
              <InfoBox
                title="1.2k"
                subtitle="Followers"
                titleStyles="text-xl"
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
