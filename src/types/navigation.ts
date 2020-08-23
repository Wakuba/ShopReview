import { Shop } from "./shop";

export type RootStackParamList = {
  Home: undefined;
  User: undefined;
  Shop: { shop: Shop };
  CreateReview: { shop: Shop };
  Main: undefined;
};
