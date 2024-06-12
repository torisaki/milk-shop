import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Layout from "@/components/layout/Layout";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },
  header: {
    fontSize: 30,
    fontWeight: "500",
    marginVertical: 20,
  },
  price: {
    fontSize: 20,
    marginBottom: 10,
    color: "gray",
  },
  paymentCard: {
    backgroundColor: "#ffffff",
    width: "90%",
    borderRadius: 10,
    padding: 30,
    marginVertical: 10,
  },
  paymentHeader: {
    color: "gray",
    marginBottom: 10,
  },
  paymentBtn: {
    backgroundColor: "#000000",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: 10,
  },
  paymentBtnText: {
    color: "#ffffff",
    textAlign: "center",
  },
});

const Checkout = ({ navigation }) => {
  const handleOnline = () => {
    navigation.navigate("Online");
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.header}>Thanh toán</Text>
        <Text style={styles.price}>Tổng: VNĐ</Text>
        <View style={styles.paymentCard}>
          <Text style={styles.paymentHeader}>Chọn phương thức thanh toán</Text>
          <TouchableOpacity style={styles.paymentBtn}>
            <Text style={styles.paymentBtnText}>Thanh toán khi nhận hàng</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}>
            <Text style={styles.paymentBtnText}>Online (Thẻ Credit/Debit)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  );
};

export default Checkout;
