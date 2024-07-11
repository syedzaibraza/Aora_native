import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Text, View } from "react-native";

import { images } from "../../constants";
import { EmptyState, SearchInput, Trending, VideoCard } from "@/components";
import { Image } from "expo-image";

const Home = () => {
  const posts: any[] = [
    {
      $id: "1",
      title:
        "Businessman Work with Laptop Computer in Office Manager Solving Problem",
      thumbnail:
        "https://i.ytimg.com/vi/Nii_fBGb0_c/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDU-hiECHiIdVG13fPWK_n01KLbSg",
      video: "https://www.w3schools.com/html/mov_bbb.mp4",
      creator: {
        username: "jsmastery",
        avatar: images.JSM,
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
        avatar: images.JSM,
      },
    },
  ];
  return (
    <SafeAreaView className="bg-primary">
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
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  JSMastery
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>

              {/* <Trending posts={latestPosts ?? []} /> */}
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos created yet"
          />
        )}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      />
    </SafeAreaView>
  );
};

export default Home;
