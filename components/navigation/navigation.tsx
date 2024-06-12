import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/screens/Home";
import About from "@/screens/About";
import ProductDetails from "@/screens/ProductDetails";
import Cart from "@/screens/Cart";
import Checkout from "@/screens/Checkout";
import OnlineCheckout from "@/screens/OnlineCheckout";
import Login from "@/screens/Login";
import Register from "@/screens/Register";
import Account from "@/screens/Account";
import Notification from "@/screens/Notification";
import Profile from "@/screens/Profile";
import Order from "@/screens/Order";
import Dashboard from "@/screens/Dashboard";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="pDetails" component={ProductDetails} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Online" component={OnlineCheckout} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Navigator>

  );
}
