import { ChatHeader } from '@/components/chatHeader';
import { MessageInput } from '@/components/messageInput';
import { MessageList } from '@/components/messageList';
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <ChatHeader></ChatHeader>
      <MessageList></MessageList>
      <MessageInput></MessageInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
