import React, { Component } from 'react'
import { View, StyleSheet, TouchableNativeFeedback ,TouchableOpacity,StatusBar,Dimensions } from 'react-native'
import { Input, Text, Block, theme, Button, Icon ,ImageBackground} from 'galio-framework';
import { Divider } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Images } from "../../Static/Constants";
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get("screen");


class CaseViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            caseView: props.unsolved
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
        const { navigate } = useNavigation();
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
                    <TouchableOpacity activeOpacity={1} onPress={() => this.caseView('unsolved')}
                        style={[bg.unsolved,
                        {
                            width: '30%',
                            margin: 6,
                            color: "#5e72e5",
                            flex: 1, justifyContent: 'center', alignItems: 'center',
                            height: 40,
                            borderRadius: 2,
                            shadowColor: 'rgba(0,0,0, .4)', // IOS
                            shadowOffset: { height: 1, width: 1 }, // IOS
                            shadowOpacity: 1, // IOS
                            shadowRadius: 1,
                            padding: 5,
                            elevation: 2,
                        }]}>
                        <Text style={[bg.unsolved,{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 2 }]} >Unsolved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => this.caseView('solved')} style={[bg.solved,
                    {
                        width: '30%',
                        margin: 6,
                        color: "#5e72e5",
                        flex: 1, justifyContent: 'center', alignItems: 'center',
                        height: 40,
                        borderRadius: 2,
                        shadowColor: 'rgba(0,0,0, .4)', // IOS
                        shadowOffset: { height: 1, width: 1 }, // IOS
                        shadowOpacity: 1, // IOS
                        shadowRadius: 1,
                        padding: 5,
                        elevation: 2
                    }]}>
                        <Text style={[bg.solved,{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 2 }]} >Solved</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}  onPress={() => this.caseView('all')} style={[bg.all,
                    {
                        width: '30%',
                        margin: 6,
                        color: "#5e72e5",
                        flex: 1, justifyContent: 'center', alignItems: 'center',
                        height: 40,
                        borderRadius: 2,
                        shadowColor: 'rgba(0,0,0, .4)', // IOS
                        shadowOffset: { height: 1, width: 1 }, // IOS
                        shadowOpacity: 1, // IOS
                        shadowRadius: 1,
                        padding: 5,
                        elevation: 2
                    }
                    ]}>
                        <Text style={[bg.all,{ fontFamily: 'TitilliumWeb-Light', letterSpacing: 2 }]} >All</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {this.state.caseView.map((cases, index) => (
                       <View style={styles.outerNotify} key={index} >
                       <TouchableNativeFeedback onPress={() => navigate(this.props.redirect) } style={styles.outerNotifyTouch} >
                           <View style={styles.innerNotify} >
                               <View style={styles.rowFlexer}>
                               <View style={{flex:1}} >
                                   </View>
                                   <View style={styles.complaintNumber}>
                                       <Text color="#0f0f0f">{cases.caseNo}</Text>
                                   </View>
                               </View>
                               {/* <View style={{flex:1}}></View> */}
                               <View>
                                   <Text color="rgb(130,130,130)" size={15}>{cases.title}</Text>
                               </View>
                               <View>
                               <Text color="#9e9a9a" style={{marginTop:5}} size={13}>{cases.associate}</Text>
                               </View>
                               <View style={{flex:1}}></View>
                               <View style={styles.dateTimeFlexer}>
                                   <View style={{marginLeft:10}} >
                                       <Text color="#c1c1c1" size={12} style={{marginLeft:-9}}>{cases.status}</Text>
                                   </View>
                                   <View style={{flex:1}}></View>
                                   <View style={{marginRight:10}} >
                                       <Text color="#c1c1c1" size={12} style={{marginLeft:-9}}>{cases.time}</Text>
                                   </View>
                               </View>
                           </View>
                       </TouchableNativeFeedback>
                   </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

var bg = StyleSheet.create({
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
    complaintNumber: {
        borderRadius: 2,
        width: 100,
        height: 30,
        marginTop: -21,
        backgroundColor: '#fff',
        alignItems: 'center',
        elevation: 2,
        borderWidth: 0,
        borderColor: 'red',
        alignItems:'center',
        justifyContent:'center'
    },
    outerNotify: {
        backgroundColor: '#ffffff',
        elevation: 3,
        marginTop: '7%',
        marginBottom: '5%'
    },
    innerNotify: {
        padding: 8,
        height: 90
    },
    rowFlexer: {
        display: "flex",
        flexDirection: "row"
    },
    dateTimeFlexer:{
        display:"flex",
        flexDirection:"row"
    }
})

export default (CaseViewer);