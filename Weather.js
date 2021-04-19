import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';

const Weather = ({temp}) => {
    return (
        <View style={styles.container}>
            <Text>
                {temp}
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
Weather.propTypes = {
    temp:PropTypes.number.isRequired
}

export default Weather;