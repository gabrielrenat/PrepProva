import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {AcelerometroScreen, PedometroScreen, GyroscopioScreen, MagnetoScreen, AudioVideoScreen} from "../screens";
import colors from "../styles/colors";
import {MaterialCommunityIcons, FontAwesome, Foundation } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: { backgroundColor: colors.secondary },
                headerTintColor: colors.white,
                drawerStyle: { backgroundColor: colors.secondary },
                drawerActiveTintColor: colors.white,
                drawerInactiveTintColor: colors.white,
            }}
        >
            <Drawer.Screen
                name="AudioVideo"
                component={AudioVideoScreen}
                options={{
                    drawerLabel: "Áudio Vídeo",
                    drawerIcon: () => (
                        <MaterialCommunityIcons
                            name="video"
                            size={24}
                            color={colors.white}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Acelerometro"
                component={AcelerometroScreen}
                options={{
                    drawerLabel: "Acelerômetro",
                    drawerIcon: () => (
                        <FontAwesome
                            name="car"
                            size={24}
                            color={colors.white}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Pedometro"
                component={PedometroScreen}
                options={{
                    drawerLabel: "Pedômetro",
                    drawerIcon: () => (
                        <Foundation
                            name="foot"
                            size={24}
                            color={colors.white}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Gyroscopio"
                component={GyroscopioScreen}
                options={{
                    drawerLabel: "Gyroscópio",
                    drawerIcon: () => (
                        <FontAwesome
                            name="balance-scale"
                            size={24}
                            color={colors.white}
                        />
                    ),
                }}
            />
            <Drawer.Screen
                name="Magneto"
                component={MagnetoScreen}
                options={{
                    drawerLabel: "Magneto",
                    drawerIcon: () => (
                        <FontAwesome
                            name="magnet"
                            size={24}
                            color={colors.white}
                        />
                    ),
                }}
            />
        </Drawer.Navigator>
    )
}