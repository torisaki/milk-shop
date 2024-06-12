import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Layout from "@/components/layout/Layout";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  main: {
    backgroundColor: "lightgray",
    height: "96%",
  },
  header: {
    backgroundColor: "#000000",
    color: "#ffffff",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    margin: 10,
    borderRadius: 5,
    fontWeight: "bold",
  },
  btnContainer: {
    margin: 10
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    elevation: 10,
    marginBottom: 20 
  },
  icon: {
    fontSize: 25,
    marginRight: 10,
    marginLeft: 10
  },
  btnText: {
    fontSize: 20
  }
});

const Dashboard = () => {
  return (
    <Layout>
      <View style={styles.main}>
        <Text style={styles.header}>Dashboard</Text>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
                <MaterialCommunityIcons name="warehouse" style={styles.icon} />
                <Text style={styles.btnText}>Quản lý sản phẩm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <MaterialCommunityIcons name="menu" style={styles.icon} />
                <Text style={styles.btnText}>Quản lý doanh mục</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <MaterialCommunityIcons name="account-box-multiple" style={styles.icon} />
                <Text style={styles.btnText}>Quản lý tài khoản</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
                <MaterialCommunityIcons name="truck-check" style={styles.icon} />
                <Text style={styles.btnText}>Quản lý đơn hàng</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Dashboard;
