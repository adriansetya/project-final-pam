import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, ImageBackground, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Menu3 = ({navigation:{}}) => {
    return (
        <ScrollView>
            <ScrollView horizontal= {true} >
                <ImageBackground source={require('../src/background/satu.jpg')} style={Styles.slide} imageStyle={{borderRadius: 35}}>
                    <Text style={Styles.titik}>...</Text>
                    <View style={Styles.kotakslide}>
                        <Text style={Styles.teksatuslide}>The Dark Side</Text>
                        <View style={Styles.dalam}>
                                <Text style={Styles.tekduaslide}>Muse-Simulation Theory</Text>
                            <Image source={require('../src/iconnavigation/play-button.png')} style={Styles.gambarslide}/>
                        </View>
                    </View>
                </ImageBackground>

                <ImageBackground source={require('../src/background/satu.jpg')} style={Styles.slide} imageStyle={{borderRadius: 35}}>
                    <Text style={Styles.titik}>...</Text>
                    <View style={Styles.kotakslide}>
                        <Text style={Styles.teksatuslide}>The Dark Side</Text>
                        <View style={Styles.dalam}>
                                <Text style={Styles.tekduaslide}>Muse-Simulation Theory</Text>
                            <Image source={require('../src/iconnavigation/play-button.png')} style={Styles.gambarslide}/>
                        </View>
                    </View>
                </ImageBackground>

                <ImageBackground source={require('../src/background/satu.jpg')} style={Styles.slide} imageStyle={{borderRadius: 35}}>
                    <Text style={Styles.titik}>...</Text>
                    <View style={Styles.kotakslide}>
                        <Text style={Styles.teksatuslide}>The Dark Side</Text>
                        <View style={Styles.dalam}>
                                <Text style={Styles.tekduaslide}>Muse-Simulation Theory</Text>
                            <Image source={require('../src/iconnavigation/play-button.png')} style={Styles.gambarslide}/>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>

            <ScrollView horizontal= {true}>
                <TouchableOpacity onPress={() => {}} style = {Styles.tombol}>
                    <Text style = {Styles.tekstombol}>Trending Right Now</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style = {Styles.tombol}>
                    <Text style = {Styles.tekstombol}>   Pop   </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style = {Styles.tombol}>
                    <Text style = {Styles.tekstombol}>  Rock  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style = {Styles.tombol}>
                    <Text style = {Styles.tekstombol}>  Hip Hop  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style = {Styles.tombol}>
                    <Text style = {Styles.tekstombol}>  Electro  </Text>
                </TouchableOpacity>
            </ScrollView>

            <ScrollView>
                <View style={Styles.lismusik}>
                    <Image source={require('../src/background/satu.jpg')} style={Styles.gambarlis}/>
                    <View style={Styles.dalamtekslis}>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian $ Adrian</Text>
                    </View>
                    <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                </View>

                <View style={Styles.lismusik}>
                    <Image source={require('../src/background/satu.jpg')} style={Styles.gambarlis}/>
                    <View style={Styles.dalamtekslis}>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian $ Adrian</Text>
                    </View>
                    <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                </View>

                <View style={Styles.lismusik}>
                    <Image source={require('../src/background/satu.jpg')} style={Styles.gambarlis}/>
                    <View style={Styles.dalamtekslis}>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian $ Adrian</Text>
                    </View>
                    <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                </View>

                <View style={Styles.lismusik}>
                    <Image source={require('../src/background/satu.jpg')} style={Styles.gambarlis}/>
                    <View style={Styles.dalamtekslis}>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian $ Adrian</Text>
                    </View>
                    <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                </View>

                <View style={Styles.lismusik}>
                    <Image source={require('../src/background/satu.jpg')} style={Styles.gambarlis}/>
                    <View style={Styles.dalamtekslis}>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian $ Adrian</Text>
                    </View>
                    <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                </View>

                <View style={Styles.lismusik}>
                    <Image source={require('../src/background/satu.jpg')} style={Styles.gambarlis}/>
                    <View style={Styles.dalamtekslis}>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian $ Adrian</Text>
                    </View>
                    <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                </View>

                <View style={Styles.lismusik}>
                    <Image source={require('../src/background/satu.jpg')} style={Styles.gambarlis}/>
                    <View style={Styles.dalamtekslis}>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian $ Adrian</Text>
                    </View>
                    <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                </View>

                <View style={Styles.lismusikdua}>
                    <Image source={require('../src/background/satu.jpg')} style={Styles.gambarlis}/>
                    <View style={Styles.dalamtekslis}>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian $ Adrian</Text>
                    </View>
                    <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                </View>
                <Text>.</Text>
            </ScrollView>

        </ScrollView>
    );
};

export default Menu3;

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc'
    },
    slide: {
        height: 220,
        width: 270,
        margin: 8,
        alignItems: 'center'
    },
    titik: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        marginLeft: 160,
        marginTop: 10
    },
    kotakslide: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 230,
        height: 80,
        borderRadius: 20,
        backgroundColor: '#2d2e37',
        opacity: 0.8,
        marginTop: 70
    },
    teksatuslide: {
        color: '#fcfcff',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: -101,
        marginTop: 10
    },
    dalam: {
        flexDirection: "row"
    },
    tekduaslide: {
        color: '#fcfcff',
        fontSize: 11,
        marginRight: 18,
        marginTop: 2
    },
    gambarslide: {
        width: 48,
        height: 48,
        marginTop: -25,
        tintColor: '#fcfcff'
    },
    tombol: {
        height: 40,
        alignItems: 'center',
        backgroundColor: 'black', 
        padding: 10,
        borderRadius: 10,
        marginRight: -2,
        marginLeft: 10,
        marginTop: 10
    },
    tekstombol: {
        color: '#fcfcff'
    },
    lismusik: {
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 29,
    },
    lismusikdua: {
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 29,
        marginBottom: 100
    },
    gambarlis: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    dalamtekslis: {
        marginLeft: 18,
        marginTop: 15
    },
    tekslis: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700',
    },
    tekslisdua: {
        color: 'black',
        fontSize: 13,
    },
    gambarlisdua: {
        width: 28,
        height: 28,
        tintColor: 'black',
        marginLeft: 110,
        marginTop: 20
    }
    
});