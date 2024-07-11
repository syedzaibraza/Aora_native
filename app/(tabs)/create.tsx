import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { icons } from "@/constants";
import { Button, FormField } from "@/components";

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="px-4 my-6">
          <Text className="text-white text-2xl font-semibold">
            Upload Video
          </Text>

          <FormField
            title="Video Title"
            value={form.title}
            placeholder="Give your video a catchy title..."
            handleChangeText={(e: any) => setForm({ ...form, title: e })}
            otherStyles="mt-7"
          />
          <View className="mt-7 space-y-2">
            <Text className="text-base text-gray-100 font-medium">
              Upload Video
            </Text>

            <TouchableOpacity>
              <View className="w-full h-40 px-4 bg-black-100 rounded-2xl border border-black-200 flex justify-center items-center">
                <View className="w-14 h-14 border border-dashed rounded-xl border-secondary flex justify-center items-center">
                  <Image
                    source={icons.upload}
                    contentFit="contain"
                    alt="upload"
                    className="w-1/2 h-1/2"
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View className="mt-7 space-y-2">
            <Text className="text-base text-gray-100 font-medium">
              Thumbnail Image
            </Text>

            <TouchableOpacity>
              <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 flex justify-center items-center flex-row space-x-2">
                <Image
                  source={icons.upload}
                  contentFit="contain"
                  alt="upload"
                  className="w-5 h-5"
                />
                <Text className="text-sm text-gray-100 font-medium">
                  Choose a file
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <FormField
            title="AI Prompt"
            value={form.prompt}
            placeholder="The AI prompt of your video...."
            handleChangeText={(e: any) => setForm({ ...form, prompt: e })}
            otherStyles="mt-7"
          />
          <Button
            title="Submit & Publish"
            onPress={() => setUploading(true)}
            loading={uploading}
            containerStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
