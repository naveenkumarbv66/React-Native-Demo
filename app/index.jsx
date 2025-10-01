import { StyleSheet, Text, View, Image } from 'react-native'
import testImage from '../assets/img/test_image.png'
import React from 'react'

const index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.marignContiner}>Home</Text>
            <Text style={[styles.testContainer, styles.marignContiner]}>Hello How r u</Text>
            <Image source={testImage} style={styles.imageContainer}></Image>
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