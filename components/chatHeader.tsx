import { ThemedView } from '@/components/ThemedView';
import {  ThemedText } from '@/components/ThemedText';
import { View, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ChatHeader() {
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: '#0a7ea4' }}>
      <ThemedView style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <ThemedText type="title" style={styles.title}>Mesajlar</ThemedText>
        <TouchableOpacity style={styles.optionsButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 3,
    backgroundColor: '#0a7ea4',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  optionsButton: {
    padding: 8,
  },
});
