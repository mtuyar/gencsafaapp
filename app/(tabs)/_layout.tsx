import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, View } from 'react-native'; // Fotoğraf için Image bileşeni

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="explore"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'compass' : 'compass-outline'}
              color={color ='#365F8F'}
              style={{ marginTop: 11 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="third"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'library' : 'library-outline'}
              color={color ='#365F8F'}
              style={{ marginTop: 11 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={focused ? require('../../assets/images/gencsafalogofocused.png'): require('../../assets/images/gencsafalogo.png')} // Yerel dosya yolu
                style={{
                  marginTop: 14,
                  width: 34, // Simge boyutuna uygun genişlik
                  height: 34, // Simge boyutuna uygun yükseklik
                }}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="fourth"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'checkmark-circle' : 'checkmark-circle-outline'}
              color={color ='#365F8F'}
              style={{ marginTop: 11 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="fifth"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'grid' : 'grid-outline'}
              color={color ='#365F8F'}
              style={{ marginTop: 11 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
