import { styles } from "./styles";
import React, {useState} from "react";
import {Task} from "../../components/Task"
import {TextInput, TouchableOpacity, View, Text, Image, FlatList, Alert} from "react-native";
import { TaskDTO } from "../../dtos/taskDTO";
import { uuid } from "../../utils/uuid";

export default function Home(){
    const [taskList,setTaskList] = useState<TaskDTO[]>([]);
    const [taskNew, setTaskNew] = useState('');   
    
    const tasksToDo = taskList.length
    const tasksDone = taskList.filter(({isChecked}) => isChecked).length

    function handleTaskAdd (){
        if(taskNew !== '' && taskNew.length >= 3){
            setTaskList((taskList) => [
                ...taskList, 
                { id: uuid(), isChecked: false, name: taskNew.trim()},
            ])
            setTaskNew('')
        }
        else {
            Alert.alert ("Tarefa inválida", "Crie tarefas e organize seus itens a fazer"
            )
        }

    }

    function handleTaskDone (id: string){
        setTaskList((taskList) => 
        taskList.map((taskList)=> {
            taskList.id === id ?(taskList.isChecked = !taskList.isChecked) : null
            return taskList 
        })
    )
    }
     function handleTaskRemove (id: string){
        Alert.alert("Remover", "Deseja remover essa tarefa?", 
            [
                {
                    text: "Sim",
                    onPress: () => setTaskList(prevState => prevState.filter(task => task.id !== id))
                },
                {
                    text: "Não",
                    style: "cancel"
                }
            ]
        )
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo}source={require('../../assets/Logo.png')}
                />
            </View>
            <View style={styles.form}>
                <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor='#808080'
                onChangeText={setTaskNew}
                value={taskNew}
                />
                <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                <Image style={styles.plus}source={require('../../assets/plus.png')}
                />
                </TouchableOpacity>
            </View>
            <View style={styles.formCont}>
                <View style={styles.tasksNumbers}>
                    <Text style={styles.tasksCont}>
                    Criadas 
                    </Text>
                    <View style={styles.viewNumber}>
                        <Text style={styles.number}>
                            {tasksToDo}
                        </Text>
                    </View>
                 </View>   
                 <View style={styles.tasksNumbers}>
                    <Text style={styles.doneCont}>
                    Concluídas 
                     </Text>
                     <View style={styles.viewNumber}>
                        <Text style={styles.number}>
                        {tasksDone}
                        </Text>
                    </View>
                </View>
            </View>
            <View>
            <FlatList
                data={taskList}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Task
                        key={item.id}
                        onRemove={() => handleTaskRemove(item.id)}
                        onDone={() => handleTaskDone(item.id)}
                        {...item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <View style={styles.list}>
                    <Image style={styles.emptyStateImg}source={require('../../assets/Clipboard.png')}/>
                    <Text style={styles.listEmptyState}>
                        Você ainda não tem tarefas cadastradas
                    </Text>
                    <Text style={styles.listEmptyStateSub}>
                        Crie tarefas e organize seus itens a fazer
                    </Text>
                    </View> 
                )}
            /> 
            </View>                 
        </View>
    )
};

