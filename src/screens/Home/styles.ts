import { StyleSheet } from "react-native";
import React from "react";


export const styles =  StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#1E1E1E',
    },
    header: {
        backgroundColor: '#0D0D0D',
        height: 173,
        alignItems: 'center',
        justifyContent: "center",
    },
    logo: {
        width:110,
        height: 32, 
    },
    input: {
        alignItems: 'center',
        height: 54,
        width: 308,
        padding: 16,
        marginRight:4,
        backgroundColor: '#262626',
        borderRadius: 5,
        fontSize: 16,
        color: '#FFF'
    },
    form: {
        flexDirection: 'row',
        marginTop: -30,
        margin: 24,
        justifyContent: 'space-between'
    },
    button: {
        height: 52,
        width: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F', 
        alignItems: 'center',
        justifyContent: 'center'
    },
    plus: {
        height: 16,
        width: 16,
    },
    listEmptyState: {
        color: '#808080',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },
    listEmptyStateSub: {
        color: '#808080',
        textAlign: 'center',
        fontSize: 14,
    },
    emptyStateImg: {
        height: 56,
        width: 56,
        marginBottom: 16,
        marginTop: 48,
        margin: 20,
    },
    list: {
        borderColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 24,
        height: 208,
        borderTopWidth: 0.3,
        marginTop: 20,

    },
    formCont: {
        flexDirection: 'row',
        marginLeft: 24,
        marginRight:24,
        justifyContent: "space-between",
        marginBottom: 20

    },
    tasksCont: {
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 14
    },
    doneCont: {
        color: '#8284FA',
        fontWeight: 'bold',
        fontSize: 14,
    },
    tasksNumbers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 'auto',
        alignItems: 'center',

    },
    viewNumber: {
        backgroundColor: '#333333',
        width: 25,
        borderRadius: 9,
        alignItems: "center",
        marginLeft: 9
    },
    number: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },

})