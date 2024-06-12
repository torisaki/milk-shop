import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const styles = StyleSheet.create({
    card: {
        borderWidth: 1,
        borderColor: 'lightgray',
        marginVertical: 5,
        marginHorizontal: 8,
        width: '45%',
        padding: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'center'
    },
    cardImage: {
        height: 120,
        width: '100%',
        marginBottom: 10
    },
    cartTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardDesc: {
        fontSize: 10,
        textAlign: 'left',
    },
    btnContainer: {
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#000000',
        height: 20,
        width: 75,
        borderRadius: 5,
        justifyContent: 'center'
    },
    btnCart: {
        backgroundColor: 'orange',
        height: 20,
        width: 75,
        borderRadius: 5,
        justifyContent: 'center'
    },
    btnText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: 'bold'
    }
})

const ProductCard = ({ p }) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleDetailsPress = (id) => {
    navigation.navigate('pDetails', { _id: id });
  };
  const handleAddToCart = () => {
    console.log('first')
  }
  return (
    <View>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: p?.imageUrl }} />
        <Text style={styles.cartTitle}>{p?.name}</Text>
        <Text style={styles.cardDesc}>{p?.description.substring(0, 30)} ...thêm</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={() => handleDetailsPress(p._id)} >
            <Text style={styles.btnText}>Chi tiết</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart} >
            <Text style={styles.btnText}>Thêm vào giỏ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;
