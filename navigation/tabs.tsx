import { BottomTabBar, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { BlurEffectTypes } from "react-native-screens";
import menu1 from "../screens/menu1";
import menu2 from "../screens/menu2";
import menu3 from "../screens/menu3";
import menu4 from "../screens/menu4";
import menu5 from "../screens/menu5";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -45,
            justifyContent: 'center',
            alignItems: 'center',
            ...styles.shadow
        }}
        onPress={onPress}
    >
        <View style={{
            width: 65,
            height: 65,
            borderRadius: 35,
            backgroundColor: '#e32f45',
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#e32f45',
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#c4c4c4',
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                borderRadius: 15,
                height: 90,
    },
    
  }}
        >
            <Tab.Screen name="menu1" component={menu1} options={{
                tabBarIcon: ({}) => (
                    <View>
                        <Image source={require('../src/iconnavigation/hometiga.png')}
                        style={{
                            width: 25,
                            height: 25,
                        }}/>
                    </View>
                ),

            }}/>
            <Tab.Screen name="menu2" component={menu2} options={{
                tabBarIcon: ({}) => (
                    <View>
                        <Image source={require('../src/iconnavigation/search.png')}
                        style={{
                            width: 25,
                            height: 25,
                        }}/>
                    </View>
                ),
            }}/>
            <Tab.Screen name="menu3" component={menu3} options={{
                tabBarIcon: ({}) => (
                    <View>
                        <Image source={require('../src/iconnavigation/plus.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#fff'
                        }}/>
                    </View>
                ),
                tabBarButton: (props) => 
                    <CustomTabBarButton {...props}/>
            }}/>
            <Tab.Screen name="menu4" component={menu4} options={{
                tabBarIcon: ({}) => (
                    <View>
                        <Image source={require('../src/iconnavigation/music.png')}
                        style={{
                            width: 25,
                            height: 25
                        }}/>
                    </View>
                ),
            }}/>
            <Tab.Screen name="menu5" component={menu5} options={{
                tabBarIcon: ({}) => (
                    <View>
                        <Image source={require('../src/iconnavigation/user.png')}
                        style={{
                            width: 25,
                            height: 25
                        }}/>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
        
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 1,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 3.5,
        elevation: 5
    }
})



export default Tabs;