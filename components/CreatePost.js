import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export const CreatePost = () => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/122870637_350363562862010_3933229291478053616_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=OjuuVNqHxNcAX8fb7uP&_nc_ht=scontent.ftbs5-1.fna&oh=410e30b1a443b652db3ee7569410d933&oe=5FF88589' }}
                resizeMode="contain"
                style={styles.avatar} />
            <Text style={styles.question}>{`What's on your mind?`}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 35,
        marginLeft: 20
    },
    question: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: '500',
        color: '#555'
    }
})