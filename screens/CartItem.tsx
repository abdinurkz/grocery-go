import React, { useState, useEffect } from 'react'
import {View, StyleSheet, Text, Dimensions, Animated, Image, TouchableOpacity} from 'react-native';
import { host } from '../api/config'
import Swipeable from 'react-native-gesture-handler/Swipeable';


const SCREEN_WIDTH = Dimensions.get('window').width;


const CartItem = ({ name, image, price, quantity, onChange, handleDelete }) => {

    const leftSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <TouchableOpacity onPress={handleDelete} activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                    <Animated.Text style={{transform: [{ scale: scale }]}}>
                        ❌
                    </Animated.Text>
                </View>
            </TouchableOpacity>
        );
    };

    const [count, setCount] = useState(0)
    const [state, setState] = useState(0)
    useEffect(() => {
        setCount(quantity)
        setState(price)
    }, [])


    return (
        <Swipeable renderLeftActions={leftSwipe}>
            <View style={styles.item}>
                <Image source={{ uri: `${host + image}` }} resizeMode={'cover'} style={styles.product_image}/>
                <View style={styles.product_info}>
                    <Text style={styles.product_name}>
                        { name }
                    </Text>
                    <Text>
                        { `₸ ` + price }
                    </Text>
                </View>
                <View style={styles.product_count}>
                    <TouchableOpacity style={styles.buttonLeft} onPress={() => setCount(count - 1)}>
                        <Text style={styles.buttonText}>-</Text>
                    </TouchableOpacity>
                    <Text>
                        { count }
                    </Text>
                    <TouchableOpacity style={styles.buttonRight} onPress={() => setCount(count + 1)}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </Swipeable>
    )
}

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
    },
    product_image: {
        aspectRatio: 1,
        alignSelf: 'center',
        height: '100%',
        width:'100%',
        borderRadius: 12,
        flex: 0.2,
    },
    product_info: {
        flex: 0.5,
        marginLeft: 15,
        justifyContent: 'space-between',
    },
    product_name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    product_multiply: {
        flex: 0.2,
        alignSelf: 'center'
    },
    product_count: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: 'blue'
    },
    view: {
      flex: 1,
      padding: 20,
    },
    buttonLeft: {
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    buttonRight: {
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: 10,
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5
    },
    buttonText: {
        color: '#fff',
    },
    deleteBox: {
        // backgroundColor: 'blue',
        borderRadius: 12,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 80,
    },
});

export default CartItem
