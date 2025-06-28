import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import CalculadoraScreen from "../screens/CalculadoraScreen";
import IMCScreen from "../screens/IMCScreen";
import { NavigationContainer } from "@react-navigation/native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import FormularioScreen from "../screens/FormularioScreen";
import RegistroScreen from "../screens/RegistroScreen";
import DireccionScreen from "../screens/DireccionScreen";
import SatisfaccionScreen from "../screens/SatisfaccionScreen";
import ListaEjercicioScreen from '../screens/listas/ListaEjercicioScreen';

const Stack = createStackNavigator()

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Tabs" component={MyTabs}/>
        </Stack.Navigator>

    )
}

const Tab = createBottomTabNavigator()

function MyTabs(){
    return (
        <Tab.Navigator initialRouteName="Formulario"
        screenOptions={{headerShown: false}}>
            <Tab.Screen name ="Calculadora" 
            component={CalculadoraScreen} 
            options={{tabBarIcon: () =>(<FontAwesome6 name="calculator" size={24} color="black" />)}}/>

            <Tab.Screen name ="IMC"
            component={IMCScreen}
            options={{tabBarIcon: () =>(<AntDesign name="meho" size={24} color="black" />)}}/>

            <Tab.Screen name ="Formulario" 
            component={FormularioScreen}/>







            <Tab.Screen name = "Registro" 
            component={RegistroScreen}/>

            <Tab.Screen name = "Direccion" 
            component={DireccionScreen}/>

            <Tab.Screen name = "Satisfaccion" 
            component={SatisfaccionScreen}/>

            <Tab.Screen name="Peliculas" component={ListaEjercicioScreen} />


        </Tab.Navigator>
    )
    
}

export default function NavegadorPrincipal(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}