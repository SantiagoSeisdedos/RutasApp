import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Map } from '../components/Map'

export const MapScreen = () => {

    return (
        <View style={{ flex: 1 }}>

            <Map />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
