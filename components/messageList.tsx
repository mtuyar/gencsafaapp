import { ThemedText } from '@/components/ThemedText';
import { View, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const messages = [
  { id: '1', text: 'Merhaba nasılsın iyim isin uzun zmanadır seni göreim aslında tüm bu oluğ bitenler sonra gelip Merhaba nasılsın iyim isin uzun zmanadır seni göreim aslında tüm bu oluğ bitenler sonra gelip !', sender: 'other', senderName: 'Ali', time: '10:30', status: 'delivered' },
  { id: '2', text: 'Merhaba nasılsın iyim isin uzun zmanadır seni göreim aslında tüm bu oluğ bitenler sonra gelip ?', sender: 'other', senderName: 'Ali', time: '10:31', status: 'delivered' },
  { id: '3', text: 'İyiyim, teşekkürler!', sender: 'me', senderName: 'Ben', time: '10:32', status: 'read' },
  { id: '4', text: 'İyiyim, teşekkürler!', sender: 'other', senderName: 'Ben', time: '10:32', status: 'read' },
  { id: '5', text: 'İyiyim, teşekkürler!', sender: 'me', senderName: 'Ben', time: '10:32', status: 'read' },
  { id: '6', text: 'İyiyim, teşekkürler!', sender: 'me', senderName: 'Ben', time: '10:32', status: 'read' },
  { id: '7', text: 'İyiyim, teşekkürler!', sender: 'other', senderName: 'Ben', time: '10:32', status: 'read' },

];

export function MessageList() {
  return (
    <FlatList
      data={messages}
      renderItem={({ item }) => (
        <View style={[styles.messageContainer, item.sender === 'me' ? styles.sent : styles.received]}>
          {item.sender !== 'me' && (
            <ThemedText style={styles.senderName}>{item.senderName}</ThemedText>
          )}
          <ThemedText>{item.text}</ThemedText>
          <View style={styles.messageFooter}>
            <ThemedText style={styles.time}>{item.time}</ThemedText>
            {item.sender === 'me' && (
              <Ionicons
                name={item.status === 'read' ? 'checkmark-done' : 'checkmark'}
                size={16}
                color={item.status === 'read' ? '#34B7F1' : '#a0a0a0'}
                style={styles.statusIcon}
              />
            )}
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    marginVertical: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    maxWidth: '75%',
    marginHorizontal: 16,
  },
  sent: {
    backgroundColor: '#ffecb9', // WhatsApp'ta gönderilen mesajın rengi
    alignSelf: 'flex-end',
  },
  received: {
    backgroundColor: '#FFFFFF', // WhatsApp'ta alınan mesajın rengi
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  senderName: {
    fontSize: 12,
    color: '#075E54',
    marginBottom: 4,
  },
  messageFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 4,
  },
  time: {
    fontSize: 10,
    color: '#999999',
    marginRight: 4,
  },
  statusIcon: {
    marginLeft: 4,
  },
});
