import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { getShops } from "./src/lib/firebase";
import { Shop } from "./src/lib/types/shop";

export default function App() {
  const [shops, setShops] = useState<Shop[]>([]); //初期値はカラの配列、<Shop[]>はTypeScriotの型を反映させる
  useEffect(() => {
    getFirebaseItems();
  }, []); //第２引数を[]のようにカラにしておくとコンポーネント初期化時に一度だけ呼び出せる

  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);
    // console.log(shops);
  };

  const shopItems = shops.map((shop, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ));

  return <View style={styles.container}>{shopItems}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
