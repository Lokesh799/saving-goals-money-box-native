import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
const styles = StyleSheet.create({
    // title: {color: COLORS.white, fontWeight: 'bold', fontSize: 18},
   container: {
      display:"flex",
    padding:20,
    height:"100%",
    width:"100%",
    backgroundColor:"#EDEADE",
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    // borderWidth: 1,
    
    },
    boxStyle:{
      
        shadowColor:"red",
        justifyContent:"space-between",
        display:"flex",
        flexDirection:"row",
        // alignItems:"center",
        alignContent:"center"  ,
        // top:"3%", 
        marginTop:"10%"
        
    },
    boxContainer:{
// justifyContent:"center",
display:"flex",
flexDirection:"column",
width:"100%",
backgroundColor:"#fff",
height:200,
// margin:"20%",
// top:"10%",
borderRadius:5,
top:"5%",

    },
    button:{
        flexDirection:"column",
// width:"100%",
width:300,
display:"flex",
justifyContent:"center",
marginHorizontal:30,
// alignItems:'center',
marginTop:"20%",
borderRadius:50,
textAlign:'centre',
backgroundColor:'#87CEEB',
alignItems:"center",
paddingVertical:5,




    },
    createGoalsContainer:{
        display:"flex",
flexDirection:"column",
width:"100%",
// backgroundColor:"#fff",
height:200,
// margin:"20%",
// top:"10%",
borderRadius:5,
top:"5%",
borderWidth:1,
borderStyle: 'dashed',
borderRadius: 1,
// borderColor:"#EDEADE"


    }
  });

  export default styles;