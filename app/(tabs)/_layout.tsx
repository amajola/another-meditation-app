import { Stack, Tabs } from "expo-router";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MusicIcon from "@/assets/images/home-icons/music";
import MeditateIcon from "@/assets/images/home-icons/meditate";
import SleepIcon from "@/assets/images/home-icons/sleep";
import ProfileIcon from "@/assets/images/home-icons/profile";
import HomeIcon from "@/assets/images/home-icons/home";
import { View } from "react-native";
import {
  TabBarActiveTintColor,
  TabLabelFontSize,
  TabPaddingSize,
  TabRadius,
} from "@/constants/styles";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarActiveTintColor: TabBarActiveTintColor,
          tabBarLabelStyle: {
            fontSize: TabLabelFontSize,
          },
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? color : "trasnperant",
                padding: TabPaddingSize,
                borderRadius: TabRadius,
              }}
            >
              <HomeIcon color={focused ? "white" : color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="sleep"
        options={{
          title: "Sleep",
          tabBarActiveTintColor: TabBarActiveTintColor,
          tabBarLabelStyle: {
            paddingTop: TabPaddingSize,
            fontSize: TabLabelFontSize,
          },
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? color : "trasnperant",
                padding: TabPaddingSize,
                borderRadius: TabRadius,
              }}
            >
              <SleepIcon color={focused ? "white" : color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="meditate"
        options={{
          title: "Meditate",
          tabBarActiveTintColor: TabBarActiveTintColor,
          tabBarLabelStyle: {
            paddingTop: TabPaddingSize,
            fontSize: TabLabelFontSize,
          },
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? color : "trasnperant",
                padding: TabPaddingSize,
                borderRadius: TabRadius,
              }}
            >
              <MeditateIcon color={focused ? "white" : color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="music"
        options={{
          title: "Music",
          tabBarActiveTintColor: TabBarActiveTintColor,
          tabBarLabelStyle: {
            paddingTop: TabPaddingSize,
            fontSize: TabLabelFontSize,
          },
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? color : "trasnperant",
                padding: TabPaddingSize,
                borderRadius: TabRadius,
              }}
            >
              <MusicIcon color={focused ? "white" : color} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarActiveTintColor: TabBarActiveTintColor,
          tabBarLabelStyle: {
            paddingTop: TabPaddingSize,
            fontSize: TabLabelFontSize,
          },
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                backgroundColor: focused ? color : "trasnperant",
                padding: TabPaddingSize,
                borderRadius: TabRadius,
              }}
            >
              <ProfileIcon color={focused ? "white" : color} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
