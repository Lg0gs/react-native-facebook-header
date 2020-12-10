import React from 'react';
import { Image, StyleSheet, View } from 'react-native';


export const Footer = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/home.jpg')}
                resizeMode="cover"
                style={{ width: 25, height: 25 }} />
            <Image
                source={require('../assets/play.png')}
                resizeMode="contain"
                style={{ width: 23, height: 23 }} />
            <Image
                source={require('../assets/person.png')}
                resizeMode="contain"
                style={{ width: 23, height: 23 }} />
            <Image
                source={require('../assets/group.png')}
                resizeMode="contain"
                style={{ width: 23, height: 23 }} />
            <Image
                source={require('../assets/bell.png')}
                resizeMode="contain"
                style={{ width: 23, height: 23 }} />
            <Image
                source={require('../assets/burger.png')}
                resizeMode="contain"
                style={{ width: 23, height: 23 }} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})