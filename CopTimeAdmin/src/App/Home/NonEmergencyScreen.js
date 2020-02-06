import React, { Component } from 'react'
import { View, StyleSheet, TouchableNativeFeedback ,TouchableOpacity } from 'react-native'
import CaseViewer from '../Resuables/CaseViewer'

const solved = [
    {
        title: 'Chori hi nahi hui to report ku karu',
        status: 'Unsolved',
        time: '03:15 am',
        caseNo: 'S1244',
        associate:'Associated To: Rajesh Kulkarni'
    },
    {
        title: 'This is my thug life',
        status: 'Unsolved',
        time: '2:09 pm',
        caseNo: 'S2763',
        associate:'Associated To: Ram Mathur'
    },
]
const unsolved = [
    {
        title: '100-200 zyda lele par niche utarde',
        status: 'Unsolved',
        location: '11:34 pm',
        caseNo: 'U1522',
        associate:'Click to get assocaited'
    },
    {
        title: 'Abba ka harmonium gayab ho gaya',
        status: 'Unsolved',
        time: '02:22 am',
        caseNo: 'U2876',
        associate:'Click to get assocaited'
        
    },
]

export default class EmergencyScreen extends Component {

    render() {

        return (
               <CaseViewer solved={solved} unsolved={unsolved}/>
        )
    }
}
