import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";

const Bookmarks = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="px-4 my-6">
          <Text className="text-white text-2xl font-semibold">
            Saved Videos
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmarks;
