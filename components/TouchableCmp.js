import React from 'react'
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native'

const TouchableCmp = (props) => {
    let MyTouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 22){
        MyTouchableCmp = TouchableNativeFeedback
    }
    return(
        <MyTouchableCmp {...props}>
            {props.children}
        </MyTouchableCmp>
    )
}

export default TouchableCmp