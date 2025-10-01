import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router' //File-Base Navigation
import React from 'react'

const index = () => {
    return (
        <View style={styles.container}>
            <Link href='/imagesDemo'>Go to Images Demo</Link>
            <Text style={styles.marignContiner}>Home</Text>
            <Text style={[styles.testContainer, styles.marignContiner, { color: 'purple' }]}>Hello How r u</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    testContainer: {
        fontWeight: 'bold',
        fontSize: 20
    },

    marignContiner: {
        marginTop: 14,
        marginBottom: 14
    },

    imageContainer: {
        width: 100,
        height: 100
    }
})