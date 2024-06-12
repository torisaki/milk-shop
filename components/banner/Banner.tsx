import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Carousel from 'react-native-reanimated-carousel'
import React from "react";
import {bannerData} from "@/data/BannerData";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    height: 90,
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
  },
  card: {
    width: width,
    height: width * 0.4,
  },
});

const Banner = () => {
  const _renderItem = ({ item }: { item: (typeof bannerData)[number] }) => {
    return (
      <>

      <View key={item.coverImageUri} style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
          <Image style={styles.card} source={{ uri: item.coverImageUri }} />
        </View>
      </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
         data={bannerData}
         renderItem={_renderItem}
         width={width}
         height={width * 0.2}
         loop={true}
         autoPlay={true}
         autoPlayInterval={3000}
       />
    </View>  
  );
};

export default Banner;
