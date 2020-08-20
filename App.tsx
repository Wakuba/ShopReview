import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import "firebase/firestore";
import { StyleSheet, Text, View, SnapshotViewIOS } from "react-native";

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyD_MQDUVbrQ2muTjzEAwHs58ykeHFGzgZ0",
    authDomain: "shop-review-64ee4.firebaseapp.com",
    databaseURL: "https:/shop-review-64ee4firebaseio.com",
    projectId: "shop-review-64ee4",
    storageBucket: "shop-review-64ee4.appspot.com",
    messagingSenderId: "177053344472",
    appId: "1:177053344472:web:bf15723428d41773f06dad",
    measurementId: "G-GX1WFWD62X",
  };
  firebase.initializeApp(firebaseConfig);
}

//TypeScriptで型を定義
type Shop = {
  name: string;
  place: string;
};

export default function App() {
  const [shops, setShops] = useState<Shop[]>([]); //初期値はカラの配列、<Shop[]>はTypeScriotの型を反映させる
  useEffect(() => {
    getFirebaseItems();
  }, []); //第２引数を[]のようにカラにしておくとコンポーネント初期化時に一度だけ呼び出せる

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection("shops").get();
    const shops = snapshot.docs.map((doc) => doc.data() as Shop);
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
