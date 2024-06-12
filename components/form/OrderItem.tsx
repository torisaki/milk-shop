import { View, Text, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  orderInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "lightgray",
    paddingBottom: 5,
  },
  status: {
    borderTopWidth: 1,
    fontWeight: "bold",
    borderColor: "lightgray",
    padding: 5
  },
});

const OrderItem = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text>ID Đơn hàng: {order._id}</Text>
        <Text>Ngày: {order.date}</Text>
      </View>
      <Text>Tên sản phẩm: {order.productInfo.name} </Text>
      <Text>Gía: {order.productInfo.price} </Text>
      <Text>Số lượng: {order.productInfo.quantity}</Text>
      <Text>Tổng: {order.totalAmount} VNĐ</Text>
      <Text style={styles.status}>Trạng thái đơn hàng: {order.status}</Text>
    </View>
  );
};

export default OrderItem;
