import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Layout from "@/components/layout/Layout";
import { userData } from "@/data/userData";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  image: {
    height: 100,
    width: '100%',
    resizeMode: 'contain'
  },
  name: {
    marginTop: 10,
    fontSize: 20
  },
  btnContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    margin: 10,
    marginVertical: 10,
    elevation: 5,
    borderRadius: 10,
    paddingBottom: 30
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  btn:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 5
  },
  btnText: {
    fontSize: 15,
    marginRight: 10
  }
});

export default function Account({navigation}) {
  return (
    <Layout>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: userData.avatar}} />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>Chào {userData.name} 🙌 </Text>
            <Text>Email: {userData.email} </Text>
            <Text>Số điện thoại {userData.phone}</Text>
        </View>
        <View style={styles.btnContainer}>
            <Text style={styles.header}>Cài đặt tài khoản</Text>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Profile" as never, {id: userData._id})}>
                <MaterialCommunityIcons style={styles.btnText} name="pencil" />
                <Text style={styles.btnText}>Chỉnh sửa hồ sơ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Order" as never, {id: userData._id})}>
                <MaterialCommunityIcons style={styles.btnText} name="truck-delivery" />
                <Text style={styles.btnText}>Đơn của tôi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Notification" as never)}>
                <MaterialCommunityIcons style={styles.btnText} name="bell" />
                <Text style={styles.btnText}>Thông báo</Text>
            </TouchableOpacity>
            {/*cần check nếu là role admin thì hiện còn ngược lại thì không hiện */}
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Dashboard" as never, {id: userData._id})}>
                <MaterialCommunityIcons style={styles.btnText} name="badge-account-horizontal" />
                <Text style={styles.btnText}>Dashboard</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
}
