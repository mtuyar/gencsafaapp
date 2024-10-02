import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, SafeAreaView } from 'react-native';

// PDF kitaplarının listesi
const pdfs = [
    { id: 1, title: 'Bir Gönül Serüveni', cover: 'https://kibo.com.tr/kbservicefiles/kbimagepublic/0/prd/5/0/KB9789757480105.JPG', description: 'Ruhsal bir yolculuğa çıkmak isteyenler için harika bir rehber.' },
    { id: 2, title: 'Bilgelik Yolculuğu', cover: 'https://www.hayrat.com.tr/orta-boy-kuran-i-kerim-siyah-muhurlu-orta-boy-16x24-cm-hayrat-nesriyat-79169-79-B.jpg', description: 'Bilgelik arayışındaki bir insanın düşünce dünyasına bir yolculuk.' },
    { id: 3, title: 'Hayatın Anlamı', cover: 'https://cdn.kibo.com.tr/kibo/307/9/0/4809.jpg', description: 'Hayatın anlamını sorgulayan bir eseri keşfedin.' },
    { id: 4, title: 'İçsel Huzur', cover: 'https://www.kitapkalbi.com/resimler/66222/thumb/whatsapp-image-2023-04-17-at-152213.webp', description: 'İçsel huzuru arayanlar için bir başucu kitabı.' },
    { id: 5, title: 'Aşk ve Hayat', cover: 'https://kibo.com.tr/kbservicefiles/kbimagepublic/0/prd/5/0/KB9789757480105.JPG', description: 'Aşk ve hayatın iç içe geçtiği bir serüven.' },
    { id: 6, title: 'Hayal Gücünün Gücü', cover: 'https://img.alkapida.com/images/products/f/849/S30200505533946924-big_zoom.jpg', description: 'Hayal gücünün sınırlarını zorlayan bir anlatı.' },
    { id: 7, title: 'Yaratıcı Düşünce', cover: 'https://img.alkapida.com/images/products/f/849/S30200505533946924-big_zoom.jpg', description: 'Yaratıcı düşüncenin insan hayatındaki etkisi.' },
    { id: 8, title: 'Zamanın Ötesinde', cover: 'https://img.alkapida.com/images/products/f/849/S30200505533946924-big_zoom.jpg', description: 'Zaman kavramını sorgulayan bir eser.' },
    { id: 9, title: 'Mutluluğun Anahtarı', cover: 'https://img.alkapida.com/images/products/f/849/S30200505533946924-big_zoom.jpg', description: 'Mutluluğun peşinde bir serüven.' },
    { id: 10, title: 'Anıların Peşinde', cover: 'https://img.alkapida.com/images/products/f/849/S30200505533946924-big_zoom.jpg', description: 'Geçmişin izlerini süren bir hikaye.' },
];

// Her bir kitabı görüntüleyen bileşen
const renderBook = ({ item }) => (
    <View style={styles.bookContainer}>
        <Image source={{ uri: item.cover }} style={styles.bookCover} />
        <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            <Text style={styles.bookDescription}>{item.description}</Text>
        </View>
    </View>
);

export default function LibraryPage() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* "Çok Yakında" Banner */}
                <View style={styles.comingSoonContainer}>
                    <Text style={styles.comingSoonText}>Sayfa Yapım Aşamasındadır {"\n"} Çok Yakında...</Text>
                </View>


                <Text style={styles.title}>Kütüphanem</Text>
                <FlatList
                    data={pdfs}
                    renderItem={renderBook}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.bookList}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
}

// Sayfa tasarımı
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
        color: '#000000', // Siyah başlık
        fontFamily: 'Georgia',
    },
    bookList: {
        paddingBottom: 20,
    },
    bookContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#f7f7f7',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    bookCover: {
        width: 80,
        height: 120,
        borderRadius: 8,
        marginRight: 15,
    },
    bookDetails: {
        flex: 1,
        justifyContent: 'center',
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000', // Siyah başlık
        marginBottom: 5,
    },
    bookDescription: {
        fontSize: 14,
        color: '#666666', // Grimsi açıklama
    },
    comingSoonContainer: {
        backgroundColor: '#eaeaea',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    comingSoonText: {
        fontSize: 24,
        fontWeight: '700',
        textAlign:'center',
        color: '#D3B305', // Vurgulu turuncu
        fontFamily: 'Cochin',
    },
    
});
