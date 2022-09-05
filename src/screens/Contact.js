import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';

export default function Login({ navigation }) {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [agree, setagree] = useState(false);

  function submit() {
    if (username === "") {
      Alert.alert(`Please Enter Your Name`);
    }
    else if (phone === "") {
      Alert.alert(`Please Enter Your Phone Number`);
    }
    else if (message === "") {
      Alert.alert(`Please Describe Your Issue`);
    }
    else if (email === "") {
      Alert.alert(`Please Enter Email`);
    }
    else {
      Alert.alert(`${username} Your Response Successfully Recorded!!`);
      navigation.navigate("Home");
    }
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Contact Us</Text>
      <Text style={styles.description}>You can reach just , fill this form</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput value={username} onChangeText={(e) => {
          setusername(e)
        }} style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Email</Text>
        <TextInput value={email} onChangeText={(e) => {
          setemail(e)
        }} style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Phone</Text>
        <TextInput value={phone} onChangeText={(e) => {
          setphone(e)
        }} style={styles.inputStyle} autoCapitalize="none" autoCorrect={false} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>How We Can Help?</Text>
        <TextInput value={message} onChangeText={(e) => {
          setmessage(e)
        }} style={[styles.inputStyle, styles.inputMultiline]} autoCapitalize="none" multiline={true} numberOfLines={5} autoCorrect={false} placeholder={"Type Your Message"} />
      </View>
      <View style={styles.wrapper}>
        <Checkbox value={agree} onValueChange={() => {
          setagree(!agree);
        }} color={agree ? "#4630EB" : undefined} />
        <Text style={styles.wrapperText}>I have read and agreed with the Classic's Tutorials Conditions.</Text>
      </View>
      <TouchableOpacity style={[styles.buttonStyle, {
        backgroundColor: agree ? "#4630EB" : "grey"
      }]} disabled={!agree} onPress={submit} >
        <Text style={styles.buttonText}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    marginTop: 30,
    backgroundColor: '#fff'
  },
  mainHeader: {
    fontSize: 25,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 10,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 10,
    fontSize: 18
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 15,
    marginBottom: 30,
    alignContent: "center"

  },
  wrapperText: {
    paddingLeft: 20,
    marginTop: 0,
  },
  buttonStyle: {
    borderRadius: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'

  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: '600'
  },
});
