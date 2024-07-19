import { StyleSheet } from "react-native";
import {Inter_400Regular, Inter_700Bold} from "@expo-google-fonts/inter"

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 8,
        borderRadius: 8,
        backgroundColor: "#262626",
        flexDirection: "row",
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft:12,
        paddingRight: 8,
        
        justifyContent: "space-between",
        width: "auto"
    },
    taskText: {
        width: 260,
    },
    taskToDo: {
        color: "#F2F2F2",
        fontSize: 14,
    },
    check:{
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    remove:{
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    taskDone:{
        fontFamily: "Inter_400Regular",
        color: "#808080",
        fontSize: 14,
        textDecorationLine: "line-through"
        
    }

})