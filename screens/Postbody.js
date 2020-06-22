import React from 'react'
import {Text, View} from 'react-native'
import styles from '../styles/Styles'

const Postbody = (props) => {
    return (
        <View style={styles.postbody}>
            <Text>
                {props.content}
            </Text>
        </View>
    )
}
export default Postbody