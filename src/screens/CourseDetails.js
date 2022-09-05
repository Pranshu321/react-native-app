import { StyleSheet, Text, View , Image , TouchableOpacity , Alert } from 'react-native'
import React from 'react'
import Courses from '../api/CourseApi';

const CourseDetails = ({navigation , route}) => {
  const id = route.params.courseId;
//   console.log(id);

 const selectedCourse = Courses.find((element)=>{
    return id==element.id;
 })

  return (
    <View style={styles.mainContainer}>
    <View style={styles.courseContainer}>
      <View>
       <Image style={styles.img} source={{uri : selectedCourse.image}} resizeMode='contain' />
      </View>
      <Text style={styles.mainHeader}> {selectedCourse.title} </Text>
      {/* <Text style={styles.desp}> {selectedCourse.description} </Text> */}
      <Text style={styles.desp}> {selectedCourse.course1} </Text>
      <Text style={styles.desp}> {selectedCourse.course2} </Text>
      <Text style={styles.desp}> {selectedCourse.course3} </Text>
      <View style={styles.buttonContainer}>
      <Text style={styles.price}> {selectedCourse.price}/-</Text>
        <TouchableOpacity style={styles.ButtonStyle}
        onPress={()=> navigation.navigate('Course' , Alert.alert(`${selectedCourse.title} Course Successfully Joined  :)`))}
        >
         <Text style={styles.buttonText} > Join Now </Text>
        </TouchableOpacity>
      </View>
    </View>
   </View>
  )
}

export default CourseDetails

const styles = StyleSheet.create({
    img:{
      width: "100%",
      height: undefined,
      aspectRatio: 1,
      borderRadius: 8,
      marginBottom: 25
    },
    mainContainer:{
      paddingHorizontal: 20,
    },
    courseContainer:{
      padding: 30,
      backgroundColor: "rgba(255,255,255,0.90)",
      textAlign: 'center',
      borderRadius: 8,
      shadowColor: "grey",
      shadowOffset: {width: 0 , height: 0},
      shadowOpacity: 0.6,
      shadowRadius: 10,
      elevation: 10,
      marginVertical: 30
    },
    mainHeader: {
      fontSize: 22,
      color: "#344055",
      textTransform: "uppercase",
      fontWeight: "700",
      paddingTop: 8,
      paddingBottom: 15,
      textAlign: "center"
    },
    desp:{
      fontFamily: "Poppins_600SemiBold_Italic",
      textAlign: "left",
      lineHeight: 20,
      paddingBottom: 15,
      fontSize: 13,
      color: "#7d7d7d"
    },
    ButtonStyle:{
      backgroundColor: "#809fff",
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 20,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    buttonText:{
      fontSize: 18,
      color: "white",
      fontWeight: "600"
    },
    price:{
        fontSize: 25,
        marginVertical: 15,
        color: "purple",
        textAlign: "center",
        fontWeight: "600"
    }
})