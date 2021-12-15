import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import cars from './cars.js'
import CarItem from '../CarItem'


export default function CarsList(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item})=> <CarItem car={item}/> }
                keyExtractor={(item, index)=>index.toString()}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}
