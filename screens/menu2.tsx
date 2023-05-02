import React from "react";
import { View, Text, Button, StyleSheet, Alert, Image, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

const Menu2 = ({navigation:{}}) => {
    return (
        <ScrollView>
            <View style={Styles.card}>
                <LinearGradient colors={['#35244A', '#0D1A36']} start={{x: 0, y: 0}} end={{x: 0.5, y: 0.2}} style={Styles.linearGradient}>
                </LinearGradient>
            </View>

            <View>
                <View style={Styles.lis}>
                    <View style={Styles.lisdua}>
                        <Image source={require('../src/background/satu.jpg')} style={Styles.lisgambar}/>
                        <Text style={Styles.listeks}>The Dark Side</Text>
                    </View>
                    <View style={Styles.lisdua}>
                        <Image source={require('../src/background/satu.jpg')} style={Styles.lisgambar}/>
                        <Text style={Styles.listeks}>The Dark Side</Text>
                    </View>
                </View>

                <View style={Styles.lis}>
                    <View style={Styles.lisdua}>
                        <Image source={require('../src/background/satu.jpg')} style={Styles.lisgambar}/>
                        <Text style={Styles.listeks}>The Dark Side</Text>
                    </View>
                    <View style={Styles.lisdua}>
                        <Image source={require('../src/background/satu.jpg')} style={Styles.lisgambar}/>
                        <Text style={Styles.listeks}>The Dark Side</Text>
                    </View>
                </View>

                <View style={Styles.lis}>
                    <View style={Styles.lisdua}>
                        <Image source={require('../src/background/satu.jpg')} style={Styles.lisgambar}/>
                        <Text style={Styles.listeks}>The Dark Side</Text>
                    </View>
                    <View style={Styles.lisdua}>
                        <Image source={require('../src/background/satu.jpg')} style={Styles.lisgambar}/>
                        <Text style={Styles.listeks}>The Dark Side</Text>
                    </View>
                </View>

                <View style={Styles.lis}>
                    <View style={Styles.lisdua}>
                        <Image source={require('../src/background/satu.jpg')} style={Styles.lisgambar}/>
                        <Text style={Styles.listeks}>The Dark Side</Text>
                    </View>
                    <View style={Styles.lisdua}>
                        <Image source={require('../src/background/satu.jpg')} style={Styles.lisgambar}/>
                        <Text style={Styles.listeks}>The Dark Side</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Menu2;

const Styles = StyleSheet.create({
    card: {
        alignItems: 'center'
    },
    linearGradient: {
        margin: 10,
        width: 380,
        height: 120,
        borderRadius: 18
    },
    lis: {
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 0,
        marginBottom: 10
    },
    lisdua: {
        margin: 8
    },
    lisgambar: {
        width: 170,
        height: 170,
        borderRadius: 25
    },
    listeks: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 4,
        marginLeft: 4
    }
    
    
});