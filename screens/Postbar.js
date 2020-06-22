import React from 'react'
import {Text,View} from 'react-native'
import styles from '../styles/Styles'

const Postbar = (props) => {
    return (
        <View style={styles.postbar}>
            <Text>
                {props.likes} likes
            </Text>
        </View>
    )
}
export default Postbar