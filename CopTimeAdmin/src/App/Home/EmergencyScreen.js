import React, { Component } from 'react'
import { View, StyleSheet, TouchableNativeFeedback ,TouchableOpacity } from 'react-native'
import CaseViewer from '../Resuables/CaseViewer'

const solved = [
    {
        title: 'Theft at Dadar station',
        officer: 'Rajesh Kulkarni',
        location: 'Dadar',
        caseNo: 'S1244'
    },
    {
        title: 'Murder in rahul colony',
        officer: 'Hardik Pandya',
        location: 'Borivali',
        caseNo: 'S2763'
    },
]
const unsolved = [
    {
        title: 'Domestic violence near my house',
        officer: 'MS Dhoni',
        location: 'Ranchi',
        caseNo: 'U1522'
    },
    {
        title: 'Kidnapping near Shivaji Park',
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
