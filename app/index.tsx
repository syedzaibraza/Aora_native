import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import { Link, router } from "expo-router";
import Button from "@/components/Button";
import { Image } from "expo-image";

const Home = () => {
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full px-4 items-center justify-center h-full">
          <Image
            alt="logoSmall"
            source={images.logoSmall}
            className="w-full h-20"
            contentFit="contain"
          />
          <Image
            alt="logoSmall"
            source={images.Onboarding}
            className="w-full h-72"
            contentFit="contain"
          />
          <Text className="text-white text-3xl text-center font-bold mt-4">
            Discover Endless Possibilities with{" "}
            <Text className="text-secondary-100">Aora</Text>
          </Text>
          <Text className="text-sm text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <Button
            title="Continue with email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
