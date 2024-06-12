import { View, Text, StatusBar, StyleSheet } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    zIndex: 100,
    borderTopWidth: 1,
    borderColor: "lightgray",
    position: "absolute",
    bottom: 0,
    padding: 10,
  },
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StatusBar/>  
      <View>{children}</View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </>
  );
};

export default Layout