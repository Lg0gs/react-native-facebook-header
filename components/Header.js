import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';


export const Header = ({ translateY, opacity }) => {
    return (
        <Animated.View
            style={[styles.container, { opacity, transform: [{ translateY }] }]}>
            <Image
                source={require('../assets/logo.png')}
                resizeMode="cover"
                style={styles.logo} />
            <View style={styles.actions}>
                <View style={[styles.iconContainer, { marginRight: 10 }]}>
                    <Image
                        source={require('../assets/search.png')}
                        resizeMode="contain"
                        style={styles.icon} />
                </View>
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../assets/messenger.png')}
                        resizeMode="contain"
                        style={styles.icon} />
                </View>
            </View>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginHorizontal: '5%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: '35%',
        height: '100%'
    },
    actions: {
        width: '40%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: 'rgb(221, 222, 231)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: '60%',
        height: '60%'
    }
});