import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export const TopSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <Image
                    source={require('../assets/live.png')}
                    resizeMode="contain"
                    style={styles.icon} />
                <Text style={styles.text}>{`Live`}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.section}>
                <Image
                    source={require('../assets/photos.png')}
                    resizeMode="contain"
                    style={styles.icon} />
                <Text style={styles.text}>{`Photos`}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.section}>
                <Image
                    source={require('../assets/room.png')}
                    resizeMode="contain"
                    style={styles.icon} />
                <Text style={styles.text}>{`Room`}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        width: 20,
        height: 20
    },
    text: {
        fontWeight: '500',
        fontSize: 15,
        marginLeft: 5
    },
    divider: {
        width: 2,
        height: '60%',
        backgroundColor: '#e0e0e0'
    }
})