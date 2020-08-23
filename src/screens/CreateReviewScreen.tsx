import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Alert,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";
import { IconButton } from "../components/IconButton";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const { shop } = route.params;

  useEffect(()=>{
    navigation.setOptions({
      title: shop.name,
      headerLeft:() => (
        <IconButton name="x" onPress={() => navigation.goBack()} />
      ),
    })
  }, [shop]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>CreateReviewScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  photoContainer: {
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
});
