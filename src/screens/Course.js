import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Courses from '../api/CourseApi'

const Course = ({navigation}) => {
  
  const CourseCard = (ele)=>{
    return(
      <View style={styles.mainContainer}>
       <View style={styles.courseContainer}>
         <View>
          <Image style={styles.img} source={{uri : ele.image}} resizeMode='contain' />
         </View>
         <Text style={styles.mainHeader}> {ele.title} </Text>
         <Text style={styles.desp}> {ele.description} </Text>
         <View style={styles.buttonContainer}>
           <TouchableOpacity style={styles.ButtonStyle}
           onPress={()=> navigation.navigate('CourseDetails' , {
            courseId: ele.id,
           })}
           >
            <Text style={styles.buttonText}> Course Details</Text>
           </TouchableOpacity>
         </View>
       </View>
      </View>
    )
  }

  return (
    <View>
      <FlatList keyExtractor={(item)=>item.id} data={Courses} renderItem={({item})=>CourseCard(item)} />
    </View>
  )
}

export default Course

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
  }
})