import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Universo',
          tabBarIcon: ({ color }) => <FontAwesome5 name="squarespace" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="corposceleste"
        options={{
          title: 'Corpos Celestes',
          tabBarIcon: ({ color }) => <FontAwesome6 name="meteor" size={24} color="black" />,
        }}
        
      />
      <Tabs.Screen
        name="sistemasolar"
        options={{
          title: 'Sistema Solar',
          tabBarIcon: ({ color }) => <Feather name="sun" size={24} color="black" />,
        }}
        
      />
    </Tabs>
  );
}
