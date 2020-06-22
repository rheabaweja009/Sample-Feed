import React from 'react'
import {Text, View} from 'react-native'
import styles from '../styles/Styles'


const Posthead = (props) => {
    return (
        <View style={styles.posthead}>
            <Text style={styles.postheadtext}>
                {props.title}
            </Text>
        </View>
    )
}
export default Posthead