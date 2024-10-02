import React, { useState } from 'react';
import { ScrollView, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Icon from 'react-native-vector-icons/Ionicons'; // Veya FontAwesome gibi başka bir kütüphane kullanabilirsiniz.

const posts = [
  {
    id: 1,
    name: 'Mehmet Taha Uyar',
    username: '@mtuyarr',
    profileImage: 'https://pbs.twimg.com/profile_images/1655838863670034433/WDTJI8oQ_400x400.jpg',
    text: 'Nature is beautiful!',
    image: 'https://umit.net/wp-content/uploads/2021/11/rbcxo9au-u-1.jpg',
    likes: 120,
    comments: 35,
    createdAt: new Date('2024-9-15T10:48:00.000Z'), // Paylaşım zamanı
  },
  {
    id: 2,
    name: 'Eren Akkuş',
    username: '@erenakkus',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    text: 'This is just a text post with no image.',
    likes: 85,
    comments: 10,
    createdAt: new Date('2024-9-14T22:48:00.000Z'), // Paylaşım zamanı
  },
  {
    id: 3,
    name: 'Ali Soy',
    username: '@alisoyy42',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    text: 'Sunset at the beach',
    image: 'https://www.beysehir.bel.tr/gezilecekyergorseller/16273030328634148775.jpeg',
    likes: 240,
    comments: 60,
    createdAt: new Date('2024-9-14T17:48:00.000Z'), // Paylaşım zamanı
  },
  {
    id: 4,
    name: 'Erhan Hakkari',
    username: '@erhan222',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    text: 'A simple text-only post.',
    likes: 42,
    comments: 5,
    createdAt: new Date('2024-09-10T14:48:00.000Z'), // Paylaşım zamanı
  },
  {
    id: 5,
    name: 'Burak Özkaraalp',
    username: '@ozkburak',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    text: 'Delicious homemade pizza!',
    image: 'https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/ykvmayiswebsite26.webp',
    likes: 150,
    comments: 25,
    createdAt: new Date('2024-9-14T21:48:00.000Z'), // Paylaşım zamanı
  },
  {
    id: 6,
    name: 'Hasan Ali Çebiç',
    username: '@cebichasanli',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    text: 'Good morning everyone! 🌞',
    likes: 90,
    comments: 12,
    createdAt: new Date('2024-09-10T14:48:00.000Z'), // Paylaşım zamanı
  },
  {
    id: 7,
    name: 'Mehmet Emin Civan',
    username: '@emincivanadammert',
    text: 'Karadenizde inanılmaz bir Camii.',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    image: 'https://www.islamveihsan.com/wp-content/uploads/2016/09/Rize-kibledagi-camii-1.jpg',
    likes: 200,
    comments: 40,
    createdAt: new Date('2024-9-14T17:48:00.000Z'), // Paylaşım zamanı
  },
  {
    id: 8,
    name: 'Yusuf Çalış',
    username: '@calisYusufSevgiliyetakip',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    text: 'Just a quote to brighten your day!',
    likes: 75,
    comments: 8,
    createdAt: new Date('2024-09-10T14:48:00.000Z'), // Paylaşım zamanı
  },
  {
    id: 9,
    name: 'Yunus Emre Güçlü',
    username: '@gucluyunusemre',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    text: 'Coffee time ☕',
    image: 'https://www.taftcoffee.com/cdn/shop/articles/DALL_E_2024-02-29_18.30.12_-_Create_a_photo-realistic_image_featuring_a_cup_of_coffee_with_steam_rising_from_it_placed_on_a_wooden_table._There_should_be_a_measuring_tape_loosely.webp?v=1709220694&width=2048',
    likes: 130,
    comments: 22,
    createdAt: new Date('2024-9-14T14:48:00.000Z'), // Paylaşım zamanı
  },
  {
    id: 10,
    name: 'Yusuf Hezer',
    username: '@hezeryusuf',
    profileImage: 'https://t3.ftcdn.net/jpg/06/19/26/46/360_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg',
    text: 'A day in the city.',
    image: 'https://assets.enuygun.com/media/lib/570x400/uploads/image/5617.jpeg',
    likes: 110,
    comments: 18,
    createdAt: new Date('2024-09-10T14:48:00.000Z'), // Paylaşım zamanı
  },
];


export default function SocialMediaPage() {
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    );
  };

  return (
    <ParallaxScrollView
      headerImage={<Image source={require('../../assets/images/aksa.png')} style={{ width: '100%', height: 250 }} />}
      headerBackgroundColor={{ light: '#fff', dark: '#333' }}
    >
      {/* Gönderi Ekleme Bölümü */}
      <ThemedView style={styles.postCreationContainer}>
        <ThemedView style={styles.profileSection}>
          <Image
            source={{ uri: 'https://pbs.twimg.com/profile_images/1655838863670034433/WDTJI8oQ_400x400.jpg' }} // Kullanıcı profil fotoğrafını buraya ekleyin
            style={styles.profileImage}
          />
          <TextInput
            style={styles.input}
            placeholder="Bir şey paylaş..."
            placeholderTextColor="#666"
            multiline={true}
            textAlignVertical="top"
          />
        </ThemedView>

        <ThemedView style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="image-outline" size={22} color="#007AFF" />
            <ThemedText style={styles.iconText}>Fotoğraf</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="camera-outline" size={22} color="#007AFF" />
            <ThemedText style={styles.iconText}>Kamera</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="location-outline" size={22} color="#007AFF" />
            <ThemedText style={styles.iconText}>Konum</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        <TouchableOpacity style={styles.submitButton}>
          <ThemedText style={styles.submitButtonText}>Paylaş</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Paylaşımlar */}
      <ScrollView contentContainerStyle={styles.postsContainer}>
        {posts.map((post) => (
          <ThemedView key={post.id} style={styles.postContainer}>
            {/* Profil fotoğrafı, isim ve zaman */}
            <ThemedView style={styles.postHeader}>
              <Image source={{ uri: post.profileImage }} style={styles.profileImage} />
              <ThemedView>
                <ThemedText type="defaultSemiBold">{post.name}</ThemedText>
                <ThemedText style={styles.usernameText}>{post.username}</ThemedText>
              </ThemedView>
              <ThemedText style={styles.timeAgoText}>{}</ThemedText>
            </ThemedView>

            {/* Gönderi içeriği */}
            {post.image && (
              <Image source={{ uri: post.image }} style={styles.postImage} />
            )}
            <ThemedText type="default">{post.text}</ThemedText>

            {/* Beğen, Yorum, İlet butonları */}
            <ThemedView style={styles.postActions}>
              <TouchableOpacity
                style={styles.actionButtonPost}
                onPress={() => toggleLike(post.id)}
              >
                <Icon
                  name={likedPosts.includes(post.id) ? 'heart' : 'heart-outline'}
                  size={24}
                  color={likedPosts.includes(post.id) ? 'red' : 'black'}
                />
                <ThemedText type="link"> {post.likes}</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButtonPost}>
                <Icon name="chatbubble-outline" size={24} color="black" />
                <ThemedText type="link"> {post.comments}</ThemedText>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButtonPost}>
                <Icon name="paper-plane-outline" size={24} color="black" />
              </TouchableOpacity>
            </ThemedView>
          </ThemedView>
        ))}
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  postCreationContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    textAlignVertical: 'top',
    maxHeight: 100,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonPost: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  iconText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#007AFF',
  },
  submitButton: {
    backgroundColor: '#4D90D8',
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  postContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
    marginHorizontal: -16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  usernameText: {
    color: 'gray',
  },
  timeAgoText: {
    marginLeft: 'auto',
    color: 'gray',
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 8,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
  },
  postsContainer: {
    paddingHorizontal: 16,
  },
});