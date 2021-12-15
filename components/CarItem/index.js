import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'

export default function CarItem(props) {

const {name, tagLine, tagLineCTA, image} = props.car;

    return (
        <View style={styles.carContainer} >
            <ImageBackground
                source={image}
                style={styles.image}

            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagLine}
                    <Text style={styles.subtitleCTA}>
                        {tagLineCTA}
                    </Text>
                    </Text>
            </View>


            <View style={styles.buttonsContainer}>
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
    </View>
    )
}


