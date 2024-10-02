import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const tasksData = [
    { id: 1, text: 'Günde 1 vakit camide cemaatle namaz kılma ?', completed: false },
    { id: 2, text: 'Günde 3 sayfa Kur\'an okuma ?', completed: false },
    { id: 3, text: '30 dakika kişisel gelişim için çalışma ?', completed: false },
];

export default function TaskPage() {
    const [tasks, setTasks] = useState(tasksData);
    const [newTask, setNewTask] = useState('');

    const toggleTaskCompletion = (taskId: number) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const addTask = () => {
        if (newTask.trim()) {
            const newTaskItem = { id: tasks.length + 1, text: newTask, completed: false };
            setTasks([...tasks, newTaskItem]);
            setNewTask('');
        }
    };

    const deleteTask = (taskId: number) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView 
                    style={{ flex: 1 }} 
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View style={styles.container}>
                        {/* Başlık ve İlham Verici Görsel */}
                        <Text style={styles.title}>Kişisel Vazifelerim</Text>
                        <Image
                            source={{ uri: 'https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?cs=srgb&dl=pexels-technobulka-2908984.jpg&fm=jpg' }}
                            style={styles.inspiringImage}
                        />
                        <Text style={styles.quote}>
                            "Başarım ancak Allah’ın yardımı iledir. Ben yalnızca O’na dayandım ve ancak O’na döneceğim. Hud - 88"
                        </Text>

                        {/* Görev Listesi */}
                        <ScrollView contentContainerStyle={styles.taskList}>
                            {tasks.map(task => (
                                <View key={task.id} style={styles.taskItem}>
                                    <TouchableOpacity onPress={() => toggleTaskCompletion(task.id)} style={styles.taskTextContainer}>
                                        <Icon
                                            name={task.completed ? 'checkmark-circle' : 'ellipse-outline'}
                                            size={24}
                                            color={task.completed ? '#4CAF50' : '#aaa'}
                                            style={styles.icon}
                                        />
                                        <Text style={[styles.taskText, task.completed && styles.completedTaskText]}>
                                            {task.text}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => deleteTask(task.id)}>
                                        <Icon name="close-circle-outline" size={24} color="#ff0000" />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>

                        {/* Yeni Görev Ekle */}
                        <View style={styles.addTaskContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Yeni vazife ekleyin"
                                value={newTask}
                                onChangeText={setNewTask}
                                multiline={true}
                                textAlignVertical="center"
                            />
                            <TouchableOpacity onPress={addTask} style={styles.addButton}>
                                <Icon name="add-circle-outline" size={30} color="#4CAF50" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
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
        padding: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
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
    taskList: {
        paddingBottom: 20,
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    taskTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginRight: 10,
    },
    taskText: {
        fontSize: 18,
        color: '#333',
        marginLeft: 10,
        flexShrink: 1,
    },
    completedTaskText: {
        textDecorationLine: 'line-through',
        color: '#aaa',
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
        fontSize:16,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    addButton: {
        marginLeft: 10,
    },
});
