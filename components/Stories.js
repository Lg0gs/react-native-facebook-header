import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';


const stories = [
    'https://scontent.ftbs5-1.fna.fbcdn.net/v/t1.0-9/122870637_350363562862010_3933229291478053616_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=OjuuVNqHxNcAX8fb7uP&_nc_ht=scontent.ftbs5-1.fna&oh=410e30b1a443b652db3ee7569410d933&oe=5FF88589',
    'https://i.pinimg.com/originals/b5/90/ea/b590ea011b39c82f75faf30ca889eb00.jpg',
    'https://images.squarespace-cdn.com/content/v1/55cb4361e4b08dc9aca88339/1594939195288-RLZJUHGZ35KKBPMXB8FG/ke17ZwdGBToddI8pDm48kFEo-VzwHLv6xsN4TtBivNZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmJdLpeZW_ttQnjXwTxihzWNNcr3qND5NVbUPIEq7D_isUuuvQKBpL19fqDETYmdtt/Yarra-Ranges-Myrtle-Beech-Tree-Forest.jpg'
]


export const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.storyContainer}
                horizontal
                showsHorizontalScrollIndicator={false}>
                {stories.map((uri, index) => {
                    if (!index) {
                        return (
                            <View key={uri} style={styles.story}>
                                <Image
                                    source={{ uri }}
                                    resizeMode="cover"
                                    style={styles.image} />
                                <View style={styles.addStoryBtnContainer}>
                                    <Text
                                        numberOfLines={2}
                                        style={styles.title}>
                                        {`Create a story`}
                                    </Text>
                                    <View style={styles.addStoryBtn}>
                                        <Image
                                            source={require('../assets/plus.png')}
                                            resizeMode="contain"
                                            style={{ width: 42, height: 42 }} />
                                    </View>
                                </View>
                            </View>
                        )
                    }

                    return (
                        <View key={uri} style={styles.story}>
                            <Image
                                source={{ uri }}
                                resizeMode="cover"
                                style={{ width: '100%', height: '100%' }} />
                            <View style={styles.publisher}>
                                <Image
                                    source={{ uri: stories[0] }}
                                    resizeMode="contain"
                                    style={styles.publisherAvatar} />
                            </View>
                            <Text
                                numberOfLines={2}
                                style={[styles.publisherName, { fontWeight: '400' }]}>
                                {`Leri Gogsadze`}
                            </Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    storyContainer: {
        width: '94%',
        height: '100%',
        marginHorizontal: '3%'
    },
    story: {
        width: 115,
        height: '90%',
        borderRadius: 20,
        marginHorizontal: 5,
        alignSelf: 'center',
        overflow: 'hidden',
        backgroundColor: 'rgb(243, 247, 248)'
    },
    image: {
        width: '100%',
        height: '60%'
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        width: '70%',
        marginTop: 10
    },
    addStoryBtnContainer: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addStoryBtn: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -25,
        backgroundColor: 'rgb(243, 247, 248)'
    },
    publisher: {
        width: 60,
        height: 60,
        borderRadius: 30,
        position: 'absolute',
        left: 10,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(22, 84, 245)'
    },
    publisherAvatar: {
        width: 48,
        height: 48,
        borderRadius: 25
    },
    publisherName: {
        position: 'absolute',
        left: 10,
        bottom: 10,
        color: '#fff',
        fontSize: 22,
        fontWeight: '500'
    }
})