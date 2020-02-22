import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, StatusBar  } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import GraphHopperMapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome'
import GeoLocation from 'react-native-geolocation-service'

const origin = { latitude: 19.099047, longitude: 72.843440 };
const destination = { latitude: 19.107198, longitude: 72.836906 };
const GRAPH_HOPPER_KEY = '2af3d5d6-057e-40fc-827c-c7bbf4730848';


export default class RouteDirector extends Component {



    constructor(props) {
        super(props)
        this.state = {
            focussedLocation: {
                latitude: 19.099047,
                longitude: 72.843440,
                latitudeDelta: 0.0122,
                longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122
            },
            currentLocation:{
                latitude:19.099047,
                longitude:72.843440
            },
            mapReady: false
        }
    }

    componentDidMount() {
        this.arm=setInterval(() => {
            // console.warn('timeout')
            GeoLocation.getCurrentPosition(pos=>{
                if(this.state.currentLocation.latitude!=pos.coords.latitude||this.state.currentLocation.longitude!=pos.coords.longitude){
                    // console.warn('changed')
                    this.setState({
                        currentLocation:{
                            latitude:pos.coords.latitude,
                            longitude:pos.coords.longitude
                        }
                    })
                }
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.arm);
      }
    

    render() {
        return (
            <View style={{ display: "flex", flexDirection: 'column', flex: 1 }} >
                <StatusBar backgroundColor='rgb(200,200,200)' barStyle='dark-content'/>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.mapViewer}
                    initialRegion={this.state.focussedLocation}
                    // region={this.state.focussedLocation}
                    zoomEnabled
                    loadingEnabled
                    onMapReady={() => {
                        this.setState({
                            mapReady: true
                        })
                    }}
                >

                    {
                        this.state.mapReady ? (
                            <React.Fragment>
                                <GraphHopperMapViewDirections
                                    origin={origin}
                                    destination={destination}
                                    apikey={GRAPH_HOPPER_KEY}
                                    url={'https://graphhopper.com/api/1'}
                                    strokeWidth={3}
                                    strokeColor={'blue'}
                                />
                                <MapView.Marker coordinate={origin} >
                                    <Icon size={28} name="circle-thin" color="rgb(0,0,0)"/>
                                    </MapView.Marker>
                                <MapView.Marker coordinate={destination} />
                                <MapView.Marker coordinate={this.state.currentLocation}>
                                    <Icon size={28} name="dot-circle-o" color="rgb(0,0,0)"/>
                                    </MapView.Marker>
                            </React.Fragment>
                        ) :
                            null
                    }
                </MapView>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    mapViewer: {
        width: "100%",
        // height: 400,
        flex: 1,
    }
})
