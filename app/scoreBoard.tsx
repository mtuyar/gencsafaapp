import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const users = [
  {
    id: 1,
    name: 'Mehmet Taha Uyar',
    username: '@mtuyarr',
    profileImage: 'https://pbs.twimg.com/profile_images/1655838863670034433/WDTJI8oQ_400x400.jpg',
    score: 850,
  },
  {
    id: 2,
    name: 'Eren Akkuş',
    username: '@erenakkus',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    score: 780,
  },
  {
    id: 3,
    name: 'Ali Soy',
    username: '@alisoyy42',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    score: 720,
  },
  {
    id: 4,
    name: 'Erhan Hakkari',
    username: '@erhan222',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    score: 670,
  },
  {
    id: 5,
    name: 'Burak Özkaraalp',
    username: '@ozkburak',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    score: 640,
  },
  {
    id: 6,
    name: 'Burak Özkaraalp',
    username: '@ozkburak',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    score: 640,
  },
  {
    id: 7,
    name: 'Burak Özkaraalp',
    username: '@ozkburak',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    score: 640,
  },
  {
    id: 8,
    name: 'Burak Özkaraalp',
    username: '@ozkburak',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    score: 640,
  },
  {
    id: 9,
    name: 'Burak Özkaraalp',
    username: '@ozkburak',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    score: 640,
  },
  {
    id: 10,
    name: 'Burak Özkaraalp',
    username: '@ozkburak',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    score: 640,
  },
];

export default function ScoreboardPage() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ThemedView style={styles.container}>
        <ThemedText style={styles.title}>Leaderboard</ThemedText>

        {/* Top 3 Kullanıcılar */}
        <View style={styles.top3Container}>
          {/* 2. Kullanıcı */}
          <View style={styles.topUserContainer}>
            <Image source={{ uri: users[1].profileImage }} style={styles.smallProfileImage} />
            <ThemedText style={styles.smallName}>{users[1].name}</ThemedText>
            <ThemedText style={styles.rankNumber}>2</ThemedText>
          </View>

          {/* 1. Kullanıcı */}
          <View style={styles.topUserContainerCenter}>
            <Image source={{ uri: users[0].profileImage }} style={styles.largeProfileImage} />
            <ThemedText style={styles.largeName}>{users[0].name}</ThemedText>
            <ThemedText style={styles.rankNumberCenter}>1</ThemedText>
          </View>

          {/* 3. Kullanıcı */}
          <View style={styles.topUserContainer}>
            <Image source={{ uri: users[2].profileImage }} style={styles.smallProfileImage} />
            <ThemedText style={styles.smallName}>{users[2].name}</ThemedText>
            <ThemedText style={styles.rankNumber}>3</ThemedText>
          </View>
        </View>

        {/* Diğer kullanıcılar */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {users.map((user, index) => (
            <View key={user.id} style={styles.userContainer}>
              <ThemedText style={styles.rank}>{index + 1}</ThemedText>
              <View style={styles.profileContainer}>
                <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
                <View>
                  <ThemedText style={styles.name}>{user.name}</ThemedText>
                  <ThemedText style={styles.username}>{user.username}</ThemedText>
                </View>
              </View>
              <View style={styles.scoreContainer}>
                <Icon name="trophy-outline" size={24} color="#F7D000" />
                <ThemedText style={styles.score}>{user.score}</ThemedText>
              </View>
            </View>
          ))}
        </ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 37,
    color: '#333',
    textAlign: 'center',
  },
  top3Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  topUserContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  topUserContainerCenter: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: -30, // Ortadaki profilin büyük görünmesi için yukarı çekiyoruz.
  },
  largeProfileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#FFD700', // Altın çerçeve
  },
  smallProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#C0C0C0', // Gümüş çerçeve
  },
  largeName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  smallName: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
  },
  rankNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666',
  },
  rankNumberCenter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  rank: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4D90D8',
    marginRight: 15,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  username: {
    fontSize: 14,
    color: '#888',
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#F7D000',
  },
});
