import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        console.log(searchText)
        setSearchText('')
    }
  return (
    <View style={{height: 90, backgroundColor: 'lightgray'}}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch} >
          <FontAwesome name="search" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  inputBox:{
    borderWidth: 0.3,
    width: '100%',
    position: 'absolute',
    left: 10,
    height: 40,
    color: '#000000',
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    fontSize: 16,
    borderRadius: 5
  },
  searchBtn:{
    position: 'absolute',
    left: '95%'
  },
  icon:{
    color: '#000000',
    fontSize: 18
  }
});

export default Header;
