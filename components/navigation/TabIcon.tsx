import { Image } from "expo-image";
import { Text, View } from "react-native";

const TabIcon = ({ icon, color, name, focused }: any) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        contentFit="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
