import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 10,
    height: 1000,
    width: '100%',
    backgroundColor: '#EDEADE',

  },
  boxStyle: {
    shadowColor: 'red',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    // alignItems:"center",
    alignContent: 'center',
    // top:"3%",
    marginTop: '10%',
  },
  boxContainer: {
    // justifyContent:"center",
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#fff',
    height: 220,
    // margin:"20%",
    // top:"10%",
    borderRadius: 5,
    top: '2%',
  
  },
  button: {
    flexDirection: 'column',
    // width:"100%",
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: 50,
    // alignItems:'center',
    marginTop: '15%',
    borderRadius: 50,
    textAlign: 'centre',
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    paddingVertical: 5,
    marginBottom:50,
    cursor: 'pointer'
  },
  createGoalsContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    // backgroundColor:"#fff",
    height: 200,
    // margin:"20%",
    // top:"10%",
    borderRadius: 5,
    top: '5%',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 1,
    // borderColor:"#EDEADE"
  },
  GoalsDataView:{
    flexDirection: 'row'
  },
  GoalsDataText:{
    paddingLeft:150,
    fontWeight: 'bold'
  },
  SavingMeet:{
    paddingLeft:100,
    fontWeight: 'bold',
    marginTop:20
  },
  YetPlanned:{
    paddingLeft:140,
    marginTop:10,
    fontWeight:"italics"
  },
  inputBox:{
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderColor:"grey"
  }
});
export default styles;