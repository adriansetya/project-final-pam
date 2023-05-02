import React from "react";
import { View, Text, TextInput, StyleSheet, Alert, Image, TouchableOpacity, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";


const Menu1 = ({navigation:{}}) => {
    return (
        <ScrollView>
            <LinearGradient colors={['#35244A', '#0D1A36']} start={{x: 0, y: 0}} end={{x: 0.3, y: 0.2}} style={Styles.linearGradient}>
            {/* <ImageBackground source={require('../src/background/empat.jpg')} resizeMode="cover" style={Styles.background}> */}
                <TextInput
                    style={Styles.input}
                    placeholder="Cari..."
                />

                <Text style={Styles.teks}>Trending right now</Text>

                <ScrollView horizontal={true}>
                <View style={[Styles.card,Styles.carddua]}>
                    <ImageBackground source={require('../src/Music/juja-han-HU-uL54pfQI-unsplash.jpg')}resizeMode="cover" style={[Styles.card,Styles.carddua]} imageStyle={{borderRadius: 35}}>
                        <Text style={Styles.titik}>...</Text>
                        <View style={[Styles.cardtiga,Styles.cardempat]}>
                            <View>
                                            <Text style={Styles.tekscarddua}>The Dark Side</Text>
                                            <Text style={Styles.tekscardduadua}>Muse-Simulation Theory</Text>
                                            <Image source={require('../src/iconnavigation/play-button.png')} style={Styles.gambar}/>
                            </View>               
                        </View>
                    </ImageBackground>
                </View>

                <View style={[Styles.card,Styles.carddua]}>
                    <ImageBackground source={require('../src/background/satu.jpg')}resizeMode="cover" style={[Styles.card,Styles.carddua]} imageStyle={{borderRadius: 35}}>
                        <Text style={Styles.titik}>...</Text>
                        <View style={[Styles.cardtiga,Styles.cardempat]}>
                            <View>
                                            <Text style={Styles.tekscarddua}>The Dark Side</Text>
                                            <Text style={Styles.tekscardduadua}>Muse-Simulation Theory</Text>
                                            <Image source={require('../src/iconnavigation/play-button.png')} style={Styles.gambar}/>
                            </View>               
                        </View>
                    </ImageBackground>
                </View>

                <View style={[Styles.card,Styles.carddua]}>
                    <ImageBackground source={require('../src/background/satu.jpg')}resizeMode="cover" style={[Styles.card,Styles.carddua]} imageStyle={{borderRadius: 35}}>
                        <Text style={Styles.titik}>...</Text>
                        <View style={[Styles.cardtiga,Styles.cardempat]}>
                            <View>
                                            <Text style={Styles.tekscarddua}>The Dark Side</Text>
                                            <Text style={Styles.tekscardduadua}>Muse-Simulation Theory</Text>
                                            <Image source={require('../src/iconnavigation/play-button.png')} style={Styles.gambar}/>
                            </View>               
                        </View>
                    </ImageBackground>
                </View>
                </ScrollView>

                <ScrollView horizontal = {true}>
                    <TouchableOpacity onPress={() => {}} style = {Styles.button}>
                        <Text style = {Styles.teksbutton}>Trending Right Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style = {Styles.button}>
                        <Text style = {Styles.teksbutton}>   Pop   </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style = {Styles.button}>
                        <Text style = {Styles.teksbutton}>  Rock  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style = {Styles.button}>
                        <Text style = {Styles.teksbutton}>  Hip Hop  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {}} style = {Styles.button}>
                        <Text style = {Styles.teksbutton}>  Electro  </Text>
                    </TouchableOpacity>
                </ScrollView>

                <ScrollView>
                    <View style={Styles.lismusik}>
                        <Image source={require('../src/Music/power1.jpg')} style={Styles.gambarlis}/>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian & Adrian</Text>
                        <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                    </View>
                    <View style={Styles.lismusik}>
                        <Image source={require('../src/Music/power2.jpg')} style={Styles.gambarlis}/>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>GGhozian & Adrian</Text>
                        <Image source={require('../src//iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                    </View>
                    <View style={Styles.lismusik}>
                        <Image source={require('../src//Music/power3.jpg')} style={Styles.gambarlis}/>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian & Adrian</Text>
                        <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                    </View>
                    <View style={Styles.lismusik}>
                        <Image source={require('../src/Music/pexels-josh-sorenson-154147.jpg')} style={Styles.gambarlis}/>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian & Adrian</Text>
                        <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                    </View>
                    <View style={Styles.lismusik}>
                        <Image source={require('../src/Music/erik-mclean-9y1cTVKe1IY-unsplash.jpg')} style={Styles.gambarlis}/>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian & Adrian</Text>
                        <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                    </View>
                    <View style={Styles.lismusik}>
                        <Image source={require('../src/Music/juja-han-HU-uL54pfQI-unsplash.jpg')} style={Styles.gambarlis}/>
                        <Text style={Styles.tekslis}>The Dark Side</Text>
                        <Text style={Styles.tekslisdua}>Ghozian & Adrian</Text>
                        <Image source={require('../src/iconnavigation/heart.png')} style={Styles.gambarlisdua}/>
                    </View>
                </ScrollView>
            {/* </ImageBackground> */}
            </LinearGradient>
        </ScrollView>
    );
};

export default Menu1;

const Styles = StyleSheet.create({
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 210,
        borderRadius: 40,
        margin: 8,
        marginBottom: 10,
        marginLeft: 20,
    },
    carddua: {
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius:2,
        
    },
    cardtiga: {
        marginTop: 95,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 90,
        borderRadius: 25,
        margin: 8,
    },
    cardempat: { 
        opacity: 0.9,
        backgroundColor: '#2d2e37',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#c4c4c4',
        shadowOpacity: 0.4,
        shadowRadius:2
    },
    titik: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: -25,
        marginLeft: 180,
    },
    teks: {
        color: 'white',
        marginLeft: 20,
        marginBottom: -15,
        textAlign: 'left',
        fontSize: 35,
        fontWeight: '700',
        paddingBottom: 20,
        fontFamily: 'rubik',
    },
    tekscarddua: {
        color: '#fcfcff',
        marginTop: 10,
        marginLeft: 0,
        fontSize: 17,
        fontWeight: '700',
        paddingBottom: 20,
        fontFamily: 'rubik'
    },
    tekscardduadua: {
        color: '#fcfcff',
        marginTop: -18,
        marginLeft: 0,
        fontSize: 13,
        paddingBottom: 20,
        fontFamily: 'rubik'
    },
    gambar: {
        width: 40,
        height: 40,
        marginTop: -60,
        marginLeft: 170,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 100,  
        tintColor: '#fcfcff'      
    },
    lismusik: {
        borderWidth: 0,
        borderColor: 'black',
        marginTop: 30 
    },
    gambarlis: {
        width: 70,
        height: 70,
        marginLeft: 22,
        borderRadius: 10
    },
    gambarlisdua: {
        width: 30,
        height: 30,
        marginLeft: 340,
        marginTop: -40,
        marginBottom: 20,
        tintColor: 'white',
    },
    tekslis: {
        color: '#fcfcff',
        marginTop: -55,
        marginLeft: 115,
        fontSize: 18,
        fontWeight: '700',
    },
    tekslisdua: {
        color: '#fcfcff',
        marginTop: 0,
        marginLeft: 115,
        fontSize: 13,
    },
    linearGradient: {
        flex: 1,
        opacity: 1
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 40,
    },
    button: {
        height: 40,
        alignItems: 'center',
        backgroundColor: '#3a3bce', 
        padding: 10,
        borderRadius: 10,
        marginRight: -15,
        marginLeft: 20,
        marginTop: 20
    },
    teksbutton: {
        color: '#fcfcff'
    },
    input: {
        backgroundColor: '#c4c4c4',
        borderRadius: 10,
        height: 50,
        margin: 12,
        color: '#fcfcff',
        paddingLeft: 15
    }
    
});