import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import { router } from "expo-router";
import Button from "@/components/Button";

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
            source={images.logoSmall}
            className="w-32 h-20"
            resizeMode="contain"
          />
          <Text className="text-white text-3xl text-center font-bold mt-4">
            Discover Endless Possibilities with{" "}
            <Text className="text-secondary-100">Aora</Text>
          </Text>
          <Text className="text-sm text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <Button title="Continue with email" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
