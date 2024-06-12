import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import InputBox from '@/components/form/InputBox';

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      height: "100%",
    },
    image: {
      height: 200,
      width: "100%",
      resizeMode: "contain",
    },
    btnContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    loginBtn: {
      backgroundColor: "#000000",
      width: "80%",
      justifyContent: "center",
      height: 40,
      borderRadius: 10,
      marginHorizontal: 20,
      marginVertical: 20,
    },
    loginBtnText: {
      color: "#ffffff",
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: "500",
      fontSize: 18,
    },
    link: {
      color: 'red'
    }
  });

const Register = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
    const loginImage =
      "https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg";
  
    const handleLogin = () => {
      if (!email || !password || !name || !address || !phone) {
        return alert("Vui lòng điền tất cả thông tin!");
      }
      navigation.navigate("Login");
    };
    return (
      <View style={styles.container}>
        <Image source={{ uri: loginImage }} />
        <InputBox
        placeholder={"Nhập tên"}
        autoComplete={"off"}
        value={name}
        setValue={setName}
        secureTextEntry={false}
      />
      <InputBox
        placeholder={"Nhập địa chỉ"}
        autoComplete={"off"}
        value={address}
        setValue={setAddress}
        secureTextEntry={false}
      />
      <InputBox
        placeholder={"Nhập số điện thoại"}
        autoComplete={"off"}
        value={phone}
        setValue={setPhone}
        secureTextEntry={false}
      />
        <InputBox
          placeholder={"Nhập email"}
          autoComplete={"email"}
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />
        <InputBox
          placeholder={"Nhập mật khẩu"}
          secureTextEntry={true}
          value={password}
          setValue={setPassword}
          autoComplete={"off"}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginBtnText}>Đăng ký</Text>
          </TouchableOpacity>
          <Text>
            Đã có tài khoản?{""}
            <Text style={styles.link} onPress={() => navigation.navigate("Login")}>Đăng nhập</Text>
          </Text>
        </View>
      </View>
    );
}

export default Register