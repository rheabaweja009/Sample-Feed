import React from 'react'
import { Text, StyleSheet, View, ShadowPropTypesIOS } from 'react-native'
import Posthead from './Posthead'
import Postbody from './Postbody'
import Postbar from './Postbar'

const Post = (props) => {
    return (
        <View style={styles.post}>
            <View style={styles.inpost}>
                <Posthead title={props.title}/>
                <Postbody content={props.content} />
                <Postbar likes={props.likes}/>
            </View>
        </View>
    )
}
export default Post

const styles = StyleSheet.create({
    post: {
        backgroundColor: "lightblue",
        marginBottom: 10,
        height: 400,
        padding: 16,

    },
    inpost: {
        borderRadius: 70
    }

  });