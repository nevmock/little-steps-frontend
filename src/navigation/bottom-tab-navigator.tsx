import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomTabParamList } from "./types";

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

import React from "react";
import HomeStackNavigator from "./home-stack-navigator";
import WiseGuardScreen from "screens/wise-guard";
import MomsConnectScreen from "screens/moms-connect";
import ProfileScreen from "screens/profile-screens";
import Icons from "components/shared/icons";
import { useTheme } from "@shopify/restyle";

const BottomTabNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: theme.colors.gray550,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={() => ({
          title: "Beranda",
          tabBarIcon: ({ color }) => <Icons name="Beranda" color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="WiseGuard"
        component={WiseGuardScreen}
        options={() => ({
          title: "WiseGuard",
          tabBarIcon: ({ color }) => <Icons name="WiseGuard" color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="MomsConnect"
        component={MomsConnectScreen}
        options={() => ({
          title: "Moms Connect",
          tabBarIcon: ({ color }) => <Icons name="Moms Connect" color={color} />,
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          title: "Profil",
          tabBarIcon: ({ color }) => <Icons name="Profil" color={color} />,
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
