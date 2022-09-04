import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import Menu from '../components/Menu'

const Home = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image 
        style={styles.headerImage}
        source={require('../../assets/logo.jpg')}
        resizeMode="contain"
      />
        <Text style={[styles.mainHeader,
        {
          fontSize: 33,
          color: "#4c5dab",
          marginTop: 0
        }
        ]}>Welcome to {props.name}</Text>
        <Text style={styles.parastyle}>Learning Starts Here !!! </Text>
        <Text style={[styles.parastyle , {textAlign: 'center' , marginTop: -13 , paddingBottom: 20}]}> Online education is a flexible instructional delivery system that encompasses any kind of learning that takes place via the Internet. </Text>
      </View>
      <View>
        <Menu />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  homeTop: {
    // height : " 100 % " ,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    marginVertical: 20,
    alignItems: "stretch",
    marginTop: 50,
    borderRadius: 12
  },
  mainHeader: {
    fontSize: 30,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "600",
    textAlign: "center"
  },
  parastyle:{
    textAlign: "left",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 30,
    lineHeight: 26
  }
});
