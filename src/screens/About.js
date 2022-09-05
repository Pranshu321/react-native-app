import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.aboutStyle}>
      <Text style={styles.mainHeader}> Pranshu Jain</Text>
      <Text style={styles.paraStyle}> I am a Full-Queue Developer ♥</Text>

      <View>
        <Image
          style={styles.imgStyle}
          source={{ uri: "https://media-exp1.licdn.com/dms/image/D4D35AQEGq5eN_waM9Q/profile-framedphoto-shrink_400_400/0/1651595030715?e=1662962400&v=beta&t=-4cOcp1AGUQHlQaCvuLteiMzBjeqRkWYSOERhMAS1dM" }}
        />
      </View>
      <View style={styles.aboutbottom}>
        <Text style={styles.aboutsubheader}> About me</Text>
        <Text style={styles.paraStyle}>Heya Developers and Coders,
          On this side, Pranshu Jain is a full-Stack developer with an experience of 1yr+. I have great knowledge in web 🕸.</Text>
      </View>
      <Text style={styles.mainHeader}> Follow me on Social Network</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://www.instagram.com/pranshu_x_jain/")}
        >
          <Image
            style={styles.iconStyle}
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" }}

          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://www.linkedin.com/in/pranshu-jain-0742b1209/")}
        >
          <Image
            style={styles.iconStyle}
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png" }}

          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://github.com/Pranshu321")}
        >
          <Image
            style={styles.iconStyle}
            source={{ uri: "https://cdn-icons-png.flaticon.com/128/1051/1051326.png" }}

          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  aboutStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  mainHeader: {
    fontSize: 22,
    color: "purple",
    fontWeight: "600",
    marginTop: 50,
    marginBottom: 10,
    lineHeight: 30,
    textTransform: "uppercase"
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutbottom: {
    backgroundColor: "black",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutsubheader: {
    fontSize: 19,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    alignSelf: "center"

  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
    , marginTop: 20
  },
  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1
  }

});