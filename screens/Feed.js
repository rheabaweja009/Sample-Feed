import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import Post from './Post'



const Feed = () => {
    return (
        <ScrollView>
           <Post title="Labour Day is here" content="Labour Day is on the 6th of September." likes="80"/>
           <Post title="Birthdays" content="My birthday is on the 4th of December." likes="45"/>
           <Post title="Holidays" content="Holidays are nice" likes="35"/>
        </ScrollView>
        
    )

}
export default Feed