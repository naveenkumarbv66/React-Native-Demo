import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import testImage from '../assets/img/test_image.png'
import React from 'react'

const index = () => {
    //const backgroundImage = require('../assets/img/test_image.png'); // Local image
    const backgroundImage = { uri: 'https://www.freeiconspng.com/thumbs/android-icon/green-android-icon-31.png' }; // Remote image
    return (
        <View style={styles.container}>
            <Text style={styles.marignContiner}>Home</Text>
            <Text style={[styles.testContainer, styles.marignContiner, { color: 'purple' }]}>Hello How r u</Text>
            <Image source={testImage} style={styles.imageContainer}></Image>
            <Image source={require('../assets/img/test_image.png')}
                style={styles.imageContainer} />
            <Image source={{ uri: 'https://reactjs.org/logo-og.png', cache: 'force-cache' }}
                style={{ width: 100, height: 100 }} />

            <Image
                source={{
                    uri: 'https://www.freeiconspng.com/thumbs/android-icon/green-android-icon-31.png',
                    method: 'POST',
                    headers: {
                        Pragma: 'no-cache',
                    },
                    body: 'Your Body goes here',
                }}
                style={{ width: 100, height: 100 }}
            />
            <ImageBackground source={backgroundImage} style={styles.imageContainer}>
                <View style={[styles.overlay, styles.container]}>
                    <Text style={styles.text}>Welcome to my App!</Text>
                    {/* Other components */}
                </View>
            </ImageBackground>
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