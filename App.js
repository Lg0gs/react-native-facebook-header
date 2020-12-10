import React from 'react';
import { RefreshControl, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Animated, { Extrapolate, interpolate, multiply, useValue } from 'react-native-reanimated';

import { Header } from './components/Header';
import { CreatePost } from './components/CreatePost';
import { TopSection } from './components/TopSection';
import { Stories } from './components/Stories';
import { Footer } from './components/Footer';
import { Posts } from './components/Posts';


export const App = () => {
    const dragY = useValue(0);
    const clamp = Animated.diffClamp(dragY, 0, 70);

    const translateY = interpolate(clamp, {
        inputRange: [0, 70],
        outputRange: [0, -70],
        extrapolate: Extrapolate.CLAMP
    })

    const translateScrollView = interpolate(clamp, {
        inputRange: [0, 70],
        outputRange: [0, -70],
        extrapolate: Extrapolate.CLAMP
    })

    const opacity = interpolate(clamp, {
        inputRange: [0, 35, 70],
        outputRange: [1, .2, 0],
        extrapolate: Extrapolate.CLAMP
    })

    const onScroll = (e) => {
        const scrollY = e.nativeEvent.contentOffset.y;
        if (scrollY > 0 && scrollY < e.nativeEvent.contentSize.height - e.nativeEvent.layoutMeasurement.height)
            dragY.setValue(scrollY)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            <Header
                translateY={translateY}
                opacity={opacity} />
            <Animated.ScrollView
                style={{
                    paddingTop: multiply(translateY, -1),
                    marginTop: translateY
                }}
                scrollEventThrottle={16}
                onScroll={onScroll}
                refreshControl={<RefreshControl refreshing={false} />}>
                <CreatePost />
                <TopSection />
                <View style={styles.divider} />
                <Stories />
                <View style={styles.divider} />
                <Posts />
            </Animated.ScrollView>
            <Footer />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    divider: {
        width: '100%',
        height: 10,
        backgroundColor: 'rgb(187, 188, 193)'
    }
})