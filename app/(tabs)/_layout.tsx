import { tabs } from "@/constants/data";
import { colors, components } from "@/constants/theme";
import { clsx } from "clsx";
import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabbar = components.tabBar;

export default function TabsLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabbar.horizontalInset),
          height: tabbar.height,
          marginHorizontal: tabbar.horizontalInset,
          borderRadius: tabbar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical: tabbar.height / 2 - tabbar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabbar.iconFrame,
          height: tabbar.iconFrame,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon icon={tab.icon} focused={focused} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

type TabIconProps = {
  focused: boolean;
  icon: ImageSourcePropType;
};
const TabIcon = ({ focused, icon }: TabIconProps) => {
  return (
    <View className={`tabs-icon`}>
      <View className={clsx("tabs-pill", focused && "tabs-active")}>
        <Image className="tabs-glyph" source={icon} resizeMode="contain" />
      </View>
    </View>
  );
};
