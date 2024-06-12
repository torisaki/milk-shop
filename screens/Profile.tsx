import { View, Text, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { userData } from "@/data/userData";
import Layout from "@/components/layout/Layout";
import InputBox from "@/components/form/InputBox";

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 100,
    width: '100%',
    resizeMode: 'contain'
  },
  btnUpdate: {
    backgroundColor: '#000000',
    height: 40,
    borderRadius: 20,
    marginHorizontal: 30,
    justifyContent: 'center',
    marginTop: 10
  },
  btnUpdateText: {
    color: '#ffffff',
    fontSize: 18, 
    textAlign: 'center'
  }
});

const Profile = ({navigation}) => {
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);
  const [name, setName] = useState(userData.name);
  const [address, setAddress] = useState(userData.address);
  const [phone, setPhone] = useState(userData.phone);
  const [avatar, setAvatar] = useState(userData.avatar);

  const handleUpdate = () => {
    if (!email || !password || !name || !address || !phone) {
        return alert("Vui lòng điền tất cả thông tin!");
      }
      navigation.navigate("Account");
  }
  return (
    <Layout>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: avatar }} />
            <Pressable onPress={() => alert('update box')} >
                <Text style={{color: 'red'}}>Cập nhật ảnh đại diện</Text>
            </Pressable>
          </View>
          <InputBox value={name} setValue={setName} placeholder={"Nhập tên"} autoComplete={"off"} secureTextEntry={false} />
          <InputBox value={email} setValue={setEmail} placeholder={"Nhập email"} autoComplete={"email"} secureTextEntry={false} />
          <InputBox value={password} setValue={setPassword} placeholder={"Nhập mật khẩu"} autoComplete={"off"} secureTextEntry={true} />
          <InputBox value={address} setValue={setAddress} placeholder={"Nhập địa chỉ"} autoComplete={"off"} secureTextEntry={false} />
          <InputBox value={phone} setValue={setPhone} placeholder={"Nhập số điện thoại"} autoComplete={"off"} secureTextEntry={false} />
          <TouchableOpacity style={styles.btnUpdate} onPress={handleUpdate} >
            <Text style={styles.btnUpdateText}>Cập nhật hồ sơ</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Profile;
