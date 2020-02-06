import React, { Component } from 'react'
import { View, StyleSheet, TouchableNativeFeedback ,TouchableOpacity } from 'react-native'
import CaseViewer from '../Resuables/CaseViewer'

const solved = [
    {
        title: 'Theft at Dadar station',
        status: 'Solved',
        time: '12:53 pm',
        caseNo: 'S1244',
        associate:'Associated To: Ram Mathur'
    },
    {
        title: 'Murder in rahul colony',
        status: 'Solved',
        time: '11:00 am',
        caseNo: 'S2763',
        associate:'Associated To: Mangal Pandey'
    },
]
const unsolved = [
    {
        title: 'Domestic violence near my house',
        status: 'Solved',
        time: '11:30 pm',
        caseNo: 'U1522',
        associate:'Click to get assocaited'
    },
    {
        title: 'Kidnapping near Shivaji Park',
        status: 'Solved',
        time: '1:08 pm',
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
