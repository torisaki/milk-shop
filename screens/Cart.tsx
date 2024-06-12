import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CartData } from "@/data/CartData";
import PriceTable from "@/components/cart/PriceTable";
import Layout from "@/components/layout/Layout";
import CartItem from "@/components/cart/CartItem";

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    color: "green",
    marginTop: 10,
  },
  total: {
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "#ffffff",
    padding: 5,
    margin: 5,
    marginHorizontal: 20,
  },
  btnCheckout: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#000000',
    width: '90%',
    marginHorizontal: 20,
    borderRadius: 20
  },
  btnCheckoutText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18
  }
});

const Cart = ({navigation}) => {
  const [cartItems, setCartItems] = useState(CartData);
  return (
    <Layout>
      <Text style={styles.header}>
        {cartItems?.length > 0
          ? `Bạn có ${cartItems?.length} vật phẩm trong giỏ hàng`
          : "Giỏ hàng trống!"}
      </Text>
      {cartItems?.length > 0 && (
        <>
          <ScrollView>
            {cartItems?.map((item) => (
              <CartItem item={item} key={item._id} />
            ))}
          </ScrollView>
          <View>
            <PriceTable title={"Gía"} price={999} />
            <PriceTable title={"Thuế"} price={999} />
            <PriceTable title={"Shipping"} price={999} />
            <View style={styles.total}>
              <PriceTable title={"Tổng"} price={999} />
            </View>
            <TouchableOpacity style={styles.btnCheckout} onPress={() => navigation.navigate("Checkout" as never)}>
              <Text style={styles.btnCheckoutText}>THANH TOÁN</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Layout>
  );
};

export default Cart;
