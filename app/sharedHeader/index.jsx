import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useRef} from 'react';
import {useEffect} from 'react';
import {useState} from 'react';

const SharedHeader = ({
  title,
  iconRight,
  iconLeft,
  navigationRight,
  navigationLeft,
  submitHandler,
  isTitle,
}) => {
  const navigation = useNavigation();
  const [pretitle, setPreTitle] = useState(isTitle);

  const prevCount = usePrevious(pretitle);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  const onPressRightButton = () => {
    if (title === 'Add Contribution') {
      submitHandler();
    } else if (title === 'Add Goals') {
      submitHandler();
    } else {
      navigation.navigate(navigationRight, {
        isTitle: isTitle ? isTitle : prevCount,
      });
    }
  };
  return (
    <View style={[styles.container, {overflow: 'hidden', zIndex: 1}]}>
      <AntDesign
        name={iconLeft}
        size={30}
        style={styles.back}
        onPress={() => navigation.navigate(navigationLeft, {isTitle: isTitle})}
      />
      <View style={styles.view1}>
        <Text style={styles.headertxt}> {title} </Text>
      </View>

      <View style={styles.view2}>
        <TouchableOpacity>
          <AntDesign
            name={iconRight}
            size={30}
            style={styles.plusbtn}
            onPress={onPressRightButton}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#454545',
    flexDirection: 'row',
    textAlign: 'center',
    height: 80,
    borderRadius: 5,
  },
  view1: {
    width: 250,
  },
  view2: {
    textAlign: 'right',
    width: 170,
  },
  headertxt: {
    color: 'white',
    fontSize: 25,
    paddingTop: 20,
    textAlign: 'right',
    fontFamily: 'Serif',
    marginRight: 20,
  },
  plusbtn: {
    color: 'white',
    fontSize: 32,
    paddingRight: 15,
    textAlign: 'right',
    marginRight: 50,
    paddingTop: 20,
  },
  back: {
    color: 'white',
    fontSize: 32,
    paddingLeft: 10,
    marginBottom: 30,
    paddingTop: 20,
  },
});
export default SharedHeader;
