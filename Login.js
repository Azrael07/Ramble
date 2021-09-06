import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { /*SafeAreaView,*/ StyleSheet, Text, View, TextInput, Pressable, } from 'react-native';


function Login() {
  //Const Username and Password Authentication Here, Needs optimization
  const [text, setusername] = React.useState("TextField");
  const [number, setpassword] = React.useState(null);
  //const [buttonPresses, setButtonPresses] = useState(0);
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ramble</Text>
      <StatusBar style="auto" />
      
      <View style={styles.bokkso}>

      <Text style={styles.title}>Login</Text>
     
     
      <TextInput
        style={styles.input}
        setusername={setusername}
        
        placeholder="username"
        
      />
      <TextInput
        style={styles.input}
        setpassword={setpassword}
        placeholder="password"
        
      />
      {/* Button */}
      <Pressable style={styles.buttonDesign}>
       <Text> Login</Text>
      </Pressable>
    
      </View>

    </View>
    
    
  );
}
export default Login;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#d77aff',
    textAlign: 'auto',
    alignItems: "center",
  },

  title:  {

      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop:70,
      paddingBottom:30,
  },

  bokkso:
  {
    borderRadius: 20,
    width: 300, 
    height: 500,
    backgroundColor: '#b44ce0',
    justifyContent: 'center', 
  
  },

  input: {
    borderRadius: 100,
    backgroundColor: "#e29eff",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  buttonDesign:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 50,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: 'white',
    

  },

});