import { Shop } from "./shop";

export type RootStackParamList = {
  Home: undefined;
  User: undefined;
  Shop: { shop: Shop };
};
