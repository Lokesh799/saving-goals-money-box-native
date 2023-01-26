import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Touchable = (text = 'Goal currency', onPress, selected, item) => {
  const TouchableComponent = () => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.touchableContainer}>
        <Text style={styles.touchableText}>{selected === null ? text: selected?.[item]}</Text>
        {/* <Icon name="chevron-right" color="#555" size={26} /> */}
        <Text style={{fontSize: 20}}>➤</Text>
      </TouchableOpacity>
    );
  };
  return {TouchableComponent};
};

const Option = (item, selected, onPress) => {
  const OptionComponent = () => {
    return (
      <TouchableOpacity style={styles.touchableContainer} onPress={onPress}>
        <Text
          style={[
            styles.optionText,
            {fontWeight: selected?.code === item?.code ? 'bold' : 'normal'},
          ]}>
          {item?.symbol}
        </Text>
        <Text
          style={[
            styles.optionText,
            {fontWeight: selected?.code === item?.code ? 'bold' : 'normal'},
          ]}>
          {item?.name}
        </Text>
        {selected?.code === item?.code ? (
          // <Icon name="check" color="green" size={18} />
          <Text style={{color: 'green'}}>✔</Text>
        ) : null}
      </TouchableOpacity>
    );
  };
  return {OptionComponent};
};

const Select = ({
  touchableComponent = Touchable,
  optionComponent = Option,
  touchableText = '',
  title = '',
  data,
  objValue,
}) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const {TouchableComponent} = touchableComponent(touchableText, () =>
    setVisible(true), selected, objValue
  );
  function renderOptions(item) {
    const {OptionComponent} = optionComponent(item, selected, () =>
      toggleSelect(item),
    );
    return <OptionComponent />;
  }

  function toggleSelect(item) {
    if (item?.code === selected?.code) {
      setSelected(null);
    } else {
      setSelected(item);
      setVisible(false);
    }
  }
  return (
    <>
      <TouchableComponent />
      <Modal visible={visible} animationType="slide">
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={() => setVisible(false)}>
              {/* <Icon name="close" size={26} color={'#212121'} /> */}
              <Text style={{color: 'white', fontSize: 15, paddingTop: 12}}>❌</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            renderItem={({item}) => renderOptions(item)}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    borderBottomColor: '#eee',
    borderBottomWidth: 3,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingBottom: 20,
    paddingHorizontal: 12,
    backgroundColor: 'black'
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginLeft: -40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingTop: 15
  },
  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  touchableText: {
    color: '#212121',
    fontSize: 14,
    fontWeight: '600',
  },
  optionText: {
    color: '#212121',
    fontSize: 14,
  },
});

export default Select;
