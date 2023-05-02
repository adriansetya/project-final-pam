import React from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import NavigationContainer from "@react-navigation/native";

const Menu5 = ({navigation:{}}) => {
    return (
        <View style={Styles.container}>
            <Text>Menu4</Text>
            <Button
            title="Klik Disini"
            onPress={() =>  Alert.alert('Masih dalam pengembangan')}
            />
        </View>
    );
};

export default Menu5;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    }
});