import React, { useContext } from 'react'
import { Text, View, StyleSheet, } from 'react-native'
import { BlackButton } from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionContext';

export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext(PermissionsContext)




    return (
        <View style={styles.container}>
            <Text style={styles.title}>GPS access needed</Text>

            <BlackButton
                title='Permission'
                onPress={askLocationPermission}
            />

            <Text style={styles.appStatus}>
                {JSON.stringify(permissions, null, 5)}
            </Text>
        </View>
    )
}



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: 250,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20

    },
    appStatus: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: '600'
    }
});