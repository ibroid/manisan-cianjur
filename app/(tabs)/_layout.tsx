import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#9AC1FB",
        headerShown: false,
        headerStyle: {
          backgroundColor: "#9AC1FB"
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Beranda',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pelayanan"
        options={{
          title: 'Pelayanan',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'apps' : 'apps'} color={color} />
          ),
          headerShown: true,
          headerTintColor: "#fff"
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Informasi',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
