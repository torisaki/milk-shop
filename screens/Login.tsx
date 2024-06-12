import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputBox from "@/components/form/InputBox";

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

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginImage =
    "https://as1.ftcdn.net/v2/jpg/02/59/39/46/1000_F_259394679_GGA8JJAEkukYJL9XXFH2JoC3nMguBPNH.jpg";

  const handleRegister = () => {
    if (!email || !password) {
      return alert("Email hoặc mật khẩu sai!");
    }
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: loginImage }} />
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
        <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
          <Text style={styles.loginBtnText}>Đăng nhập</Text>
        </TouchableOpacity>
        <Text>
          Chưa có tài khoản?{""}
          <Text style={styles.link} onPress={() => navigation.navigate("Register")}>Đăng ký</Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
