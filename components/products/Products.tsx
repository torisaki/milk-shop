import { View, StyleSheet } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import { ProductsData } from "@/data/ProductsData";

const styles = StyleSheet.create({
  products: {
    marginTop: 20, 
  },
});

const Products = () => {
  return (
    <View style={styles.products}>
      {ProductsData.map((p) => (
        <ProductCard key={p._id} p={p} />
      ))}
    </View>
  );
};

export default Products;
