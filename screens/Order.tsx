import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Layout from "@/components/layout/Layout";
import { orderData } from "@/data/orderData";
import OrderItem from "@/components/form/OrderItem";

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    },
    header: {
        textAlign: 'center',
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 20
    }
})

const Order = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.header}>Đơn hàng của tôi</Text>
        <ScrollView>
            {orderData.map(order => (
                <OrderItem key={order._id} order={order} />
            ))}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Order;
