import React, { Component } from 'react'
import { View, StyleSheet, TouchableNativeFeedback ,TouchableOpacity,StatusBar,Dimensions } from 'react-native'
import { Input, Text, Block, theme, Button, Icon ,ImageBackground} from 'galio-framework';
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Images } from "../../Static/Constants";

const { width, height } = Dimensions.get("screen");


export default class CaseViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseView: props.solved
        };
    }

    caseView = (title) => {
        if (title === 'solved') {
            this.setState({
                caseView: this.props.solved
            })
            bg = ({
                solved: {
                    backgroundColor: '#5e72e5',
                    color:'#fff'
                },
                unsolved: {
                    backgroundColor: '#fff',
                    color:'#5e72e5'
                },
                all: {
                    backgroundColor: '#fff',
                    color:'#5e72e5'
                }
            })
        }
        else if (title === 'unsolved') {
            this.setState({
                caseView: this.props.unsolved
            })
            bg = ({
                solved: {
                    backgroundColor: '#fff',
                    color:'#5e72e5'
                },
                unsolved: {
                    backgroundColor: '#5e72e5',
                    color:'#fff'
                },
                all: {
                    backgroundColor: '#fff',
                    color:'#5e72e5'
                }
            })
        }
        else if (title === 'all') {
            var allCase = this.props.solved.concat(this.props.unsolved)
            this.setState({
                caseView: allCase
            })
            bg = ({
                solved: {
                    backgroundColor: '#fff',
                    color:'#5e72e5'
                },
                unsolved: {
                    backgroundColor: '#fff',
                    color:'#5e72e5'
                },
                all: {
                    backgroundColor: '#5e72e5',
                    color:'#fff'
                }
            })
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Input
                    placeholder="Search for complaints"
                    right
                    icon="search1"
                    family="antdesign"
                    iconSize={25}
                    style={styles.search}
                />
                <View style={styles.outerNavUpper}>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.caseView('solved')} style={[bg.solved,
                    {
                        width: '30%',
                        margin: 6,
                        color: "#5e72e5",
                        flex: 1, justifyContent: 'center', alignItems: 'center',
                        height: 40,
                        borderRadius: 10,
                        shadowColor: 'rgba(0,0,0, .4)', // IOS
                        shadowOffset: { height: 1, width: 1 }, // IOS
                        shadowOpacity: 1, // IOS
                        shadowRadius: 1,
                        padding: 5,
                        elevation: 10
                    }]}>
                        <Text style={[bg.solved,{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 2 }]} >Solved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.caseView('unsolved')}
                        style={[bg.unsolved,
                        {
                            width: '30%',
                            margin: 6,
                            color: "#5e72e5",
                            flex: 1, justifyContent: 'center', alignItems: 'center',
                            height: 40,
                            borderRadius: 10,
                            shadowColor: 'rgba(0,0,0, .4)', // IOS
                            shadowOffset: { height: 1, width: 1 }, // IOS
                            shadowOpacity: 1, // IOS
                            shadowRadius: 1,
                            padding: 5,
                            elevation: 10,
                        }]}>
                        <Text style={[bg.unsolved,{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 2 }]} >Unsolved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}  onPress={() => this.caseView('all')} style={[bg.all,
                    {
                        width: '30%',
                        margin: 6,
                        color: "#5e72e5",
                        flex: 1, justifyContent: 'center', alignItems: 'center',
                        height: 40,
                        borderRadius: 10,
                        shadowColor: 'rgba(0,0,0, .4)', // IOS
                        shadowOffset: { height: 1, width: 1 }, // IOS
                        shadowOpacity: 1, // IOS
                        shadowRadius: 1,
                        padding: 5,
                        elevation: 10
                    }
                    ]}>
                        <Text style={[bg.all,{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 2 }]} >All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {this.state.caseView.map((cases, index) => (
                        <View style={styles.complainContent} key={index}>
                            <View style={styles.innerComplaint}>
                                <View style={styles.complantColor}><View style={styles.complantColorinner}></View></View>
                                <View style={{ flex: 1 }}></View>
                                <View style={styles.complantNumber}>
                                    <Text size={15} muted style={{ marginTop: 2 }}>{cases.caseNo}</Text>
                                </View>
                            </View>
                            <View style={styles.innerComplantContent}>
                                <Text size={18}>
                                    {cases.title}</Text>
                                <Text size={14} style={{ paddingTop: 4 }}>{cases.officer}</Text>
                                <View style={{ flexDirection: 'row', paddingTop: 4 }}>
                                    <Icon name="location" family="EvilIcons" color={theme.COLORS.PLACEHOLDER} size={25} style={{ marginLeft: -5 }} />
                                    <Text size={15} muted>{cases.location}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

var bg = StyleSheet.create({
    solved: {
        backgroundColor: '#5e72e5',
        color:'#fff'
    },
    unsolved: {
        backgroundColor: '#fff',
        color:'#5e72e5'
    },
    all: {
        backgroundColor: '#fff',
        color:'#5e72e5'
    }
})

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#F4F5F7',
        height: '100%',
        flex: 1
    },
    search: {
        borderColor: theme.COLORS.PLACEHOLDER
    },
    outerNavUpper: {
        flexDirection: 'row',
    },
    complainContent: {
        padding: 10,
        marginTop: '8%',
        marginBottom: '0.5%',
        borderWidth: 0,
        elevation: 5,
        shadowColor: '#fff',
        shadowOpacity: 0.5,
        backgroundColor: '#fff',
    },
    innerComplaint: {
        width: '100%',
        flexDirection: 'row',

    },
    innerComplainContent: {
    },
    complantNumber: {
        borderRadius: 3,
        width: 100,
        height: 30,
        marginTop: -21,
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 5,
        borderWidth: 0,
        borderColor: 'red',
    },
    complantColor: {
        width: 30,
        height: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 5,
        marginTop: -15,
        marginRight: -5,
        borderRadius: 3,
    },
    complantColorinner: {
        backgroundColor: 'red',
        marginTop: '4%',
        borderRadius: 3,
        width: 25,
        height: 8,
    },
    complantColorinner2: {
        backgroundColor: 'green',
        marginTop: '4%',
        borderRadius: 3,
        width: 25,
        height: 8,
    },
})
