import { OneSignal } from "react-native-onesignal";

export function createUserInfoTag() {
  OneSignal.User.addTags({
    user_name: "Julio",
    user_email: "juliocarlos00@hotmail.com",
  });
}
export function removeUserEmailTag() {
  OneSignal.User.removeTag("user_email");
}

export function updateTagCard(itemsCount: string) {
  OneSignal.User.addTag("cart_items_count", itemsCount);
}
export function removeTagCard(itemsCount: string) {
  OneSignal.User.addTag("cart_items_count", itemsCount);
}
