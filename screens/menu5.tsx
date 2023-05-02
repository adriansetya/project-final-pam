import React, {useState} from 'react';
import { View, Text, Switch, StyleSheet, Alert, ScrollView, Image } from "react-native";

const Menu5 = ({navigation:{}}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView style={Styles.container}>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

            <View style={Styles.bungkusimage}>
                <Image source={require('../src/user/userblack.png')} style={Styles.image}/>
                <Image source={require('../src/user/penbackoren.png')} style={Styles.imagedua}/>
                <Text style={Styles.teksimage}>Agan Ganteng Pool</Text>
                <Text style={Styles.nomorimage}>989032726001</Text>
            </View>

            <View style={Styles.bungkusinfo}>
                <View style={Styles.info}>
                    <Image source={require('../src/user/memberblack.png')} style={Styles.infoimage}/>
                    <Text style={Styles.infoteks}>My Membership</Text>
                </View>

                <View style={Styles.info}>
                    <Image source={require('../src/user/memberblack.png')} style={Styles.infoimage}/>
                    <Text style={Styles.infoteks}>Contact Us</Text>
                </View>

                <View style={Styles.info}>
                    <Image source={require('../src/user/memberblack.png')} style={Styles.infoimage}/>
                    <Text style={Styles.infoteks}>PrivacyPolicy</Text>
                </View>

                <View style={Styles.info}>
                    <Image source={require('../src/user/memberblack.png')} style={Styles.infoimage}/>
                    <Text style={Styles.infoteks}>Term And Conditions</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default Menu5;

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFFFF"
    },
    bungkusimage : {
        alignItems: "center",
        paddingTop: 15,
        paddingBottom: 30,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: "black",
    },
    imagedua: {
        width: 55,
        height: 55,
        borderRadius: 27.5,
        borderWidth: 4,
        borderColor: "#fcfcff",
        marginTop: -30,
    },
    teksimage: {
        fontSize: 25,
        color: "#0D1A36",
        fontWeight: "700",
    },
    nomorimage: {
        fontSize: 18,
        color: "#C1C1C8",
        fontWeight: "900",
        marginTop: 5
    },
    bungkusinfo: {
        justifyContent: "flex-end",
        marginTop: 20,
        marginLeft: 25,
        marginRight: 25,
    },
    info: {
        borderBottomWidth: 1,
        borderBottomColor: "#C1C1C8",
        flexDirection: "row",
        marginBottom: 24
    },
    infoimage: {
        width: 30,
        height: 30,
        marginBottom: 10
    },
    infoteks: {
        fontSize: 15,
        color: "#444954",
        fontWeight: "700",
        marginLeft: 20,
        paddingTop: 4
    },
});