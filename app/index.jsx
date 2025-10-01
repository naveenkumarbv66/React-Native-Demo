import { StyleSheet, Text, View, Image } from 'react-native'
import testImage from '../assets/img/test_image.png'
import React from 'react'

const index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.marignContiner}>Home</Text>
            <Text style={[styles.testContainer, styles.marignContiner, { color: 'purple' }]}>Hello How r u</Text>
            <Image source={testImage} style={styles.imageContainer}></Image>
            <Image source={require('../assets/img/test_image.png')}
                style={styles.imageContainer} />
            <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
                style={{ width: 100, height: 100 }} />

            <Image
                source={{
                    uri: 'https://reactjs.org/logo-og.png',
                    method: 'POST',
                    headers: {
                        Pragma: 'no-cache',
                    },
                    body: 'Your Body goes here',
                }}
                style={{ width: 100, height: 100 }}
            />
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