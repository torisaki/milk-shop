import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useRoute, useNavigation } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  menuContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 25,
    color: '#000000'
  },
  iconText: {
    color: '#000000',
    fontSize: 10
  },
  active: {
    color: 'blue'
  }
})

const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("Home" as never)} >
        <MaterialCommunityIcons style={[styles.icon, route.name === 'Home' && styles.active]} name='home'/>
        <Text style={[styles.iconText, route.name === 'Home' && styles.active]}>Trang chủ</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("Notification" as never)}>
        <MaterialCommunityIcons style={[styles.icon, route.name === 'Notification' && styles.active]} name='bell-badge'/>
        <Text style={[styles.iconText, route.name === 'Notification' && styles.active]}>Thông báo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("Account" as never)}>
        <MaterialCommunityIcons style={[styles.icon, route.name === 'Account' && styles.active]} name='account'/>
        <Text style={[styles.iconText, route.name === 'Account' && styles.active]}>Tài khoản</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={() => navigation.navigate("Cart" as never)}>
        <MaterialCommunityIcons style={[styles.icon, route.name === 'Cart' && styles.active]} name='cart'/>
        <Text style={[styles.iconText, route.name === 'Cart' && styles.active]}>Giỏ hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuContainer} onPress={() => {alert('Logout'), navigation.navigate('Login' as never)}} >
        <MaterialCommunityIcons style={styles.icon} name='logout'/>
        <Text style={styles.iconText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer