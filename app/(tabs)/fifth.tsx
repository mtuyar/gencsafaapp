import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'; // To navigate between screens

const optionsData = [
    { id: 1, text: 'Puan Durumu', icon: 'list-circle-outline', route: 'scoreBoard' },
    { id: 2, text: 'Kişisel Vazifeler', icon: 'person-outline', route: 'ownResponsibility' },
    { id: 3, text: 'Notifications', icon: 'notifications-outline', route: 'third' },
    { id: 4, text: 'Achievements', icon: 'trophy-outline', route: 'third' },
    { id: 5, text: 'Support', icon: 'help-circle-outline', route: 'third' },
    { id: 6, text: 'About Us', icon: 'information-circle-outline', route: 'third' },
];

export default function OptionsPage() {
    const navigation = useNavigation(); // Hook for navigation

    const handleNavigation = (route: string) => {
        navigation.navigate(route);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ThemedView style={styles.container}>
                {/* Title */}
                <ThemedText style={styles.title}>Seçenekler</ThemedText>

                {/* ScrollView for options */}
                <ScrollView contentContainerStyle={styles.scrollContainer} style={{ flex: 1 }}>
                    {/* Options List */}
                    {optionsData.map(option => (
                        <TouchableOpacity 
                            key={option.id} 
                            onPress={() => handleNavigation(option.route)} 
                            style={styles.optionItem}
                        >
                            <Icon
                                name={option.icon}
                                size={24}
                                color="#4CAF50"
                                style={styles.icon}
                            />
                            <ThemedText style={styles.optionText}>
                                {option.text}
                            </ThemedText>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </ThemedView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    scrollContainer: {
        paddingBottom: 20,
        flexGrow: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
        fontFamily: 'Roboto-Bold',
    },
    optionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    optionText: {
        fontSize: 18,
        color: '#333',
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
    },
});
