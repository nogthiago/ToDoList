import {styles} from './styles';
import {View, Text, TouchableOpacity, Image} from "react-native";
import React, {useState} from 'react';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { TaskDTO } from '../../dtos/taskDTO';

type TasksProps = TaskDTO & {
    onRemove: (id: string) => void
    onDone: (id: string) => void
}
export function Task({id, name, isChecked, onRemove, onDone}: TasksProps){

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.check} onPress={() => onDone(id)}>
                <MaterialCommunityIcons 
                name={isChecked ? "checkbox-marked-circle-outline" : "checkbox-blank-circle-outline" }
                size={22} 
                color={isChecked ? "#5E60CE" : "#4EA8DE" }
                />
            </TouchableOpacity>
            <View style={styles.taskText}>
            <Text style={isChecked ? styles.taskDone : styles.taskToDo}>
                {name}
            </Text>
            </View>
            <TouchableOpacity style={styles.remove} onPress={() => onRemove(id)}>
                <Image source={require("../../assets/remove.png")}/>
            </TouchableOpacity>
        </View>
    )
}