import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import User_Data from './src/screens/User_Data';
import Course from './src/screens/Course';
import CourseDetails from './src/screens/CourseDetails';
import AppLoading from 'expo-app-loading';
import { 
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic ,
  useFonts
} from '@expo-google-fonts/poppins'

export default function App() {
  let [fontloaded] = useFonts({
    Poppins_600SemiBold_Italic,
    Poppins_700Bold
  });

  if(!fontloaded){
    <AppLoading />
  }
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name='Home' options={{
      headerShown:false
    }}>
      {
        (props)=> <Home {...props} name={"Classic Tutorials"} />
      }
    </Stack.Screen>
    <Stack.Screen name='About' component={About} options={{
      headerTitleStyle:{
        fontSize: 25,
        fontFamily: "Poppins_600SemiBold_Italic"
      },
      headerTitle: "About",
      headerTitleAlign: "center"

    }} />
    <Stack.Screen name='Contact' component={Contact}  options={{
      headerTitleStyle:{
        fontSize: 25,
        fontFamily: "Poppins_600SemiBold_Italic"
      },
      headerTitle: "Contact",
      headerShown: false,
      headerTitleAlign: "center"

    }}/>
    <Stack.Screen name='Users' component={User_Data} options={{
      headerTitleStyle:{
        fontSize: 25,
        fontFamily: "Poppins_600SemiBold_Italic"
      },
      headerTitle: "Students",
      headerTitleAlign: "center"

    }} />
    <Stack.Screen name='Course' component={Course} options={{
      headerTitleStyle:{
        fontSize: 25,
        fontFamily: "Poppins_600SemiBold_Italic"
      },
      headerTitle: "Courses",
      headerTitleAlign: "center"

    }} />
    <Stack.Screen name='CourseDetails' component={CourseDetails} options={{
      headerTitleStyle:{
        fontSize: 25,
        fontFamily: "Poppins_600SemiBold_Italic"
      },
      headerTitle: "Course Info",
      headerTitleAlign: "center",
    }} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

