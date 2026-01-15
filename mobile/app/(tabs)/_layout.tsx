import React from 'react';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { BarChart2, RefreshCw } from 'lucide-react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: '#448A44',
        tabBarActiveTintColor: '#F1C40F',
        tabBarStyle: {
          backgroundColor: '#145931',
          borderTopColor: '#333',
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'OtraAppDelDolarEnVzla',
          tabBarLabel: 'Tasas',
          tabBarIcon: ({ color }) => <BarChart2 size={24} color={color} strokeWidth={2} />,
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: 'bold',
          },
        }}
      />
      <Tabs.Screen
        name="convert"
        options={{
          title: 'OtraAppDelDolarEnVzla',
          tabBarLabel: 'Convertir',
          tabBarIcon: ({ color }) => <RefreshCw size={24} color={color} strokeWidth={2} />,
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: 'bold',
          },
        }}
      />
    </Tabs>
  );
}
