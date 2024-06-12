import { View, Text } from "react-native";
import React from "react";
import Layout from "@/components/layout/Layout";

const Notification = () => {
  return (
    <Layout>
      <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
        <Text>Notification</Text>
      </View>
    </Layout>
  );
};

export default Notification;
