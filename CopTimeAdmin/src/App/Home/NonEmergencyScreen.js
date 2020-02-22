import React, { Component } from 'react'
import { View, StyleSheet, TouchableNativeFeedback ,TouchableOpacity } from 'react-native'
import CaseViewer from '../Resuables/CaseViewer'

const solved = [
    {
        title: 'Bicyclye theft a week ago',
        status: 'Unsolved',
        time: '03:15 am',
        caseNo: 'S1244',
        associate:'Associated To: Rajesh Kulkarni'
    },
    {
        title: 'Land acquisition by my cousin',
        status: 'Unsolved',
        time: '2:09 pm',
        caseNo: 'S2763',
        associate:'Associated To: Ram Mathur'
    },
]
const unsolved = [
    {
        title: 'Drug racket near Irla',
        status: 'Unsolved',
        location: '11:34 pm',
        caseNo: 'U1522',
        associate:'Click to get associated'
    },
    {
        title: 'Possibility of Domestic Violence in my neighbourhood',
        status: 'Unsolved',
        time: '02:22 am',
        caseNo: 'U2876',
        associate:'Click to get associated'
        
    },
]

export default class EmergencyScreen extends Component {

    render() {

        return (
               <CaseViewer solved={solved} unsolved={unsolved} redirect={'RouteDirector'} navigation={this.props.navigation} />
        )
    }
}
