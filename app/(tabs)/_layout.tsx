import { Tabs } from 'expo-router';
import React, { useContext } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ActivityIndicator, MD2Colors, MD3Colors, Modal, Snackbar, Text } from 'react-native-paper';
import { MainContext } from '@/context/MainProvider';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const { state, destate } = useContext(MainContext)

  return (
    <>
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
            title: 'Bantuan',
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
      <Snackbar
        visible={state.Snackbar.show}
        onDismiss={() => false}
        action={{
          label: 'Tutup',
          onPress: () => {
            destate({
              type: "SNACKBAR",
              payload: false
            })
          },
        }}>
        {state.Snackbar.message}
      </Snackbar>
      <Modal visible={state.LoadingScreen} onDismiss={() => { }} contentContainerStyle={{
        flex: 1,
        alignItems: "center"
      }}>
        <ActivityIndicator color={MD2Colors.white} size={30} />
        <Text style={{ color: MD2Colors.white, marginTop: 20 }}>Mohon Tunggu</Text>
      </Modal>
    </>
  );
}

