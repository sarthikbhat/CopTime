import React, { Component } from 'react'
import { View, StyleSheet, TouchableNativeFeedback ,TouchableOpacity } from 'react-native'
import CaseViewer from '../Resuables/CaseViewer'

const solved = [
    {
        title: 'Chori hi nahi hui to report ku karu',
        officer: 'Rajesh Kulkarni',
        location: 'Dadar',
        caseNo: 'S1244'
    },
    {
        title: 'This is my thug life',
        officer: 'Hardik Pandya',
        location: 'Borivali',
        caseNo: 'S2763'
    },
]
const unsolved = [
    {
        title: '100-200 zyda lele par niche utarde',
        officer: 'MS Dhoni',
        location: 'Ranchi',
        caseNo: 'U1522'
    },
    {
        title: 'Abba ka harmonium gayab ho gaya',
        officer: 'Virat Kohli',
        location: 'Delhi',
        caseNo: 'U2876'
    },
]

export default class EmergencyScreen extends Component {

    render() {

        return (
               <CaseViewer solved={solved} unsolved={unsolved}/>
        )
    }
}
