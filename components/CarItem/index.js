import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'

export default function CarItem() {
    return (
        <View style={styles.carContainer}>
        <ImageBackground
            source={require('../../assets/images/ModelX.jpeg')}
            style={styles.image}

        />
        <View style={styles.titles}>
            <Text style={styles.title}>Model X</Text>
            <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <StyledButton 
            type='primary' 
            text="Custom Order"
            onPress={()=>{
                console.warn('Custom Order')
            }}/>


        <StyledButton 
            type='secondary' 
            text="existing inventory"
            onPress={()=>{
                console.warn('Existing Inventory')
            }}/>
    </View>
    )
}


