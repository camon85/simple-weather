import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { LinearGradient } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
    Thunderstorm: {
        colors: ['#00ECBC', '#007ADA'],
        title: '천둥번개',
        subtitle: '천둥번개 ㅠㅠ',
        icon: 'ios-thunderstorm'
    },
    Drizzle: {
        colors: ['#89F7FE', '#66A6FF'],
        title: '이슬비',
        subtitle: '보슬보슬',
        icon: 'ios-rainy-outline'
    },
    Rain: {
        colors: ['#00C6FB', '#005BEA'],
        title: '비',
        subtitle: '비와',
        icon: 'ios-rainy'
    },
    Snow: {
        colors: ['#7DE2FC', '#B9B6E5'],
        title: '눈',
        subtitle: 'Do you wanna build a snowman?',
        icon: 'ios-snow'
    },
    Atmosphere: {
        colors: ['#00C6FB', '#005BEA'],
        title: 'Atmosphere?',
        subtitle: 'ha?',
        icon: 'ios-sunny'
    }, 
    Clear: {
        colors: ['#FEF253', '#FF7300'],
        title: '맑음',
        subtitle: '날씨 좋아 :)',
        icon: 'ios-sunny'
    },
    Clouds: {
        colors: ['#D7D2CC', '#304352'],
        title: '흐림',
        subtitle: '날씨가 왜이래',
        icon: 'ios-cloud'
    }
}

function Weather({weatherName, temperature}) {
    return (
        <LinearGradient 
            colors={weatherCases[weatherName].colors} 
            style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color='white' size={144} name={weatherCases[weatherName].icon} />
                <Text style={styles.temperature}>{temperature} ℃</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    upper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    temperature: {
        fontSize: 45,
        backgroundColor: 'transparent',
        color: 'white',
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25
    },
    title: {
        fontSize: 35,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 10,
        fontWeight: '300'
    },
    subtitle: {
        fontSize: 25,
        backgroundColor: 'transparent',
        color: 'white',
        marginBottom: 24
    }
})

export default Weather;
