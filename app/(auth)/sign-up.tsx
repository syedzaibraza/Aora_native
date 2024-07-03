import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import { images } from "@/constants";
import Button from "@/components/Button";
import { Link, router } from "expo-router";
import FormField from "@/components/FormField";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-black h-full">
      <ScrollView>
        <View className="justify-center w-full min-h-[85vh] px-4 my-6">
          <Image
            className="w-full h-20 "
            contentFit="contain"
            source={images.logoSmall}
          />
          <Text className="text-2xl font-semibold text-white mt-10 ">
            Sign Up
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e: any) => setForm({ ...form, username: e })}
            otherStyles="mt-7"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <View className=" pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-regular">
              Already have an account?{" "}
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-semibold text-secondary"
            >
              Login
            </Link>
          </View>
          <Button
            title="Sign Up"
            handlePress={() => router.push("/home")}
            containerStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
