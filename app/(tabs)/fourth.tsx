import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

const generalTasksData = [
    { id: 1, text: 'Günde 1 vakit camide cemaatle namaz kılma ?', completed: false },
    { id: 2, text: 'Günde 3 sayfa Kur\'an okuma ?', completed: false },
    { id: 3, text: '30 dakika kişisel gelişim için çalışma ?', completed: true },
    { id: 4, text: '3 Vakit namazdan sonra tesibatla ?', completed: false },
    { id: 5, text: '9 Sayfa kitap okuma ?', completed: false },

];

const personalTasksData = [
    { id: 4, text: 'Kendi kişisel vazifem', completed: false },
];

export default function TasksPage() {
    const [generalTasks, setGeneralTasks] = useState(generalTasksData);
    const [personalTasks, setPersonalTasks] = useState(personalTasksData);
    const [newTask, setNewTask] = useState('');

    const toggleGeneralTask = (taskId: number) => {
        setGeneralTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const togglePersonalTask = (taskId: number) => {
        setPersonalTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const addTask = () => {
        if (newTask.trim()) {
            const newTaskItem = { id: personalTasks.length + 4, text: newTask, completed: false };
            setPersonalTasks([...personalTasks, newTaskItem]);
            setNewTask('');
        }
    };

    const deleteTask = (taskId: number) => {
        setPersonalTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    return (
        <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
            <ThemedView style={styles.container}>
                <ThemedText style={styles.title}>Vazifeler</ThemedText>
                <ScrollView contentContainerStyle={styles.scrollContainer} style={{ flex: 1 }}>
                    {/* Inspirational Image */}
                    <Image
                        source={{ uri: 'https://gencgelisim.com/wp-content/uploads/2023/09/Basari-nedir-ve-herkes-icin-ayni-sey-midir.jpg' }}
                        style={styles.inspiringImage}
                    />
                    <ThemedText style={styles.quote}>
                        "Başarım ancak Allah’ın yardımı iledir. Ben yalnızca O’na dayandım ve ancak O’na döneceğim. Hud - 88"
                    </ThemedText>

                    {/* General Tasks */}
                    <ThemedText style={styles.sectionTitle}>Genel Vazifeler</ThemedText>
                    {generalTasks.map(task => (
                        <TouchableOpacity key={task.id} onPress={() => toggleGeneralTask(task.id)} style={styles.taskItem}>
                            <Icon
                                name={task.completed ? 'checkmark-circle' : 'ellipse-outline'}
                                size={24}
                                color={task.completed ? '#4CAF50' : '#aaa'}
                                style={styles.icon}
                            />
                            <ThemedText style={[styles.taskText, task.completed && styles.completedTaskText]}>
                                {task.text}
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
    inspiringImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 20,
    },
    quote: {
        fontSize: 18,
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 20,
        color: '#555',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    taskItem: {
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
    taskText: {
        fontSize: 18,
        color: '#333',
        marginLeft: 10,
        flexShrink: 1, // Metnin taşmasını engeller
        flexWrap: 'wrap', // Metni birden fazla satıra sarar
    },

    completedTaskText: {
        textDecorationLine: 'line-through',
        color: '#aaa',
    },
    icon: {
        marginRight: 10,
    },
    addTaskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        height: 50,
        borderColor: '#ddd',
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    addButton: {
        marginLeft: 10,
    },
});
