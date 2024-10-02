import { TextInput, TouchableOpacity, View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function MessageInput(
    {
        style,
        lightColor,
        darkColor,
        type = 'default',
        ...rest
    }: ThemedTextProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.inputContainer}
        >
            <TextInput
                style={[styles.textInput, {}]} // Tema bazlı arka plan rengi
                placeholder="Mesajınızı yazın..."
                placeholderTextColor={color}
                multiline // Çok satırlı girişi etkinleştirmek için
                numberOfLines={4} // Varsayılan satır sayısı
                scrollEnabled // Giriş alanında kaydırmayı etkinleştirir
            />
            <TouchableOpacity style={styles.sendButton}>
                <Ionicons name="send" size={24} color="white" />
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        backgroundColor: 'white',
    },
    textInput: {
        flex: 1,
        padding: 8,
        borderRadius: 20,
        borderColor: '#ececec',
        borderWidth: 1,
        minHeight: 40, // Minimum yükseklik
        maxHeight: 100, // Maksimum yükseklik
    },
    sendButton: {
        backgroundColor: '#0a7ea4',
        borderRadius: 24,
        padding: 12,
        marginLeft: 8,
    },
});
