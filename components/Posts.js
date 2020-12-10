import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


const posts = [
    {
        avatar: 'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/122870637_350363562862010_3933229291478053616_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=OjuuVNqHxNcAX8fb7uP&_nc_ht=scontent.ftbs5-1.fna&oh=410e30b1a443b652db3ee7569410d933&oe=5FF88589',
        name: 'Leri Gogsadze',
        when: '10',
        title: 'ქართული ენის წარმოშობით დაინტერესებული იყვნენ მეცნიერები.',
        postUri: 'https://www.photoshopmama.net/wp-content/uploads/2019/08/W4A2827-1-1500x1000.jpg'
    },
    {
        avatar: 'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/122870637_350363562862010_3933229291478053616_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=OjuuVNqHxNcAX8fb7uP&_nc_ht=scontent.ftbs5-1.fna&oh=410e30b1a443b652db3ee7569410d933&oe=5FF88589',
        name: 'Leri Gogsadze',
        when: '14',
        title: 'ქართული ენის წარმოშობით დაინტერესებული იყვნენ მეცნიერები.',
        postUri: 'https://i.pinimg.com/originals/13/a7/61/13a761903206aa0a3244f00ee1acd9e6.jpg'
    },
    {
        avatar: 'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/122870637_350363562862010_3933229291478053616_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=OjuuVNqHxNcAX8fb7uP&_nc_ht=scontent.ftbs5-1.fna&oh=410e30b1a443b652db3ee7569410d933&oe=5FF88589',
        name: 'Leri Gogsadze',
        when: 'Yesterday',
        title: 'ქართული ენის წარმოშობით დაინტერესებული იყვნენ მეცნიერები.',
        postUri: 'https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2019/02/Landscapes-04-jeremy-flint.jpg?fit=1500%2C1000&ssl=1'
    }
];

const actionIcons = {
    "Like": require('../assets/like.png'),
    "Comment": require('../assets/chat.png'),
    "Share": require('../assets/share.png')
}
const actions = ['Like', 'Comment', 'Share'];


export const Posts = () => {
    return (
        <View>
            {posts.map(post => {
                return (
                    <View key={post.postUri} style={styles.post}>
                        <View style={styles.header}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={{ uri: post.avatar }}
                                    resizeMode="contain"
                                    style={styles.avatar} />
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <Text style={styles.name}>{`${post.name}`}</Text>
                                    <Text style={styles.when}>{`${post.when} h. 🌍`}</Text>
                                </View>
                            </View>
                            <Text style={styles.threeDots}>...</Text>
                        </View>
                        <Text numberOfLines={2} style={styles.title}>{`${post.title}`}</Text>
                        <Image
                            source={{ uri: post.postUri }}
                            resizeMode="contain"
                            style={{ width: '100%', height: 300 }} />
                        <View style={styles.statistics}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.likes}>
                                    <Image
                                        source={require('../assets/likeCircle.png')}
                                        resizeMode="contain"
                                        style={{ width: 30, height: 30 }} />
                                </View>
                                <View style={[styles.likes, styles.loves]}>
                                    <Image
                                        source={require('../assets/loveCircle.jpg')}
                                        resizeMode="contain"
                                        style={{ width: 23, height: 23 }} />
                                </View>
                                <Text style={{ marginLeft: 25, color: '#777', alignSelf: 'center' }}>3,2 ათ.</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#777', alignSelf: 'center' }}>17 comments</Text>
                                <Text style={{ color: '#777', alignSelf: 'center', marginLeft: 10 }}>257 shares</Text>
                            </View>
                        </View>
                        <View style={styles.actionContainer}>
                            {actions.map(action => {
                                return (
                                    <View key={action} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            source={actionIcons[action]}
                                            resizeMode="contain"
                                            style={{ width: 22, height: 22 }} />
                                        <Text style={styles.actionText}>{`${action}`}</Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                )
            })}
        </View>
    )
}


const styles = StyleSheet.create({
    post: {
        width: '100%',
        marginVertical: 15
    },
    header: {
        width: '90%',
        height: 70,
        marginHorizontal: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    name: {
        fontSize: 20,
        fontWeight: '500',
    },
    when: {
        fontSize: 16,
        fontWeight: '400',
        color: '#777',
        marginTop: 5
    },
    threeDots: {
        fontSize: 30,
        fontWeight: '600'
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 10
    },
    statistics: {
        width: '90%',
        marginHorizontal: '5%',
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -10
    },
    likes: {
        width: 25,
        height: 25,
        borderRadius: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loves: {
        position: 'absolute',
        zIndex: -1,
        left: 20
    },
    actionContainer: {
        width: '90%',
        height: 50,
        marginHorizontal: '5%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0'
    },
    actionText: {
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 7
    }
})