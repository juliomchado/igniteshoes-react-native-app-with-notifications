import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { Routes } from "./src/routes";

import { THEME } from "./src/theme";
import { Loading } from "./src/components/Loading";

import { CartContextProvider } from "./src/contexts/CartContext";
import { NotificationClickEvent, OneSignal } from "react-native-onesignal";
import { createUserInfoTag } from "./src/notifications/notificationsTags";
import { useEffect } from "react";

OneSignal.initialize("aa17c3b5-d4f4-4989-9062-daff62a8a981");
OneSignal.Notifications.requestPermission(true);
export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  // createUserInfoTag();

  useEffect(() => {
    const handleNotificationClick = (event: NotificationClickEvent) => {
      const { actionId } = event.result;

      switch (actionId) {
        case "1":
          console.log("Verr todos");
          break;
        case "2":
          console.log("Ver pedido");
          break;

        default:
          console.log("Nenhum botão de ação selecionado");
          break;
      }
    };

    OneSignal.Notifications.addEventListener("click", handleNotificationClick);

    return () =>
      OneSignal.Notifications.removeEventListener(
        "click",
        handleNotificationClick
      );
  }, []);

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
