import { CompositeNavigationProp, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// navigation types for auth stack
// (screens that are only accessible when user is not authenticated)
export type AuthStackParamList = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

// navigation types for root bottom tab
export type RootBottomTabParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  WiseGuard: undefined;
  MomsConnect: undefined;
  Profile: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
};

// TODO: implement the types for the rest of the stacks

export type AppStackParamList = {
  Root: NavigatorScreenParams<RootBottomTabParamList>;
  Settings: undefined;
};

export type RootStackParamList = {
  AppStack: NavigatorScreenParams<AppStackParamList>;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

// declare the types for react navigation
// to provide type safety for the navigation
// and autocompletion for navigation
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

// CompositeNavigationProp is used when a screen needs to combine
// multiple navigation props, typically between its own stack
export type AuthScreenNavigationType<RouteName extends keyof AuthStackParamList> =
  CompositeNavigationProp<
    NativeStackNavigationProp<AuthStackParamList, RouteName>,
    NativeStackNavigationProp<AppStackParamList, "Root">
  >;
